import json

with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

v_list = []
continuation_tokens = []

def walk(obj, path=""):
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
            v_list.append({'videoId': obj['videoId'], 'title': title, 'keys': list(obj.keys()), 'path': path})
        if 'continuationCommand' in obj:
            token = obj['continuationCommand'].get('token')
            if token:
                continuation_tokens.append(token)
        for k, v in obj.items():
            walk(v, path + "." + k)
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            walk(item, path + f"[{idx}]")

walk(data)

print(f"Total video dicts found: {len(v_list)}")
print(f"Total continuation tokens: {len(continuation_tokens)}")

# Filter unique videoId with titles
unique_videos = {}
for v in v_list:
    vid = v['videoId']
    title = v['title']
    if title and vid not in unique_videos:
        unique_videos[vid] = title

print(f"Unique videos with titles: {len(unique_videos)}")
for idx, (vid, title) in enumerate(list(unique_videos.items())[:10], 1):
    print(f"{idx}. {vid}: {title}")
