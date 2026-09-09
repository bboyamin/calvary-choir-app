import urllib.request
import ssl
import json
import re

url = "https://www.youtube.com/playlist?list=PLKCgcz4bwtVKBy6iqdceHaYhnL9pBgjWu"
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9'
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, context=ctx) as resp:
    html = resp.read().decode('utf-8')

match = re.search(r'var ytInitialData = ({.*?});</script>', html, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    
    found_videos = []
    def walk(obj):
        if isinstance(obj, dict):
            if 'lockupViewModel' in obj:
                l = obj['lockupViewModel']
                vid = l.get('contentId')
                title = ""
                if 'metadata' in l and 'lockupMetadataViewModel' in l['metadata']:
                    meta = l['metadata']['lockupMetadataViewModel']
                    if 'title' in meta and 'content' in meta['title']:
                        title = meta['title']['content']
                if vid and title:
                    found_videos.append({'videoId': vid, 'title': title})
            for v in obj.values():
                walk(v)
        elif isinstance(obj, list):
            for item in obj:
                walk(item)
    
    walk(data)
    print(f"Extracted {len(found_videos)} videos from initial page:")
    for v in found_videos:
        if '말씀' in v['title'] or '주여' in v['title']:
            print("MATCH:", v)
        else:
            # print first 10
            pass

    print("\nAll titles containing 임마누엘:")
    for v in found_videos:
        if '임마누엘' in v['title']:
            print(f"[{v['videoId']}] {v['title']}")
