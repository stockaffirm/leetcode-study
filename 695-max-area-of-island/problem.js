window.PROBLEM = {
 "id": "695",
 "title": "Max Area of Island",
 "level": "Medium",
 "topic": "Graph",
 "question": "You are given a grid of 0s (water) and 1s (land). An island is a group of 1s connected up, down, left or right. Return the AREA (number of cells) of the largest island, or 0 if there is none. Example: [[0,1,0],[1,1,0],[0,0,1]] → the first three 1s form an island of 3 cells → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative stack flood",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxAreaOfIsland(self, grid):\n        m, n, best = len(grid), len(grid[0]), 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    grid[i][j] = 0\n                    st, area = [(i, j)], 0\n                    while st:\n                        r, c = st.pop()\n                        area += 1\n                        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                            a, b = r + dr, c + dc\n                            if 0 <= a < m and 0 <= b < n and grid[a][b] == 1:\n                                grid[a][b] = 0\n                                st.append((a, b))\n                    best = max(best, area)\n        return best",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Same flood fill but with an explicit stack instead of recursion.",
   "frames": [],
   "alt": true
  }
 ]
};
