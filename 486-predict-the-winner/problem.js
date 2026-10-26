window.PROBLEM = {
 "id": "486",
 "title": "Predict the Winner",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,5,2]: player 1 takes 1 and loses to 5+...; best difference is −2 → false.",
 "idea": "dp[i][j] is the best (current player − opponent) score difference on nums[i..j]. The player takes the left end or the right end and then faces the opponent's best difference: dp[i][j] = max(nums[i] − dp[i+1][j], nums[j] − dp[i][j−1]). Player 1 wins if dp[0][n−1] ≥ 0.",
 "input": "nums = [1,5,2]",
 "output": "false",
 "notes": [],
 "best": "dp[i][j] is the best (current player − opponent) score difference on nums[i..j]. The player takes the left end or the right end and then faces the opponent's best difference: dp[i][j] = max(nums[i] − dp[i+1][j], nums[j] − dp[i][j−1]). Player 1 wins if dp[0][n−1] ≥ 0.",
 "variants": [
  {
   "name": "Interval DP on the score difference",
   "code": "class Solution:\n    def predictTheWinner(self, nums):\n        n = len(nums)\n        dp = [[0] * n for _ in range(n)]\n        for i in range(n):\n            dp[i][i] = nums[i]\n        for length in range(2, n + 1):\n            for i in range(n - length + 1):\n                j = i + length - 1\n                dp[i][j] = max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])\n        return dp[0][n - 1] >= 0",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i][j] is the best (current player − opponent) score difference on nums[i..j]. The player takes the left end or the right end and then faces the opponent's best difference: dp[i][j] = max(nums[i] − dp[i+1][j], nums[j] − dp[i][j−1]). Player 1 wins if dp[0][n−1] ≥ 0.",
   "frames": []
  }
 ]
};
