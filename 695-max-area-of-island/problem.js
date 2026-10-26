window.PROBLEM = {
 "id": "695",
 "title": "Max Area of Island",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Find the size of the biggest island of 1s (connected up/down/left/right).",
 "idea": "Whenever you meet a 1, flood it with DFS, turning each visited cell to 0 and counting them. The biggest count is the answer.",
 "input": "[[0,1,0],[1,1,0],[0,0,1]]",
 "output": "3",
 "notes": [],
 "best": "Whenever you meet a 1, flood it with DFS, turning each visited cell to 0 and counting them. The biggest count is the answer.",
 "variants": [
  {
   "name": "DFS flood fill",
   "code": "class Solution:\n    def maxAreaOfIsland(self, grid):\n        m, n = len(grid), len(grid[0])\n        def dfs(r, c):\n            if not (0 <= r < m and 0 <= c < n) or grid[r][c] != 1: return 0\n            grid[r][c] = 0\n            return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)\n        return max((dfs(i, j) for i in range(m) for j in range(n)), default=0)",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Whenever you meet a 1, flood it with DFS, turning each visited cell to 0 and counting them. The biggest count is the answer.",
   "frames": []
  }
 ]
};
