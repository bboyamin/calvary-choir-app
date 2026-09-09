import json

with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def print_keys(d, depth=0, max_depth=3):
    if depth > max_depth:
        return
    if isinstance(d, dict):
        for k, v in d.items():
            print("  " * depth + str(k))
            print_keys(v, depth + 1, max_depth)
    elif isinstance(d, list) and len(d) > 0:
        print("  " * depth + f"[List of {len(d)} items]")
        print_keys(d[0], depth + 1, max_depth)

print("Top keys:", list(data.keys()))
print_keys(data, max_depth=4)
