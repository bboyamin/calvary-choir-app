import json

with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

tokens = []

def walk(obj, path=""):
    if isinstance(obj, dict):
        if 'continuationCommand' in obj:
            tokens.append((path, obj['continuationCommand']))
        for k, v in obj.items():
            walk(v, path + "." + k)
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            walk(item, path + f"[{idx}]")

walk(data)

print(f"Tokens count: {len(tokens)}")
for p, t in tokens:
    print("Path:", p)
    print("Command:", t)
