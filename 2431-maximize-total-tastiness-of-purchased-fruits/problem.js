window.PROBLEM = {
 "id": "2431",
 "title": "Maximize Total Tastiness of Purchased Fruits",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Each fruit has a price and a tastiness. You may buy every fruit at most once and spend at most maxAmount in total. You also have maxCoupons coupons; a coupon (at most one per fruit) halves a fruit's price, rounded down. Return the maximum total tastiness. Example: prices [10,20,20], tastiness [5,8,8], maxAmount 20, maxCoupons 1 → 13.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxTastiness(self, price, tastiness, maxAmount, maxCoupons):\n        n = len(price)\n        @lru_cache(None)\n        def f(i, money, coupons):\n            if i == n: return 0\n            best = f(i + 1, money, coupons)\n            if money >= price[i]: best = max(best, tastiness[i] + f(i + 1, money - price[i], coupons))\n            if coupons and money >= price[i] // 2: best = max(best, tastiness[i] + f(i + 1, money - price[i] // 2, coupons - 1))\n            return best\n        return f(0, maxAmount, maxCoupons)",
   "time": "O(n·A·C)",
   "space": "O(n·A·C)",
   "explain": "f(i, money, coupons) = best tastiness from fruit i on.",
   "frames": [],
   "alt": true
  }
 ]
};
