window.PROBLEM = {
 "id": "1648",
 "title": "Sell Diminishing-Valued Colored Balls",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "inventory [2,5], 4 orders: sell 5,4,3 and then a 2 → 14.",
 "idea": "Each sale takes the ball with the largest current value, which drops by 1 after the sale. Sort the stocks descending and lower the top group of w colours together, level by level, with arithmetic-series sums; when the orders run out in the middle of a level, handle the partial level.",
 "input": "inventory = [2,5], orders = 4",
 "output": "14",
 "notes": [],
 "best": "Each sale takes the ball with the largest current value, which drops by 1 after the sale. Sort the stocks descending and lower the top group of w colours together, level by level, with arithmetic-series sums; when the orders run out in the middle of a level, handle the partial level.",
 "variants": [
  {
   "name": "Sell the highest values level by level",
   "code": "class Solution:\n    def maxProfit(self, inventory, orders):\n        inv = sorted(inventory, reverse=True) + [0]\n        res = 0\n        w = 1\n        for i in range(len(inv) - 1):\n            hi, lo = inv[i], inv[i + 1]\n            cnt = w * (hi - lo)\n            if orders >= cnt:\n                res += w * (hi + lo + 1) * (hi - lo) // 2\n                orders -= cnt\n            else:\n                full, rem = divmod(orders, w)\n                res += w * (hi + hi - full + 1) * full // 2 + rem * (hi - full)\n                return res % (10**9 + 7)\n            w += 1\n        return res % (10**9 + 7)",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Each sale takes the ball with the largest current value, which drops by 1 after the sale. Sort the stocks descending and lower the top group of w colours together, level by level, with arithmetic-series sums; when the orders run out in the middle of a level, handle the partial level.",
   "frames": []
  }
 ]
};
