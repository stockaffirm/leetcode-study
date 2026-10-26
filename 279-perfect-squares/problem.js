window.PROBLEM = {
 "id": "279",
 "title": "Perfect Squares",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=12 = 4 + 4 + 4 → 3 squares.",
 "idea": "dp[i] = fewest perfect squares summing to i: min over squares s ≤ i of dp[i − s] + 1. Build up to n.",
 "input": "n = 12",
 "output": "3",
 "notes": [],
 "best": "dp[i] = fewest perfect squares summing to i: min over squares s ≤ i of dp[i − s] + 1. Build up to n.",
 "variants": [
  {
   "name": "Coin-change style DP over squares",
   "code": "class Solution:\n    def numSquares(self, n):\n        dp = [0] + [float('inf')] * n\n        for i in range(1, n + 1):\n            j = 1\n            while j * j <= i:\n                dp[i] = min(dp[i], dp[i - j * j] + 1)\n                j += 1\n        return dp[n]",
   "time": "O(n√n)",
   "space": "O(n)",
   "explain": "dp[i] = fewest perfect squares summing to i: min over squares s ≤ i of dp[i − s] + 1. Build up to n.",
   "frames": []
  }
 ]
};
