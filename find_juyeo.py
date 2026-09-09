import json
import re

# Search in yt_initial_data.json if exists or search YouTube Innertube
try:
    with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    matches = []
    def walk(obj):
        if isinstance(obj, dict):
            if 'videoId' in obj:
                # check title
                title = ""
                if 'title' in obj:
                    t_obj = obj['title']
                    if isinstance(t_obj, dict):
                        if 'runs' in t_obj:
                            title = ''.join([r.get('text', '') for r in t_obj['runs']])
                        elif 'simpleText' in t_obj:
                            title = t_obj['simpleText']
                if '말씀' in title or '주여' in title:
                    matches.append({'videoId': obj['videoId'], 'title': title})
            for v in obj.values():
                walk(v)
        elif isinstance(obj, list):
            for item in obj:
                walk(item)

    walk(data)

    print(f"Found {len(matches)} matches in yt_initial_data:")
    for m in matches:
        print(m)
except Exception as e:
    print("Search error:", e)
