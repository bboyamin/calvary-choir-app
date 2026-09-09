import json
import re
import urllib.request
import ssl

with open('immanuel_praises_extracted.json', 'r', encoding='utf-8') as f:
    extracted = json.load(f)

praises_to_save = []

for idx, item in enumerate(extracted, 1):
    raw = item['raw_title']
    title = item['title']

    # Filter out if it explicitly says '베들레헴 성가대' or '할렐루야' without Immanuel
    if '베들레헴' in raw and '임마누엘' not in raw:
        continue

    # Further clean title
    t = title
    t = re.sub(r'임마누엘\s*솔리스트|\b솔리스트\b|베들레헴\s*성가대', '', t)
    t = re.sub(r'\(.*?\)', '', t)
    t = re.sub(r'\[.*?\]', '', t)
    t = t.strip(' "“‘”’-_()\t')

    if not t:
        t = title.strip(' "“‘”’-_()\t')

    praises_to_save.append({
        'id': f'p_imm_{len(praises_to_save)+1:03d}',
        'type': 'all',
        'partTarget': '',
        'title': t,
        'date': item['date'],
        'youtubeUrl': item['youtubeUrl']
    })

# Sort by date descending
praises_to_save.sort(key=lambda x: x['date'], reverse=True)

print(f"Total cleaned Immanuel praises: {len(praises_to_save)}")
print("Tail 10 items:")
for p in praises_to_save[-10:]:
    print(p)

# Update js/storage.js
with open('js/storage.js', 'r', encoding='utf-8') as f:
    storage_code = f.read()

praises_json_str = json.dumps(praises_to_save, ensure_ascii=False, indent=4)
praises_formatted = "praises: " + praises_json_str.replace('\n', '\n    ') + ","

# Replace praises array
storage_code = re.sub(r'praises:\s*\[[\s\S]*?\n    \],', praises_formatted, storage_code)

with open('js/storage.js', 'w', encoding='utf-8') as f:
    f.write(storage_code)

print("Updated js/storage.js cleanly!")

# Push to live Vercel Cloud API
url = "https://calvary-ch.vercel.app/api/storage"
headers = {'Content-Type': 'application/json'}
payload = {
    "category": "praises",
    "data": praises_to_save
}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers, method='POST')
try:
    with urllib.request.urlopen(req, context=ctx) as resp:
        res_data = json.loads(resp.read().decode('utf-8'))
        print("Cloud API response:", res_data.get('success'))
except Exception as e:
    print("Cloud API error:", e)
