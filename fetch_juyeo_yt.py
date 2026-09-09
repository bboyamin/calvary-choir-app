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

matches = re.findall(r'"videoId":\s*"([^"]+)".*?"title":\s*\{\s*"runs":\s*\[\s*\{\s*"text":\s*"([^"]+)"', html)
print("Regex matches count:", len(matches))

found = []
for vid, title in matches:
    if '말씀' in title or '주여' in title:
        found.append((vid, title))

if not found:
    # search text in html directly
    all_titles = re.findall(r'"title":\s*\{\s*"runs":\s*\[\s*\{\s*"text":\s*"([^"]+)"', html)
    all_vids = re.findall(r'"videoId":\s*"([^"]+)"', html)
    print(f"Total vids: {len(all_vids)}, Total titles: {len(all_titles)}")
    # search raw string
    for line in html.split('\n'):
        if '말씀' in line:
            print("Line snippet with 말씀:", line[:200])

print("Found items:")
for f in found:
    print(f)
