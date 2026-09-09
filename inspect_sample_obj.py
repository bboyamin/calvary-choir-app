import json

with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

v_list = []

def walk(obj, path=""):
    if isinstance(obj, dict):
        if 'videoId' in obj:
            v_list.append((path, obj))
        for k, v in obj.items():
            walk(v, path + "." + k)
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            walk(item, path + f"[{idx}]")

walk(data)

print(f"Total video dicts: {len(v_list)}")
for i in range(min(5, len(v_list))):
    path, obj = v_list[i]
    print(f"\n--- Item {i} ---")
    print("Path:", path)
    print("Keys:", list(obj.keys()))
    print("Sample content:", json.dumps(obj, ensure_ascii=False)[:300])
