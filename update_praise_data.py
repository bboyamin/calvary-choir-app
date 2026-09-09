import json
import re
import urllib.request
import ssl

# 1. Load extracted praises
with open('immanuel_praises_extracted.json', 'r', encoding='utf-8') as f:
    extracted = json.load(f)

print(f"Loaded {len(extracted)} extracted praises.")

# Clean extracted praises (remove raw_title field before inserting into frontend code)
praises_to_save = []
for idx, item in enumerate(extracted, 1):
    praises_to_save.append({
        'id': f'p_imm_{idx:03d}',
        'type': 'all',
        'partTarget': '',
        'title': item['title'],
        'date': item['date'],
        'youtubeUrl': item['youtubeUrl']
    })

# Sort by date descending (latest worship first)
praises_to_save.sort(key=lambda x: x['date'], reverse=True)

print("Sample 5 praises:")
for p in praises_to_save[:5]:
    print(p)

# 2. Update js/storage.js
with open('js/storage.js', 'r', encoding='utf-8') as f:
    storage_code = f.read()

# Replace DATA_VERSION 'v7' with 'v8'
storage_code = re.sub(r"DATA_VERSION:\s*'v7'", "DATA_VERSION: 'v8'", storage_code)
storage_code = re.sub(r"if \(currentVer !== 'v7'\)", "if (currentVer !== 'v8')", storage_code)

# Replace praises: [], in DEFAULT_DATA
praises_json_str = json.dumps(praises_to_save, ensure_ascii=False, indent=4)
# Indent properly for JS format
praises_formatted = "praises: " + praises_json_str.replace('\n', '\n    ') + ","

storage_code = re.sub(r'praises:\s*\[\s*\],', praises_formatted, storage_code)

with open('js/storage.js', 'w', encoding='utf-8') as f:
    f.write(storage_code)

print("Successfully updated js/storage.js with DEFAULT_DATA.praises and DATA_VERSION v8!")

# 3. Post directly to live Vercel Cloud Storage API
print("Pushing updated praises to Vercel Live Cloud Storage (https://calvary-ch.vercel.app/api/storage)...")
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
        print("Cloud API response:", res_data)
except Exception as e:
    print("Cloud API push error:", e)
