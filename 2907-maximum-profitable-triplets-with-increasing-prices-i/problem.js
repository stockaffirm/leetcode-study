window.PROBLEM = {
 "id": "2907",
 "title": "Maximum Profitable Triplets With Increasing Prices I",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
