import json
import urllib.request
import ssl
import re
import time

with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract API key if present in HTML
api_key = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"
try:
    with open('test_yt.py', 'r', encoding='utf-8') as tf:
        pass
except:
    pass

all_videos = []
continuation_token = None

def extract_nodes(node):
    global continuation_token
    if isinstance(node, dict):
        if 'playlistVideoRenderer' in node:
            r = node['playlistVideoRenderer']
            vid = r.get('videoId')
            title = ''
            if 'title' in r and 'runs' in r['title']:
                title = ''.join([run.get('text', '') for run in r['title']['runs']])
            elif 'title' in r and 'simpleText' in r['title']:
                title = r['title']['simpleText']
            if vid and title:
                all_videos.append({'videoId': vid, 'title': title})
        elif 'continuationItemRenderer' in node:
            c_elem = node['continuationItemRenderer']
            if 'continuationEndpoint' in c_elem:
                endpoint = c_elem['continuationEndpoint']
                if 'continuationCommand' in endpoint:
                    continuation_token = endpoint['continuationCommand'].get('token')
        for v in node.values():
            extract_nodes(v)
    elif isinstance(node, list):
        for item in node:
            extract_nodes(item)

extract_nodes(data)

print(f"Initial videos extracted: {len(all_videos)}")
print(f"Continuation token: {continuation_token}")

if len(all_videos) > 0:
    print("Sample video 1:", all_videos[0])
