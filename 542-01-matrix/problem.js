window.PROBLEM = {
 "id": "542",
 "title": "01 Matrix",
 "level": "Medium",
 "topic": "Graph",
 "question": "A grid of 0s and 1s is given. For every cell return the distance to the nearest 0, counting steps up, down, left or right. Example: [[0,0,0],[0,1,0],[1,1,1]] → [[0,0,0],[0,1,0],[1,2,1]].",
 "why": "For every cell of a 0/1 grid, find the distance to the nearest 0.",
 "idea": "Put all 0 cells in a queue at distance 0 and expand outwards (BFS); each cell gets its distance the first time it is reached.",
 "input": "[[0,0,0],[0,1,0],[1,1,1]]",
 "output": "[[0,0,0],[0,1,0],[1,2,1]]",
 "notes": [],
 "best": "Put all 0 cells in a queue at distance 0 and expand outwards (BFS); each cell gets its distance the first time it is reached.",
 "variants": [
  {
   "name": "Multi-source BFS from all zeros",
   "code": "class Solution:\n    def updateMatrix(self, mat):\n        m, n = len(mat), len(mat[0])\n        dist = [[-1] * n for _ in range(m)]\n        q = deque()\n        for i in range(m):\n            for j in range(n):\n                if mat[i][j] == 0:\n                    dist[i][j] = 0\n                    q.append((i, j))\n        while q:\n            r, c = q.popleft()\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n and dist[a][b] < 0:\n                    dist[a][b] = dist[r][c] + 1\n                    q.append((a, b))\n        return dist",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Put all 0 cells in a queue at distance 0 and expand outwards (BFS); each cell gets its distance the first time it is reached.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two-pass dynamic programming",
   "tag": "Alternative",
   "code": "class Solution:\n    def updateMatrix(self, mat):\n        m, n = len(mat), len(mat[0])\n        INF = m + n\n        d = [[0 if mat[i][j] == 0 else INF for j in range(n)] for i in range(m)]\n        for i in range(m):\n            for j in range(n):\n                if i: d[i][j] = min(d[i][j], d[i - 1][j] + 1)\n                if j: d[i][j] = min(d[i][j], d[i][j - 1] + 1)\n        for i in range(m - 1, -1, -1):\n            for j in range(n - 1, -1, -1):\n                if i < m - 1: d[i][j] = min(d[i][j], d[i + 1][j] + 1)\n                if j < n - 1: d[i][j] = min(d[i][j], d[i][j + 1] + 1)\n        return d",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "A top-left sweep then a bottom-right sweep propagate the nearest zero.",
   "frames": [],
   "alt": true
  }
 ]
};
