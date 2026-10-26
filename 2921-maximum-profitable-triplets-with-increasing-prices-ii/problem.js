window.PROBLEM = {
 "id": "2921",
 "title": "Maximum Profitable Triplets With Increasing Prices II",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "Pick three items i<j<k with strictly increasing prices (prices[i] < prices[j] < prices[k]) and return the largest possible sum of their profits, or −1 if no such triple exists (n up to 50 000). Example: prices [10,2,3,4], profits [100,2,7,10] → 19.",
 "why": "Same as part I with much larger input: left/right best profits are found with Fenwick trees → 19 for the sample.",
 "idea": "Same idea as part I, but n is up to 50 000. Compress the prices, then use a Fenwick tree that stores the maximum profit seen for each price rank: scanning left to right it answers 'best profit among cheaper items' as a prefix maximum; scanning right to left with reversed ranks it answers 'best profit among pricier items'.",
 "input": "prices = [10,2,3,4], profits = [100,2,7,10]",
 "output": "19",
 "notes": [],
 "best": "Same idea as part I, but n is up to 50 000. Compress the prices, then use a Fenwick tree that stores the maximum profit seen for each price rank: scanning left to right it answers 'best profit among cheaper items' as a prefix maximum; scanning right to left with reversed ranks it answers 'best profit among pricier items'.",
 "variants": [
  {
   "name": "Two Fenwick trees for prefix maxima",
   "code": "class Solution:\n    def maxProfit(self, prices, profits):\n        n = len(prices)\n        rank = {v: i + 1 for i, v in enumerate(sorted(set(prices)))}\n        m = len(rank)\n        def update(t, i, v):\n            while i <= m:\n                t[i] = max(t[i], v)\n                i += i & -i\n        def query(t, i):\n            r = -1\n            while i > 0:\n                r = max(r, t[i])\n                i -= i & -i\n            return r\n        left = [-1] * n\n        t = [-1] * (m + 1)\n        for j in range(n):\n            left[j] = query(t, rank[prices[j]] - 1)\n            update(t, rank[prices[j]], profits[j])\n        best = -1\n        t = [-1] * (m + 1)\n        for j in range(n - 1, -1, -1):\n            r = query(t, m - rank[prices[j]])\n            update(t, m - rank[prices[j]] + 1, profits[j])\n            if left[j] > 0 and r > 0:\n                best = max(best, left[j] + profits[j] + r)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Same idea as part I, but n is up to 50 000. Compress the prices, then use a Fenwick tree that stores the maximum profit seen for each price rank: scanning left to right it answers 'best profit among cheaper items' as a prefix maximum; scanning right to left with reversed ranks it answers 'best profit among pricier items'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Chain DP (quadratic)",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxProfit(self, prices, profits):\n        n = len(prices)\n        two = [-1] * n\n        best = -1\n        for k in range(n):\n            for j in range(k):\n                if prices[j] < prices[k]:\n                    if two[j] > 0:\n                        best = max(best, two[j] + profits[k])\n                    two[k] = max(two[k], profits[j] + profits[k])\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Reference solution that is too slow for n = 50 000.",
   "frames": [],
   "alt": true
  }
 ]
};
