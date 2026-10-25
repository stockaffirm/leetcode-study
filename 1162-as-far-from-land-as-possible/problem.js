window.PROBLEM = {
 "id": "1162",
 "title": "As Far from Land as Possible",
 "level": "Medium",
 "topic": "Graph",
 "question": "A grid has land (1) and water (0). Find the water cell whose distance (Manhattan) to the nearest land is maximal and return that distance, or −1 if there is no land or no water. Example: [[1,0,1],[0,0,0],[1,0,1]] → 2.",
 "why": "The 3×3 grid with land in the corners: the centre water cell is 2 steps from the nearest land → 2.",
 "idea": "Start a BFS from all land cells at once. Each wave moves one step into water; the number of waves needed to reach the last water cell is the largest distance to land. If the grid is all land or all water, return −1.",
 "input": "grid = [[1,0,1],[0,0,0],[1,0,1]]",
 "output": "2",
 "notes": [],
 "best": "Start a BFS from all land cells at once. Each wave moves one step into water; the number of waves needed to reach the last water cell is the largest distance to land. If the grid is all land or all water, return −1.",
 "variants": [
  {
   "name": "Multi-source BFS from every land cell",
   "code": "class Solution:\n    def maxDistance(self, grid):\n        n = len(grid)\n        q = deque((i, j) for i in range(n) for j in range(n) if grid[i][j])\n        if len(q) in (0, n * n):\n            return -1\n        dist = -1\n        while q:\n            dist += 1\n            for _ in range(len(q)):\n                i, j = q.popleft()\n                for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                    if 0 <= a < n and 0 <= b < n and grid[a][b] == 0:\n                        grid[a][b] = 1\n                        q.append((a, b))\n        return dist",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Start a BFS from all land cells at once. Each wave moves one step into water; the number of waves needed to reach the last water cell is the largest distance to land. If the grid is all land or all water, return −1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dynamic programming in two sweeps",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxDistance(self, grid):\n        n = len(grid)\n        INF = 10**9\n        d = [[0 if grid[i][j] else INF for j in range(n)] for i in range(n)]\n        for i in range(n):\n            for j in range(n):\n                if i:\n                    d[i][j] = min(d[i][j], d[i - 1][j] + 1)\n                if j:\n                    d[i][j] = min(d[i][j], d[i][j - 1] + 1)\n        for i in range(n - 1, -1, -1):\n            for j in range(n - 1, -1, -1):\n                if i < n - 1:\n                    d[i][j] = min(d[i][j], d[i + 1][j] + 1)\n                if j < n - 1:\n                    d[i][j] = min(d[i][j], d[i][j + 1] + 1)\n        best = max(max(r) for r in d)\n        return best if 0 < best < INF else -1",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Distance to land from the top-left, then from the bottom-right.",
   "frames": [],
   "alt": true
  }
 ]
};
