import json
import urllib.request
import ssl
import re
import time

API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"
PLAYLIST_BROWSE_ID = "VLPLKCgcz4bwtVKBy6iqdceHaYhnL9pBgjWu"

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

all_videos = []
continuation_token = None

# Initial browse request
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
    "browseId": PLAYLIST_BROWSE_ID
}

print("Fetching initial playlist page...")
res = post_innertube(url, payload)

def extract_from_node(node):
    global continuation_token
    if isinstance(node, dict):
        if 'playlistVideoRenderer' in node:
            r = node['playlistVideoRenderer']
            vid = r.get('videoId')
            title = ''
            if 'title' in r and 'runs' in r['title']:
                title = ''.join([run.get('text', '') for run in r['title']['runs']])
            if vid and title:
                all_videos.append({'videoId': vid, 'title': title})
        elif 'continuationItemRenderer' in node:
            c_elem = node['continuationItemRenderer']
            if 'continuationEndpoint' in c_elem:
                endpoint = c_elem['continuationEndpoint']
                if 'continuationCommand' in endpoint:
                    continuation_token = endpoint['continuationCommand'].get('token')
        else:
            for v in node.values():
                extract_from_node(v)
    elif isinstance(node, list):
        for item in node:
            extract_from_node(item)

extract_from_node(res)

print(f"Loaded {len(all_videos)} videos so far. Continuation token: {bool(continuation_token)}")

# Paginate continuation requests
page = 1
max_pages = 40  # up to ~4000 items

while continuation_token and page <= max_pages:
    page += 1
    print(f"Fetching continuation page {page}...")
    token_to_use = continuation_token
    continuation_token = None
    
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
        prev_count = len(all_videos)
        extract_from_node(res)
        new_count = len(all_videos)
        print(f"Page {page}: +{new_count - prev_count} videos (Total: {new_count})")
        if new_count == prev_count:
            break
        time.sleep(0.3)
    except Exception as e:
        print(f"Continuation error: {e}")
        break

print(f"\n==========================================")
print(f"TOTAL VIDEOS FETCHED: {len(all_videos)}")
print(f"==========================================")

# Filter for Immanuel Choir (1st service)
immanuel_praises = []

for v in all_videos:
    title = v['title']
    vid = v['videoId']
    url = f"https://www.youtube.com/watch?v={vid}"

    # Filter condition: must contain '임마누엘' or '1부'
    if '임마누엘' not in title:
        continue

    # Extract date
    date_match = re.search(r'(\d{2,4})\.(\d{1,2})\.(\d{1,2})', title)
    parsed_date = ""
    if date_match:
        yy, mm, dd = date_match.groups()
        if len(yy) == 2:
            year = "20" + yy
        else:
            year = yy
        month = mm.zfill(2)
        day = dd.zfill(2)
        parsed_date = f"{year}-{month}-{day}"

    # Extract clean song title
    clean_song = title
    clean_song = re.sub(r'\d{2,4}\.\d{1,2}\.\d{1,2}', '', clean_song).strip()
    clean_song = re.sub(r'임마누엘\s*성가대\(1부\)|임마누엘성가대\(1부\)|임마누엘\s*성가대|임마누엘성가대|1부', '', clean_song).strip()
    clean_song = re.sub(r'-\s*갈보리교회|갈보리교회', '', clean_song).strip()
    clean_song = clean_song.strip(' -_')

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

print(f"Found {len(immanuel_praises)} Immanuel Choir videos!")
for idx, p in enumerate(immanuel_praises[:15], 1):
    print(f"{idx}. [{p['date']}] {p['title']} ({p['youtubeUrl']})")

with open('immanuel_praises_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(immanuel_praises, f, ensure_ascii=False, indent=2)

print("\nSaved immanuel_praises_extracted.json")
