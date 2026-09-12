from PIL import Image
from collections import deque

src = r"c:\Users\ahmad\Downloads\quiz\Portfolio-HandDrawn\public\avatar-source.png"
out = r"c:\Users\ahmad\Downloads\quiz\Portfolio-HandDrawn\public\avatar.png"

im = Image.open(src).convert("RGBA")
w, h = im.size
px = im.load()


def is_bg(r, g, b, a):
    return a > 0 and r > 180 and g < 90 and b < 90 and r > g + 80 and r > b + 80


visited = [[False] * h for _ in range(w)]
q = deque()

for x in range(w):
    for y in (0, h - 1):
        r, g, b, a = px[x, y]
        if is_bg(r, g, b, a):
            q.append((x, y))
            visited[x][y] = True

for y in range(h):
    for x in (0, w - 1):
        if not visited[x][y]:
            r, g, b, a = px[x, y]
            if is_bg(r, g, b, a):
                q.append((x, y))
                visited[x][y] = True

while q:
    x, y = q.popleft()
    px[x, y] = (0, 0, 0, 0)
    for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
        if 0 <= nx < w and 0 <= ny < h and not visited[nx][ny]:
            r, g, b, a = px[nx, ny]
            if is_bg(r, g, b, a):
                visited[nx][ny] = True
                q.append((nx, ny))

# Clean outer red fringe only (keep glasses)
cx, cy = w / 2, h / 2
limit = min(w, h) * 0.38
for x in range(w):
    for y in range(h):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        if r > 160 and g < 110 and b < 110 and r > g + 50:
            edge = False
            for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                if 0 <= nx < w and 0 <= ny < h and px[nx, ny][3] == 0:
                    edge = True
                    break
            if edge:
                dist = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
                if dist > limit:
                    px[x, y] = (0, 0, 0, 0)

im.save(out, "PNG")
print("saved", out, im.size)
