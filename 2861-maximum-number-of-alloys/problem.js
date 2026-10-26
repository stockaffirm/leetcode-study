window.PROBLEM = {
 "id": "2861",
 "title": "Maximum Number of Alloys",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "There are n kinds of metal and k machines. Machine i needs composition[i][j] units of metal j to make one alloy. You have stock[j] units of each metal and may buy more at cost[j] per unit, with a total budget. You may use only ONE machine (all alloys from it). Return the maximum number of alloys. Example: n=3, k=2, budget 15, composition [[1,1,1],[1,1,10]], stock [0,0,0], cost [1,2,3] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count upwards until the money runs out",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxNumberOfAlloys(self, n, k, budget, composition, stock, cost):\n        best = 0\n        for comp in composition:\n            a = 0\n            while sum(max(0, (a + 1) * comp[j] - stock[j]) * cost[j] for j in range(n)) <= budget: a += 1\n            best = max(best, a)\n        return best",
   "time": "O(k·n·answer)",
   "space": "O(1)",
   "explain": "For each machine make one more alloy while the cost stays within the budget.",
   "frames": [],
   "alt": true
  }
 ]
};
