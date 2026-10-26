window.PROBLEM = {
 "id": "2431",
 "title": "Maximize Total Tastiness of Purchased Fruits",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Each fruit has a price and a tastiness; you may buy each at most once, with a budget, and you have a few coupons that halve a fruit's price (rounded down), at most one coupon per fruit. Maximise the total tastiness.",
 "idea": "A 0/1 knapsack with an extra dimension: dp[amount][coupons] = best tastiness. For every fruit try 'skip', 'buy at full price' and 'buy with a coupon'.",
 "input": "price [10,20,20], tastiness [5,8,8], amount 20, coupons 1",
 "output": "13",
 "notes": [],
 "best": "A 0/1 knapsack with an extra dimension: dp[amount][coupons] = best tastiness. For every fruit try 'skip', 'buy at full price' and 'buy with a coupon'.",
 "variants": [
  {
   "name": "Knapsack with coupons",
   "code": "class Solution:\n    def maxTastiness(self, price, tastiness, maxAmount, maxCoupons):\n        dp = [[0] * (maxCoupons + 1) for _ in range(maxAmount + 1)]\n        for p, t in zip(price, tastiness):\n            for a in range(maxAmount, -1, -1):\n                for c in range(maxCoupons, -1, -1):\n                    best = dp[a][c]\n                    if a >= p: best = max(best, dp[a - p][c] + t)\n                    if c >= 1 and a >= p // 2: best = max(best, dp[a - p // 2][c - 1] + t)\n                    dp[a][c] = best\n        return dp[maxAmount][maxCoupons]",
   "time": "O(n·A·C)",
   "space": "O(A·C)",
   "explain": "A 0/1 knapsack with an extra dimension: dp[amount][coupons] = best tastiness. For every fruit try 'skip', 'buy at full price' and 'buy with a coupon'.",
   "frames": []
  }
 ]
};
