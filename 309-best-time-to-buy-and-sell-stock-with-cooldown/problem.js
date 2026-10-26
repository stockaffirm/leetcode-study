window.PROBLEM = {
 "id": "309",
 "title": "Best Time to Buy and Sell Stock with Cooldown",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
