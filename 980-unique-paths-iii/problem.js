window.PROBLEM = {
 "id": "980",
 "title": "Unique Paths III",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
