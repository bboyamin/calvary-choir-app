import json
import urllib.request
import ssl
import re
import time

API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9'
}

def post_innertube(url, payload):
    data_bytes = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data_bytes, headers=headers, method='POST')
    with urllib.request.urlopen(req, context=ctx) as resp:
        return json.loads(resp.read().decode('utf-8'))

all_raw_items = []
continuation_tokens = []

def extract_nodes(obj):
    if isinstance(obj, dict):
        if 'lockupViewModel' in obj:
            l = obj['lockupViewModel']
            content_id = l.get('contentId')
            title = ""
            if 'metadata' in l and 'lockupMetadataViewModel' in l['metadata']:
                meta = l['metadata']['lockupMetadataViewModel']
                if 'title' in meta and 'content' in meta['title']:
                    title = meta['title']['content']
            if content_id and title:
                all_raw_items.append({'videoId': content_id, 'title': title})
        elif 'playlistVideoRenderer' in obj:
            r = obj['playlistVideoRenderer']
            vid = r.get('videoId')
            title = ""
            if 'title' in r and 'runs' in r['title']:
                title = ''.join([run.get('text', '') for run in r['title']['runs']])
            elif 'title' in r and 'simpleText' in r['title']:
                title = r['title']['simpleText']
            if vid and title:
                all_raw_items.append({'videoId': vid, 'title': title})

        if 'continuationCommand' in obj:
            token = obj['continuationCommand'].get('token')
            if token and token not in continuation_tokens:
                continuation_tokens.append(token)

        for v in obj.values():
            extract_nodes(v)
    elif isinstance(obj, list):
        for item in obj:
            extract_nodes(item)

# 1. Parse initial page
with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    initial_data = json.load(f)

extract_nodes(initial_data)

print(f"Page 1: Extracted {len(all_raw_items)} items. Initial continuation tokens found: {len(continuation_tokens)}")

# 2. Paginate continuation requests
page = 1
max_pages = 50
visited_tokens = set()

while continuation_tokens and page <= max_pages:
    page += 1
    token_to_use = continuation_tokens.pop(0)
    if token_to_use in visited_tokens:
        continue
    visited_tokens.add(token_to_use)
    
    url = f"https://www.youtube.com/youtubei/v1/browse?key={API_KEY}"
    payload = {
        "context": {
            "client": {
                "clientName": "WEB",
                "clientVersion": "2.20260902.07.00",
                "hl": "ko",
                "gl": "KR"
            }
        },
        "continuation": token_to_use
    }
    
    try:
        res = post_innertube(url, payload)
        prev_count = len(all_raw_items)
        extract_nodes(res)
        new_count = len(all_raw_items)
        print(f"Page {page}: +{new_count - prev_count} items (Total raw: {new_count}). Remaining tokens: {len(continuation_tokens)}")
        time.sleep(0.3)
    except Exception as e:
        print(f"Continuation error on page {page}: {e}")

print(f"\n==========================================")
print(f"TOTAL RAW ITEMS FETCHED across all pages: {len(all_raw_items)}")
print(f"==========================================")

# Deduplicate raw items by videoId while keeping order
seen_vids = set()
unique_raw_items = []
for item in all_raw_items:
    if item['videoId'] not in seen_vids:
        seen_vids.add(item['videoId'])
        unique_raw_items.append(item)

print(f"Total unique raw videos: {len(unique_raw_items)}")

# Filter specifically for Immanuel Choir (임마누엘 성가대 / 주일1부)
immanuel_praises = []

for v in unique_raw_items:
    title = v['title']
    vid = v['videoId']
    url = f"https://www.youtube.com/watch?v={vid}"

    if '임마누엘' not in title:
        continue

    # Extract date
    date_match = re.search(r'(\d{2,4})[년\.]\s*(\d{1,2})[월\.]\s*(\d{1,2})[일\.]?', title)
    parsed_date = ""
    if date_match:
        yy, mm, dd = date_match.groups()
        year = ("20" + yy) if len(yy) == 2 else yy
        parsed_date = f"{year}-{mm.zfill(2)}-{dd.zfill(2)}"
    else:
        date_match2 = re.search(r'(\d{2,4})\.(\d{1,2})\.(\d{1,2})', title)
        if date_match2:
            yy, mm, dd = date_match2.groups()
            year = ("20" + yy) if len(yy) == 2 else yy
            parsed_date = f"{year}-{mm.zfill(2)}-{dd.zfill(2)}"

    # Clean song title
    clean_song = title
    clean_song = re.sub(r'\d{2,4}[년\.]\s*\d{1,2}[월\.]\s*\d{1,2}[일\.]?', '', clean_song)
    clean_song = re.sub(r'\d{2,4}\.\d{1,2}\.\d{1,2}', '', clean_song)
    clean_song = re.sub(r'임마누엘\s*성가대\s*\(주일1부\)|임마누엘\s*성가대\(1부\)|임마누엘성가대\(1부\)|임마누엘\s*성가대|임마누엘성가대|주일1부|1부', '', clean_song)
    clean_song = re.sub(r'-\s*갈보리교회|갈보리교회', '', clean_song)
    clean_song = clean_song.strip(' "“‘”’-_')

    if not clean_song:
        clean_song = title

    immanuel_praises.append({
        'id': 'p_' + str(int(time.time() * 1000) + len(immanuel_praises)),
        'type': 'all',
        'partTarget': '',
        'title': clean_song,
        'date': parsed_date,
        'youtubeUrl': url,
        'raw_title': title
    })

print(f"\n==========================================")
print(f"FILTERED IMMANUEL CHOIR PRAISES: {len(immanuel_praises)}")
print(f"==========================================")

for idx, p in enumerate(immanuel_praises[:25], 1):
    print(f"{idx:2d}. [{p['date']}] {p['title']} ({p['youtubeUrl']})")

with open('immanuel_praises_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(immanuel_praises, f, ensure_ascii=False, indent=2)

print("\nSaved immanuel_praises_extracted.json successfully!")
