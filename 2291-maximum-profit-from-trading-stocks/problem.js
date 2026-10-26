window.PROBLEM = {
 "id": "2291",
 "title": "Maximum Profit From Trading Stocks",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You are given the prices of n stocks today, present[i], and their prices a year from now, future[i], plus a budget. You may buy each stock at most once, spending at most your budget today, and sell everything a year later. Return the maximum profit you can make. Example: present [5,4,6,2,3], future [8,5,4,3,5], budget 10 → buy the stocks costing 5, 2 and 3 for 10 and earn 3 + 1 + 2 = 6 → 6.",
 "why": "Buy some stocks today at present[i] and sell them next year at future[i]; you have a fixed budget and can buy each stock at most once. Maximise profit.",
 "idea": "Each stock is an item: weight = price now, value = future − present (skip losers). Classic 0/1 knapsack over the budget.",
 "input": "present [5,4,6,2,3], future [8,5,4,3,5], budget 10",
 "output": "6",
 "notes": [],
 "best": "Each stock is an item: weight = price now, value = future − present (skip losers). Classic 0/1 knapsack over the budget.",
 "variants": [
  {
   "name": "0/1 knapsack",
   "code": "class Solution:\n    def maximumProfit(self, present, future, budget):\n        dp = [0] * (budget + 1)\n        for p, f in zip(present, future):\n            gain = f - p\n            if gain <= 0: continue\n            for b in range(budget, p - 1, -1):\n                dp[b] = max(dp[b], dp[b - p] + gain)\n        return dp[budget]",
   "time": "O(n · budget)",
   "space": "O(budget)",
   "explain": "Each stock is an item: weight = price now, value = future − present (skip losers). Classic 0/1 knapsack over the budget.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "2D table",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumProfit(self, present, future, budget):\n        n = len(present)\n        dp = [[0] * (budget + 1) for _ in range(n + 1)]\n        for i in range(1, n + 1):\n            p, f = present[i - 1], future[i - 1]\n            for b in range(budget + 1):\n                dp[i][b] = dp[i - 1][b]\n                if b >= p and f > p:\n                    dp[i][b] = max(dp[i][b], dp[i - 1][b - p] + f - p)\n        return dp[n][budget]",
   "time": "O(n · budget)",
   "space": "O(n · budget)",
   "explain": "dp[i][b] = best profit using the first i stocks with budget b.",
   "frames": [],
   "alt": true
  }
 ]
};
