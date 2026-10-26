window.PROBLEM = {
 "id": "733",
 "title": "Flood Fill",
 "level": "Easy",
 "topic": "Graph",
 "question": "An image is a grid of numbers (colours). Given a starting pixel (sr, sc) and a new colour, recolour that pixel and every pixel connected to it (up, down, left or right) that has the same original colour as the starting pixel. Return the image. Example: image [[1,1,1],[1,1,0],[1,0,1]], start (1,1), colour 2 → [[2,2,2],[2,2,0],[2,0,1]].",
 "why": "Paint-bucket tool: recolour the clicked pixel and every connected pixel (up, down, left, right) that has the same original colour.",
 "idea": "Remember the original colour and DFS from the start pixel, repainting neighbours that still have it. If the new colour equals the old one, return immediately (otherwise it would loop forever).",
 "input": "[[1,1,1],[1,1,0],[1,0,1]], start (1,1), new colour 2",
 "output": "[[2,2,2],[2,2,0],[2,0,1]]",
 "notes": [],
 "best": "Remember the original colour and DFS from the start pixel, repainting neighbours that still have it. If the new colour equals the old one, return immediately (otherwise it would loop forever).",
 "variants": [
  {
   "name": "DFS repaint",
   "code": "class Solution:\n    def floodFill(self, image, sr, sc, color):\n        old = image[sr][sc]\n        if old == color: return image\n        m, n = len(image), len(image[0])\n        def dfs(r, c):\n            if not (0 <= r < m and 0 <= c < n) or image[r][c] != old: return\n            image[r][c] = color\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)): dfs(r + dr, c + dc)\n        dfs(sr, sc)\n        return image",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Remember the original colour and DFS from the start pixel, repainting neighbours that still have it. If the new colour equals the old one, return immediately (otherwise it would loop forever).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def floodFill(self, image, sr, sc, color):\n        old = image[sr][sc]\n        if old == color: return image\n        m, n = len(image), len(image[0])\n        q = deque([(sr, sc)])\n        image[sr][sc] = color\n        while q:\n            r, c = q.popleft()\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n and image[a][b] == old:\n                    image[a][b] = color\n                    q.append((a, b))\n        return image",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Same repaint with a queue instead of recursion.",
   "frames": [],
   "alt": true
  }
 ]
};
