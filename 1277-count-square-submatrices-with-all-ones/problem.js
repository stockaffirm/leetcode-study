window.PROBLEM = {
 "id": "1277",
 "title": "Count Square Submatrices with All Ones",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "The sample 3×4 matrix contains 10 + 4 + 1 = 15 all-ones squares.",
 "idea": "dp[i][j] is the side of the largest all-ones square whose bottom-right corner is (i, j): 1 + min(up, left, up-left) if the cell is 1. That number is also how many squares end at this cell, so the answer is the sum of dp.",
 "input": "matrix = [[0,1,1,1],[1,1,1,1],[0,1,1,1]]",
 "output": "15",
 "notes": [],
 "best": "dp[i][j] is the side of the largest all-ones square whose bottom-right corner is (i, j): 1 + min(up, left, up-left) if the cell is 1. That number is also how many squares end at this cell, so the answer is the sum of dp.",
 "variants": [
  {
   "name": "Largest square ending at each cell",
   "code": "class Solution:\n    def countSquares(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        dp = [[0] * n for _ in range(m)]\n        total = 0\n        for i in range(m):\n            for j in range(n):\n                if matrix[i][j]:\n                    if i and j:\n                        dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])\n                    else:\n                        dp[i][j] = 1\n                    total += dp[i][j]\n        return total",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "dp[i][j] is the side of the largest all-ones square whose bottom-right corner is (i, j): 1 + min(up, left, up-left) if the cell is 1. That number is also how many squares end at this cell, so the answer is the sum of dp.",
   "frames": []
  }
 ]
};
