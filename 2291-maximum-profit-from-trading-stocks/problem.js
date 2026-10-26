window.PROBLEM = {
 "id": "2291",
 "title": "Maximum Profit From Trading Stocks",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
