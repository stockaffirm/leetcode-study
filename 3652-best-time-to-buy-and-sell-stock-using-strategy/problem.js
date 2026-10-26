window.PROBLEM = {
 "id": "3652",
 "title": "Best Time to Buy and Sell Stock using Strategy",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "strategy[i] is −1 (buy), 0 (hold) or 1 (sell) on day i; profit = Σ strategy[i]·prices[i]. You may once choose k consecutive days and set the first half to hold (0) and the second half to sell (1). Maximise the profit.",
 "idea": "Compute the base profit. For a window the change is −(old profit of the window) + (sum of prices in its second half). Slide the window with prefix sums and take the best change (or none).",
 "input": "prices [4,2,8], strategy [-1,0,1], k=2",
 "output": "10",
 "notes": [],
 "best": "Compute the base profit. For a window the change is −(old profit of the window) + (sum of prices in its second half). Slide the window with prefix sums and take the best change (or none).",
 "variants": [
  {
   "name": "Best window with prefix sums",
   "code": "class Solution:\n    def maxProfit(self, prices, strategy, k):\n        n = len(prices)\n        base = sum(s * p for s, p in zip(strategy, prices))\n        val = [0] + list(accumulate(s * p for s, p in zip(strategy, prices)))\n        pre = [0] + list(accumulate(prices))\n        best = 0\n        for i in range(n - k + 1):\n            delta = -(val[i + k] - val[i]) + (pre[i + k] - pre[i + k // 2])\n            best = max(best, delta)\n        return base + best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Compute the base profit. For a window the change is −(old profit of the window) + (sum of prices in its second half). Slide the window with prefix sums and take the best change (or none).",
   "frames": []
  }
 ]
};
