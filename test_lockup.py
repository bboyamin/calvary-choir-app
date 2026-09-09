import json

with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

items = []

def find_lockups(obj):
    if isinstance(obj, dict):
        if 'lockupViewModel' in obj:
            l = obj['lockupViewModel']
            # extract videoId
            content_id = l.get('contentId')
            # extract title
            title = ""
            if 'metadata' in l and 'lockupMetadataViewModel' in l['metadata']:
                meta = l['metadata']['lockupMetadataViewModel']
                if 'title' in meta and 'content' in meta['title']:
                    title = meta['title']['content']
            if content_id and title:
                items.append({'videoId': content_id, 'title': title})
        elif 'playlistVideoRenderer' in obj:
            r = obj['playlistVideoRenderer']
            vid = r.get('videoId')
            title = ""
            if 'title' in r and 'runs' in r['title']:
                title = ''.join([run.get('text', '') for run in r['title']['runs']])
            if vid and title:
                items.append({'videoId': vid, 'title': title})
        for v in obj.values():
            find_lockups(v)
    elif isinstance(obj, list):
        for item in obj:
            find_lockups(item)

find_lockups(data)

print(f"Extracted {len(items)} items!")
for i in range(min(15, len(items))):
    print(f"{i+1}. [{items[i]['videoId']}] {items[i]['title']}")
