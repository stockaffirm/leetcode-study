window.PROBLEM = {
 "id": "931",
 "title": "Minimum Falling Path Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A square grid of integers is given. A falling path starts anywhere in the top row and moves down one row at a time to the cell directly below or diagonally below-left or below-right. Return the smallest possible sum of a falling path. Example: [[2,1,3],[6,5,4],[7,8,9]] → 13 (1 → 5 → 7).",
 "why": "Fall from the top row to the bottom, moving to the cell below, below-left or below-right each step. Find the smallest total.",
 "idea": "For each cell, the best path ending there is its value plus the smallest of the up-to-three cells above it.",
 "input": "[[2,1,3],[6,5,4],[7,8,9]]",
 "output": "13",
 "notes": [],
 "best": "For each cell, the best path ending there is its value plus the smallest of the up-to-three cells above it.",
 "variants": [
  {
   "name": "Row-by-row DP",
   "code": "class Solution:\n    def minFallingPathSum(self, matrix):\n        n = len(matrix)\n        dp = matrix[0][:]\n        for i in range(1, n):\n            dp = [matrix[i][j] + min(dp[max(j - 1, 0):j + 2]) for j in range(n)]\n        return min(dp)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each cell, the best path ending there is its value plus the smallest of the up-to-three cells above it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def minFallingPathSum(self, matrix):\n        n = len(matrix)\n        @lru_cache(None)\n        def f(i, j):\n            if j < 0 or j >= n: return float('inf')\n            if i == n - 1: return matrix[i][j]\n            return matrix[i][j] + min(f(i + 1, j - 1), f(i + 1, j), f(i + 1, j + 1))\n        return min(f(0, j) for j in range(n))",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "f(i, j) = matrix[i][j] + the best of the three cells below.",
   "frames": [],
   "alt": true
  }
 ]
};
