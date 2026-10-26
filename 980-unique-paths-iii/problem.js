window.PROBLEM = {
 "id": "980",
 "title": "Unique Paths III",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "You are given a grid: 1 is the starting square, 2 is the ending square, 0 are empty squares you may walk on, and -1 are walls. Count the number of walks from the start to the end that move up, down, left or right and step on EVERY non-wall square exactly once. Example: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]] → 2 such walks exist.",
 "why": "Walk from the start square to the end square stepping on EVERY empty square exactly once. Count how many such walks exist.",
 "idea": "Try all four moves from each square, marking it used and un-marking on the way back (backtracking). Count a path only if it reaches the end with no empty squares left.",
 "input": "[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]",
 "output": "2",
 "notes": [],
 "best": "Try all four moves from each square, marking it used and un-marking on the way back (backtracking). Count a path only if it reaches the end with no empty squares left.",
 "variants": [
  {
   "name": "DFS backtracking",
   "code": "class Solution:\n    def uniquePathsIII(self, grid):\n        m, n = len(grid), len(grid[0])\n        empty = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1: si, sj = i, j\n                if grid[i][j] != -1: empty += 1\n        def dfs(i, j, left):\n            if grid[i][j] == 2: return 1 if left == 0 else 0\n            old, grid[i][j] = grid[i][j], -1\n            total = 0\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n and grid[a][b] != -1:\n                    total += dfs(a, b, left - 1)\n            grid[i][j] = old\n            return total\n        return dfs(si, sj, empty - 1)",
   "time": "O(3^cells)",
   "space": "O(cells)",
   "explain": "Try all four moves from each square, marking it used and un-marking on the way back (backtracking). Count a path only if it reaches the end with no empty squares left.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bitmask memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def uniquePathsIII(self, grid):\n        m, n = len(grid), len(grid[0])\n        full = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1: start = (i, j)\n                if grid[i][j] != -1: full |= 1 << (i * n + j)\n        @lru_cache(None)\n        def go(i, j, mask):\n            if grid[i][j] == 2: return 1 if mask == full else 0\n            total = 0\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n and grid[a][b] != -1 and not (mask >> (a * n + b)) & 1:\n                    total += go(a, b, mask | (1 << (a * n + b)))\n            return total\n        return go(start[0], start[1], 1 << (start[0] * n + start[1]))",
   "time": "O(cells · 2^cells)",
   "space": "O(2^cells)",
   "explain": "Remember (position, set of visited squares) so repeated situations are not recounted.",
   "frames": [],
   "alt": true
  }
 ]
};
