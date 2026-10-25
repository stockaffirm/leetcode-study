window.PROBLEM = {
 "id": "1659",
 "title": "Maximize Grid Happiness",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "An m×n grid; place at most introvertsCount introverts and extrovertsCount extroverts, one per cell (cells may stay empty). An introvert starts at 120 happiness and loses 30 for each neighbour (up, down, left, right); an extrovert starts at 40 and gains 20 per neighbour. Return the maximum total happiness. Example: m=2, n=3, 1 introvert, 2 extroverts → 240.",
 "why": "2×3 grid, 1 introvert, 2 extroverts: best placement gives happiness 240.",
 "idea": "Process cells in row-major order. A cell only interacts with the cell above and the cell to its left, so the state is the last n cells (0 empty, 1 introvert, 2 extrovert) as a base-3 number plus the people left. Placing a person adds its own base happiness plus the interaction with the up/left neighbours (a pair adds both people's changes).",
 "input": "m = 2, n = 3, introvertsCount = 1, extrovertsCount = 2",
 "output": "240",
 "notes": [],
 "best": "Process cells in row-major order. A cell only interacts with the cell above and the cell to its left, so the state is the last n cells (0 empty, 1 introvert, 2 extrovert) as a base-3 number plus the people left. Placing a person adds its own base happiness plus the interaction with the up/left neighbours (a pair adds both people's changes).",
 "variants": [
  {
   "name": "Broken-profile DP over the last n cells",
   "code": "class Solution:\n    def getMaxGridHappiness(self, m, n, introvertsCount, extrovertsCount):\n        P = 3 ** (n - 1)\n        pair = [[0, 0, 0], [0, -60, -10], [0, -10, 40]]\n        base = [0, 120, 40]\n        @lru_cache(None)\n        def go(pos, mask, i, e):\n            if pos == m * n or (i == 0 and e == 0):\n                return 0\n            up = mask // P\n            left = mask % 3 if pos % n else 0\n            nm = (mask % P) * 3\n            best = go(pos + 1, nm, i, e)\n            if i:\n                best = max(best, base[1] + pair[1][up] + pair[1][left] + go(pos + 1, nm + 1, i - 1, e))\n            if e:\n                best = max(best, base[2] + pair[2][up] + pair[2][left] + go(pos + 1, nm + 2, i, e - 1))\n            return best\n        return go(0, 0, introvertsCount, extrovertsCount)",
   "time": "O(m·n·3ⁿ·I·E)",
   "space": "O(m·n·3ⁿ·I·E)",
   "explain": "Process cells in row-major order. A cell only interacts with the cell above and the cell to its left, so the state is the last n cells (0 empty, 1 introvert, 2 extrovert) as a base-3 number plus the people left. Placing a person adds its own base happiness plus the interaction with the up/left neighbours (a pair adds both people's changes).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every placement",
   "tag": "Brute force",
   "code": "class Solution:\n    def getMaxGridHappiness(self, m, n, introvertsCount, extrovertsCount):\n        grid = [[0] * n for _ in range(m)]\n        def score():\n            total = 0\n            for i in range(m):\n                for j in range(n):\n                    t = grid[i][j]\n                    if t == 1:\n                        total += 120\n                    elif t == 2:\n                        total += 40\n                    for di, dj in ((1, 0), (0, 1)):\n                        a, b = i + di, j + dj\n                        if t and a < m and b < n and grid[a][b]:\n                            u = grid[a][b]\n                            for x in (t, u):\n                                total += -30 if x == 1 else 20\n            return total\n        best = 0\n        def go(pos, i, e):\n            nonlocal best\n            if pos == m * n:\n                best = max(best, score())\n                return\n            r, c = divmod(pos, n)\n            go(pos + 1, i, e)\n            if i:\n                grid[r][c] = 1\n                go(pos + 1, i - 1, e)\n                grid[r][c] = 0\n            if e:\n                grid[r][c] = 2\n                go(pos + 1, i, e - 1)\n                grid[r][c] = 0\n        go(0, introvertsCount, extrovertsCount)\n        return best",
   "time": "O(3^(m·n))",
   "space": "O(m·n)",
   "explain": "Only for tiny grids: place nothing / an introvert / an extrovert in each cell and compute the happiness of full layouts.",
   "frames": [],
   "alt": true
  }
 ]
};
