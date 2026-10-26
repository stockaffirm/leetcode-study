window.PROBLEM = {
 "id": "2328",
 "title": "Number of Increasing Paths in a Grid",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
