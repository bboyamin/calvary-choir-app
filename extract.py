import json
import re

with open('yt_playlist.html', 'r', encoding='utf-8') as f:
    html = f.read()

m = re.search(r'var ytInitialData = ({.*?});</script>', html)
if not m:
    print("ytInitialData not found!")
    exit(1)

data = json.loads(m.group(1))

videos = []

def extract(obj):
    if isinstance(obj, dict):
        if 'playlistVideoRenderer' in obj:
            r = obj['playlistVideoRenderer']
            vid = r.get('videoId')
            title = ''
            if 'title' in r and 'runs' in r['title']:
                title = ''.join([run.get('text', '') for run in r['title']['runs']])
            if vid and title:
                videos.append({'videoId': vid, 'title': title})
        else:
            for v in obj.values():
                extract(v)
    elif isinstance(obj, list):
        for item in obj:
            extract(item)

extract(data)

print(f"Total videos in playlist: {len(videos)}")

immanuel_list = []
for v in videos:
    t = v['title']
    if '임마누엘' in t:
        immanuel_list.append(v)

print(f"Immanuel videos found: {len(immanuel_list)}")
print("-" * 60)

parsed_praises = []

for idx, item in enumerate(immanuel_list, 1):
    vid = item['videoId']
    raw_title = item['title']
    url = f"https://www.youtube.com/watch?v={vid}"

    # Extract date (e.g. 26.09.06 or 2026.09.06 or 26.9.6 or 24.10.13)
    date_match = re.search(r'(\d{2,4})\.(\d{1,2})\.(\d{1,2})', raw_title)
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

    # Extract song title
    # Title format example: "26.09.06 임마누엘성가대(1부) 참 좋으신 주님 - 갈보리교회"
    # or "24.10.13 임마누엘성가대(1부) 참 좋은 나의 친구 - 갈보리교회"
    clean_song = raw_title
    # Remove date
    clean_song = re.sub(r'\d{2,4}\.\d{1,2}\.\d{1,2}', '', clean_song).strip()
    # Remove "임마누엘성가대(1부)", "임마누엘 성가대(1부)", "임마누엘성가대", "1부"
    clean_song = re.sub(r'임마누엘\s*성가대\(1부\)|임마누엘성가대\(1부\)|임마누엘\s*성가대|임마누엘성가대', '', clean_song).strip()
    # Remove "- 갈보리교회", "갈보리교회"
    clean_song = re.sub(r'-\s*갈보리교회|갈보리교회', '', clean_song).strip()

    parsed_praises.append({
        'raw_title': raw_title,
        'date': parsed_date,
        'song_title': clean_song,
        'youtubeUrl': url,
        'videoId': vid
    })

    print(f"{idx}. [{parsed_date}] {clean_song} ({url})")

with open('parsed_immanuel_praises.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_praises, f, ensure_ascii=False, indent=2)

print("\nSaved parsed_immanuel_praises.json")
