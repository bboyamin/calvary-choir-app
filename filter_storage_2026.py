import json
import re
import urllib.request
import ssl

with open('js/storage.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Extract praises JSON array from storage.js
match = re.search(r'praises:\s*(\[[\s\S]*?\n    \]),', code)
if not match:
    print("Could not find praises array in storage.js")
    exit(1)

praises_all = json.loads(match.group(1))
print(f"Total praises before filter: {len(praises_all)}")

# Filter date >= 2026-01-01
praises_2026 = [p for p in praises_all if p.get('date') and p.get('date') >= '2026-01-01']
print(f"Total praises from 2026-01-01 onwards: {len(praises_2026)}")

# Re-assign clean IDs (p_imm_001 to p_imm_037)
for idx, p in enumerate(praises_2026, 1):
    p['id'] = f'p_imm_{idx:03d}'

# Upgrade DATA_VERSION from 'v8' to 'v9'
code = re.sub(r"DATA_VERSION:\s*'v8'", "DATA_VERSION: 'v9'", code)
code = re.sub(r"if \(currentVer !== 'v8'\)", "if (currentVer !== 'v9')", code)

# Replace praises array
praises_json_str = json.dumps(praises_2026, ensure_ascii=False, indent=4)
praises_formatted = "praises: " + praises_json_str.replace('\n', '\n    ') + ","

code = re.sub(r'praises:\s*\[[\s\S]*?\n    \],', praises_formatted, code)

with open('js/storage.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated js/storage.js with 2026 praises and DATA_VERSION v9!")

# Push to live Vercel Cloud API
url = "https://calvary-ch.vercel.app/api/storage"
headers = {'Content-Type': 'application/json'}
payload = {
    "category": "praises",
    "data": praises_2026
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
