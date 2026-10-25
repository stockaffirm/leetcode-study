window.PROBLEM = {
 "id": "2328",
 "title": "Number of Increasing Paths in a Grid",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Count the strictly increasing paths in a grid (you may start and end anywhere and move up/down/left/right; a single cell counts), modulo 1 000 000 007. Example: [[1,1],[3,4]] → 8.",
 "why": "[[1,1],[3,4]]: single cells 4, plus 1→3, 1→4, 3→4, 1→3→4 → 8.",
 "idea": "Let paths(i,j) be the number of strictly increasing paths that start at cell (i,j): 1 (the cell alone) plus paths(neighbour) for each neighbour with a larger value. Values only increase, so there are no cycles and memoisation makes it linear. Sum over all cells.",
 "input": "grid = [[1,1],[3,4]]",
 "output": "8",
 "notes": [],
 "best": "Let paths(i,j) be the number of strictly increasing paths that start at cell (i,j): 1 (the cell alone) plus paths(neighbour) for each neighbour with a larger value. Values only increase, so there are no cycles and memoisation makes it linear. Sum over all cells.",
 "variants": [
  {
   "name": "Memoised DFS: paths starting at each cell",
   "code": "class Solution:\n    def countPaths(self, grid):\n        MOD = 10**9 + 7\n        m, n = len(grid), len(grid[0])\n        @lru_cache(None)\n        def go(i, j):\n            r = 1\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n and grid[a][b] > grid[i][j]:\n                    r += go(a, b)\n            return r % MOD\n        return sum(go(i, j) for i in range(m) for j in range(n)) % MOD",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Let paths(i,j) be the number of strictly increasing paths that start at cell (i,j): 1 (the cell alone) plus paths(neighbour) for each neighbour with a larger value. Values only increase, so there are no cycles and memoisation makes it linear. Sum over all cells.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Process cells from largest to smallest",
   "tag": "Alternative",
   "code": "class Solution:\n    def countPaths(self, grid):\n        MOD = 10**9 + 7\n        m, n = len(grid), len(grid[0])\n        cells = sorted(((grid[i][j], i, j) for i in range(m) for j in range(n)), reverse=True)\n        dp = [[1] * n for _ in range(m)]\n        for v, i, j in cells:\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n and grid[a][b] > v:\n                    dp[i][j] = (dp[i][j] + dp[a][b]) % MOD\n        return sum(map(sum, dp)) % MOD",
   "time": "O(mn log mn)",
   "space": "O(mn)",
   "explain": "Sort cells by value descending; each cell's count is 1 plus the counts of larger neighbours, which are already computed.",
   "frames": [],
   "alt": true
  }
 ]
};
