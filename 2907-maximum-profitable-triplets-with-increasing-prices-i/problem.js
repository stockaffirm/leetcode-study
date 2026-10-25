window.PROBLEM = {
 "id": "2907",
 "title": "Maximum Profitable Triplets With Increasing Prices I",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Pick three items i<j<k with strictly increasing prices (prices[i] < prices[j] < prices[k]) and return the largest possible sum of their profits, or −1 if no such triple exists (n up to 2000). Example: prices [10,2,3,4], profits [100,2,7,10] → 19.",
 "why": "prices [10,2,3,4], profits [100,2,7,10]: pick 2,3,4 → 2 + 7 + 10 = 19.",
 "idea": "Fix the middle index j. On its left take the most profitable item with a lower price; on its right the most profitable item with a higher price. If both exist, that triple's profit is a candidate. Check all j (n is at most 2000, so O(n²) is fine).",
 "input": "prices = [10,2,3,4], profits = [100,2,7,10]",
 "output": "19",
 "notes": [],
 "best": "Fix the middle index j. On its left take the most profitable item with a lower price; on its right the most profitable item with a higher price. If both exist, that triple's profit is a candidate. Check all j (n is at most 2000, so O(n²) is fine).",
 "variants": [
  {
   "name": "Best left and best right around every middle",
   "code": "class Solution:\n    def maxProfit(self, prices, profits):\n        n = len(prices)\n        best = -1\n        for j in range(n):\n            left = max((profits[i] for i in range(j) if prices[i] < prices[j]), default=-1)\n            right = max((profits[k] for k in range(j + 1, n) if prices[k] > prices[j]), default=-1)\n            if left > 0 and right > 0:\n                best = max(best, left + profits[j] + right)\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Fix the middle index j. On its left take the most profitable item with a lower price; on its right the most profitable item with a higher price. If both exist, that triple's profit is a candidate. Check all j (n is at most 2000, so O(n²) is fine).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Chain DP",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProfit(self, prices, profits):\n        n = len(prices)\n        two = [-1] * n\n        best = -1\n        for k in range(n):\n            for j in range(k):\n                if prices[j] < prices[k]:\n                    if two[j] > 0:\n                        best = max(best, two[j] + profits[k])\n                    two[k] = max(two[k], profits[j] + profits[k])\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "two[j] = best profit of a pair ending at j; three[k] = best triple ending at k.",
   "frames": [],
   "alt": true
  }
 ]
};
