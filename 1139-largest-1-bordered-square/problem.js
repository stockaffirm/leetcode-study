window.PROBLEM = {
 "id": "1139",
 "title": "Largest 1-Bordered Square",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Find the biggest square subgrid whose whole border (outer ring) consists of 1s; return its area.",
 "idea": "Precompute, for every cell, the number of consecutive 1s going left and going up. A square of side s with bottom-right corner (i, j) is valid if the bottom and right edges have ≥ s ones and the top-left corner's edges do too.",
 "input": "[[1,1,1],[1,0,1],[1,1,1]]",
 "output": "9",
 "notes": [],
 "best": "Precompute, for every cell, the number of consecutive 1s going left and going up. A square of side s with bottom-right corner (i, j) is valid if the bottom and right edges have ≥ s ones and the top-left corner's edges do too.",
 "variants": [
  {
   "name": "Consecutive ones to the left and above",
   "code": "class Solution:\n    def largest1BorderedSquare(self, grid):\n        m, n = len(grid), len(grid[0])\n        left = [[0] * n for _ in range(m)]\n        up = [[0] * n for _ in range(m)]\n        best = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j]:\n                    left[i][j] = (left[i][j - 1] if j else 0) + 1\n                    up[i][j] = (up[i - 1][j] if i else 0) + 1\n                    for s in range(min(left[i][j], up[i][j]), 0, -1):\n                        if left[i - s + 1][j] >= s and up[i][j - s + 1] >= s:\n                            best = max(best, s * s)\n                            break\n        return best",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "Precompute, for every cell, the number of consecutive 1s going left and going up. A square of side s with bottom-right corner (i, j) is valid if the bottom and right edges have ≥ s ones and the top-left corner's edges do too.",
   "frames": []
  }
 ]
};
