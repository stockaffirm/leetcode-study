window.PROBLEM = {
 "id": "827",
 "title": "Making A Large Island",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "You may turn ONE water cell into land. How big can the largest island become?",
 "idea": "First label every island and record its size. For each water cell, add 1 + the sizes of the DIFFERENT islands touching it; the best is the answer.",
 "input": "[[1,0],[0,1]]",
 "output": "3",
 "notes": [],
 "best": "First label every island and record its size. For each water cell, add 1 + the sizes of the DIFFERENT islands touching it; the best is the answer.",
 "variants": [
  {
   "name": "Label islands, try each water cell",
   "code": "class Solution:\n    def largestIsland(self, grid):\n        n = len(grid)\n        size, label = {}, 2\n        def dfs(r, c, lab):\n            if not (0 <= r < n and 0 <= c < n) or grid[r][c] != 1: return 0\n            grid[r][c] = lab\n            return 1 + dfs(r + 1, c, lab) + dfs(r - 1, c, lab) + dfs(r, c + 1, lab) + dfs(r, c - 1, lab)\n        for i in range(n):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    size[label] = dfs(i, j, label)\n                    label += 1\n        best = max(size.values(), default=0)\n        for i in range(n):\n            for j in range(n):\n                if grid[i][j] == 0:\n                    seen = {grid[a][b] for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)) if 0 <= a < n and 0 <= b < n and grid[a][b] > 1}\n                    best = max(best, 1 + sum(size[l] for l in seen))\n        return best",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "First label every island and record its size. For each water cell, add 1 + the sizes of the DIFFERENT islands touching it; the best is the answer.",
   "frames": []
  }
 ]
};
