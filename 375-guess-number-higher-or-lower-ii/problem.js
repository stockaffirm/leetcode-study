window.PROBLEM = {
 "id": "375",
 "title": "Guess Number Higher or Lower II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=10: a smart strategy guarantees winning with at most 16 dollars.",
 "idea": "cost(l, r) = the money needed to guarantee a win in [l, r]. Guessing x costs x plus the worse of the left part and right part: x + max(cost(l, x−1), cost(x+1, r)). Pick the x that minimises it; an empty or one-number range costs 0.",
 "input": "n = 10",
 "output": "16",
 "notes": [],
 "best": "cost(l, r) = the money needed to guarantee a win in [l, r]. Guessing x costs x plus the worse of the left part and right part: x + max(cost(l, x−1), cost(x+1, r)). Pick the x that minimises it; an empty or one-number range costs 0.",
 "variants": [
  {
   "name": "Interval DP: minimise the worst-case cost",
   "code": "class Solution:\n    def getMoneyAmount(self, n):\n        @lru_cache(None)\n        def cost(l, r):\n            if l >= r:\n                return 0\n            return min(x + max(cost(l, x - 1), cost(x + 1, r)) for x in range(l, r + 1))\n        return cost(1, n)",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "cost(l, r) = the money needed to guarantee a win in [l, r]. Guessing x costs x plus the worse of the left part and right part: x + max(cost(l, x−1), cost(x+1, r)). Pick the x that minimises it; an empty or one-number range costs 0.",
   "frames": []
  }
 ]
};
