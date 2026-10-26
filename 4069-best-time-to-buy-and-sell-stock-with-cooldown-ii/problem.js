window.PROBLEM = {
 "id": "4069",
 "title": "Best Time to Buy and Sell Stock with Cooldown II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "prices [1,5,3] with a holding fee that grows with days: the best single trade buys on day 0 and sells on day 1.",
 "idea": "A trade buys on day i and sells on day j for prices[j] − prices[i] − costs[j−i]; after selling on day j the next buy is allowed from day j + cooldown + 1. Let best[d] be the best total profit using days up to d. Then best[j] = max(best[j−1], max over buy days i < j of best[i − cooldown − 1] + trade profit(i, j)) with best of a negative index = 0.",
 "input": "prices = [1,5,3], cooldown = 1, costs = [0,1,2]",
 "output": "3",
 "notes": [],
 "best": "A trade buys on day i and sells on day j for prices[j] − prices[i] − costs[j−i]; after selling on day j the next buy is allowed from day j + cooldown + 1. Let best[d] be the best total profit using days up to d. Then best[j] = max(best[j−1], max over buy days i < j of best[i − cooldown − 1] + trade profit(i, j)) with best of a negative index = 0.",
 "variants": [
  {
   "name": "best[d] = most profit using days up to d",
   "code": "class Solution:\n    def maxProfit(self, prices, cooldown, costs):\n        n = len(prices)\n        best = [0] * n\n        for j in range(n):\n            b = best[j - 1] if j else 0\n            for i in range(j):\n                prev = best[i - cooldown - 1] if i - cooldown - 1 >= 0 else 0\n                b = max(b, prev + prices[j] - prices[i] - costs[j - i])\n            best[j] = b\n        return best[-1]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A trade buys on day i and sells on day j for prices[j] − prices[i] − costs[j−i]; after selling on day j the next buy is allowed from day j + cooldown + 1. Let best[d] be the best total profit using days up to d. Then best[j] = max(best[j−1], max over buy days i < j of best[i − cooldown − 1] + trade profit(i, j)) with best of a negative index = 0.",
   "frames": []
  }
 ]
};
