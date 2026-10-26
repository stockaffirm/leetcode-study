window.PROBLEM = {
 "id": "2861",
 "title": "Maximum Number of Alloys",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "Each machine makes one alloy from fixed amounts of several metals. You have stock and a budget to buy missing metal at given prices. Use ONE machine; maximise the alloys.",
 "idea": "For one machine, binary search the number of alloys a: the cost is Σ max(0, a·need − stock)·price; it must fit the budget. Take the best machine.",
 "input": "n=3, 2 machines, budget 15, stock [0,0,0], cost [1,2,3]",
 "output": "2",
 "notes": [],
 "best": "For one machine, binary search the number of alloys a: the cost is Σ max(0, a·need − stock)·price; it must fit the budget. Take the best machine.",
 "variants": [
  {
   "name": "Binary search the count per machine",
   "code": "class Solution:\n    def maxNumberOfAlloys(self, n, k, budget, composition, stock, cost):\n        best = 0\n        for comp in composition:\n            def ok(a):\n                return sum(max(0, a * comp[j] - stock[j]) * cost[j] for j in range(n)) <= budget\n            lo, hi = 0, budget + max(stock)\n            while lo < hi:\n                mid = (lo + hi + 1) // 2\n                if ok(mid): lo = mid\n                else: hi = mid - 1\n            best = max(best, lo)\n        return best",
   "time": "O(k·n log B)",
   "space": "O(1)",
   "explain": "For one machine, binary search the number of alloys a: the cost is Σ max(0, a·need − stock)·price; it must fit the budget. Take the best machine.",
   "frames": []
  }
 ]
};
