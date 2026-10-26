window.PROBLEM = {
 "id": "2931",
 "title": "Maximum Spending After Buying Items",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
