window.PROBLEM = {
 "id": "2931",
 "title": "Maximum Spending After Buying Items",
 "level": "Hard",
 "topic": "Greedy",
 "question": "values[i] lists shop i's items sorted non-increasingly. On day d you buy one item from any shop — always the rightmost remaining one — and pay value × d. Buy all items and return the maximum total you can spend. Example: [[8,5,2],[6,4,1],[9,7,3]] → 285.",
 "why": "values [[8,5,2],[6,4,1],[9,7,3]]: buying all items in increasing order over 9 days spends 285.",
 "idea": "Each shop's items are sorted non-increasing; every day you may buy the rightmost (cheapest remaining) item of one shop, paying value × day. To spend as much as possible you want the large values to be bought late, so overall buy the items in globally increasing price order: sort all values ascending and multiply the i-th by (i+1).",
 "input": "values = [[8,5,2],[6,4,1],[9,7,3]]",
 "output": "285",
 "notes": [],
 "best": "Each shop's items are sorted non-increasing; every day you may buy the rightmost (cheapest remaining) item of one shop, paying value × day. To spend as much as possible you want the large values to be bought late, so overall buy the items in globally increasing price order: sort all values ascending and multiply the i-th by (i+1).",
 "variants": [
  {
   "name": "Buy the cheapest items first (they must be bought in increasing price order each day)",
   "code": "class Solution:\n    def maxSpending(self, values):\n        items = sorted(v for row in values for v in row)\n        return sum(v * (i + 1) for i, v in enumerate(items))",
   "time": "O(mn log(mn))",
   "space": "O(mn)",
   "explain": "Each shop's items are sorted non-increasing; every day you may buy the rightmost (cheapest remaining) item of one shop, paying value × day. To spend as much as possible you want the large values to be bought late, so overall buy the items in globally increasing price order: sort all values ascending and multiply the i-th by (i+1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Heap of the rightmost items",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxSpending(self, values):\n        heap = [(row[-1], i, len(row) - 1) for i, row in enumerate(values)]\n        heapify(heap)\n        day = total = 0\n        while heap:\n            v, i, j = heappop(heap)\n            day += 1\n            total += v * day\n            if j:\n                heappush(heap, (values[i][j - 1], i, j - 1))\n        return total",
   "time": "O(mn log m)",
   "space": "O(m)",
   "explain": "Simulate the days: buy the globally cheapest available item each day with a min-heap over shops.",
   "frames": [],
   "alt": true
  }
 ]
};
