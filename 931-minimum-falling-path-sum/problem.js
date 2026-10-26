window.PROBLEM = {
 "id": "931",
 "title": "Minimum Falling Path Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
