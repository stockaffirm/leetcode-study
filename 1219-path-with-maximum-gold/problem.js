window.PROBLEM = {
 "id": "1219",
 "title": "Path with Maximum Gold",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "A grid holds gold amounts (0 = empty). Start from any cell with gold, walk up/down/left/right, collect the gold of each cell you enter, never step on an empty cell or the same cell twice. Return the maximum gold you can collect. Example: [[0,6,0],[5,8,7],[0,9,0]] → 24.",
 "why": "[[0,6,0],[5,8,7],[0,9,0]]: path 9 → 8 → 7 collects 24.",
 "idea": "Start a DFS (Depth-First Search) from every cell with gold. Collect the gold, mark the cell as 0 so it is not reused, try the four neighbours that still have gold, then restore the cell (backtrack). The answer is the best total over all starts.",
 "input": "grid = [[0,6,0],[5,8,7],[0,9,0]]",
 "output": "24",
 "notes": [],
 "best": "Start a DFS (Depth-First Search) from every cell with gold. Collect the gold, mark the cell as 0 so it is not reused, try the four neighbours that still have gold, then restore the cell (backtrack). The answer is the best total over all starts.",
 "variants": [
  {
   "name": "DFS from every gold cell",
   "code": "class Solution:\n    def getMaximumGold(self, grid):\n        m, n = len(grid), len(grid[0])\n        def dfs(i, j):\n            if not (0 <= i < m and 0 <= j < n) or grid[i][j] == 0:\n                return 0\n            g = grid[i][j]\n            grid[i][j] = 0\n            best = max(dfs(i + 1, j), dfs(i - 1, j), dfs(i, j + 1), dfs(i, j - 1))\n            grid[i][j] = g\n            return g + best\n        return max(dfs(i, j) for i in range(m) for j in range(n))",
   "time": "O(m·n·3^g)",
   "space": "O(g)",
   "explain": "Start a DFS (Depth-First Search) from every cell with gold. Collect the gold, mark the cell as 0 so it is not reused, try the four neighbours that still have gold, then restore the cell (backtrack). The answer is the best total over all starts.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with a visited set",
   "tag": "Alternative",
   "code": "class Solution:\n    def getMaximumGold(self, grid):\n        m, n = len(grid), len(grid[0])\n        seen = set()\n        def dfs(i, j):\n            if not (0 <= i < m and 0 <= j < n) or grid[i][j] == 0 or (i, j) in seen:\n                return 0\n            seen.add((i, j))\n            best = max(dfs(i + 1, j), dfs(i - 1, j), dfs(i, j + 1), dfs(i, j - 1))\n            seen.discard((i, j))\n            return grid[i][j] + best\n        return max(dfs(i, j) for i in range(m) for j in range(n))",
   "time": "O(m·n·3^g)",
   "space": "O(g)",
   "explain": "Keep the grid unchanged and carry a set of cells on the current path.",
   "frames": [],
   "alt": true
  }
 ]
};
