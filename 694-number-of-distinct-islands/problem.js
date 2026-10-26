window.PROBLEM = {
 "id": "694",
 "title": "Number of Distinct Islands",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Count islands, but two islands with the same shape (just moved) count as one.",
 "idea": "DFS each island from its first cell and record every cell as an offset from that start. Identical shapes give identical offset lists; store them in a set.",
 "input": "4×5 grid with islands of several shapes",
 "output": "3",
 "notes": [],
 "best": "DFS each island from its first cell and record every cell as an offset from that start. Identical shapes give identical offset lists; store them in a set.",
 "variants": [
  {
   "name": "DFS with a shape signature",
   "code": "class Solution:\n    def numDistinctIslands(self, grid):\n        m, n = len(grid), len(grid[0])\n        shapes = set()\n        def dfs(r, c, r0, c0, shape):\n            grid[r][c] = 0\n            shape.append((r - r0, c - c0))\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n and grid[a][b] == 1:\n                    dfs(a, b, r0, c0, shape)\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    shape = []\n                    dfs(i, j, i, j, shape)\n                    shapes.add(tuple(shape))\n        return len(shapes)",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "DFS each island from its first cell and record every cell as an offset from that start. Identical shapes give identical offset lists; store them in a set.",
   "frames": []
  }
 ]
};
