import urllib.request
import ssl
import json
import re

url = "https://www.youtube.com/playlist?list=PLKCgcz4bwtVKBy6iqdceHaYhnL9pBgjWu"
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'ko-KR,ko;q=0.9'
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, context=ctx) as resp:
    html = resp.read().decode('utf-8')

print("HTML length:", len(html))

match = re.search(r'var ytInitialData = ({.*?});</script>', html, re.DOTALL)
if not match:
    match = re.search(r'window\["ytInitialData"\] = ({.*?});', html, re.DOTALL)

if match:
    print("Found ytInitialData!")
    data = json.loads(match.group(1))
    with open('yt_initial_data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Saved yt_initial_data.json")
else:
    print("ytInitialData not found!")
