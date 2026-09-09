import json
import re

with open('yt_initial_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

json_str = json.dumps(data, ensure_ascii=False)

print("Searching for videoId occurrence...")
video_ids = re.findall(r'"videoId":\s*"([^"]+)"', json_str)
print(f"Total videoId occurrences: {len(video_ids)}")
print("First 10 videoIds:", video_ids[:10])

# Look for titles near videoId
matches = re.findall(r'"videoId":\s*"([^"]+)".*?"title":\s*\{\s*"runs":\s*\[\s*\{\s*"text":\s*"([^"]+)"', json_str)
print("Matches count:", len(matches))
for m in matches[:10]:
    print(m)

# Find continuation tokens
tokens = re.findall(r'"continuationCommand":\s*\{\s*"token":\s*"([^"]+)"', json_str)
print("Continuation tokens found:", len(tokens))
if tokens:
    print("First token:", tokens[0][:30] + "...")
