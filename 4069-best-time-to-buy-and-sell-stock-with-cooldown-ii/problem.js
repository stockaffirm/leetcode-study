window.PROBLEM = {
 "id": "4069",
 "title": "Best Time to Buy and Sell Stock with Cooldown II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Buy at most one share at a time. Buying on day i and selling on day j earns prices[j] − prices[i] − costs[j − i]; after selling on day j you may buy again only from day j + cooldown + 1. Return the maximum total profit (0 if no trade is profitable). Example: prices [1,5,3], cooldown 1, costs [0,1,2] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoised recursion on the day",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProfit(self, prices, cooldown, costs):\n        n = len(prices)\n        @lru_cache(None)\n        def go(d):\n            if d >= n:\n                return 0\n            best = go(d + 1)\n            for j in range(d + 1, n):\n                best = max(best, prices[j] - prices[d] - costs[j - d] + go(j + cooldown + 1))\n            return best\n        return go(0)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "go(d) = best profit using days from d onwards, trying every buy day and sell day.",
   "frames": [],
   "alt": true
  }
 ]
};
