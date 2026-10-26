window.PROBLEM = {
 "id": "309",
 "title": "Best Time to Buy and Sell Stock with Cooldown",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "prices[i] is a stock's price on day i. You may buy and sell as often as you like (holding at most one share), but the day after you sell you cannot buy (a one-day cooldown). Return the maximum profit. Example: [1,2,3,0,2] → 3 (buy 1, sell 3, cooldown, buy 0, sell 2).",
 "why": "Buy and sell a stock as often as you like (one share at a time), but after selling you must wait one day before buying again. Maximise the profit.",
 "idea": "Track three values each day: best profit while holding a share, just sold today, and resting (not holding, free to buy).",
 "input": "prices [1,2,3,0,2]",
 "output": "3",
 "notes": [],
 "best": "Track three values each day: best profit while holding a share, just sold today, and resting (not holding, free to buy).",
 "variants": [
  {
   "name": "Three-state DP",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        hold, sold, rest = float('-inf'), 0, 0\n        for p in prices:\n            prev_sold = sold\n            sold = hold + p\n            hold = max(hold, rest - p)\n            rest = max(rest, prev_sold)\n        return max(sold, rest)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track three values each day: best profit while holding a share, just sold today, and resting (not holding, free to buy).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        n = len(prices)\n        @lru_cache(None)\n        def f(i, holding):\n            if i >= n: return 0\n            skip = f(i + 1, holding)\n            if holding: return max(skip, prices[i] + f(i + 2, False))\n            return max(skip, -prices[i] + f(i + 1, True))\n        return f(0, False)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "f(i, holding) = best profit from day i on.",
   "frames": [],
   "alt": true
  }
 ]
};
