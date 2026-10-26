window.PROBLEM = {
 "id": "2361",
 "title": "Minimum Costs Using the Train Line",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A train line has stops 0…n. Between stops i−1 and i the regular route costs regular[i−1] and the express route costs express[i−1]. Switching from regular to express costs expressCost (switching back is free). Starting on the regular route at stop 0, return the minimum cost to reach each stop 1…n. Example: regular [1,6,9,5], express [5,2,3,10], expressCost 8 → [1,7,14,19].",
 "why": "regular [1,6,9,5], express [5,2,3,10], expressCost 8 → costs to stops 1…4: [1,7,14,19].",
 "idea": "Track two numbers while moving stop by stop: the cheapest cost to be at the stop on the regular route, and on the express route. Staying on a route adds that route's segment cost; switching to the express route costs expressCost extra, switching back to regular is free. The answer for each stop is the smaller of the two.",
 "input": "regular = [1,6,9,5], express = [5,2,3,10], expressCost = 8",
 "output": "[1, 7, 14, 19]",
 "notes": [],
 "best": "Track two numbers while moving stop by stop: the cheapest cost to be at the stop on the regular route, and on the express route. Staying on a route adds that route's segment cost; switching to the express route costs expressCost extra, switching back to regular is free. The answer for each stop is the smaller of the two.",
 "variants": [
  {
   "name": "Two-state DP: on the regular or express route",
   "code": "class Solution:\n    def minimumCosts(self, regular, express, expressCost):\n        reg, exp = 0, expressCost\n        res = []\n        for r, e in zip(regular, express):\n            new_reg = min(reg, exp) + r\n            new_exp = min(exp, reg + expressCost) + e\n            reg, exp = new_reg, new_exp\n            res.append(min(reg, exp))\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track two numbers while moving stop by stop: the cheapest cost to be at the stop on the regular route, and on the express route. Staying on a route adds that route's segment cost; switching to the express route costs expressCost extra, switching back to regular is free. The answer for each stop is the smaller of the two.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumCosts(self, regular, express, expressCost):\n        n = len(regular)\n        @lru_cache(None)\n        def cost(i, on_express):\n            if i < 0:\n                return expressCost if on_express else 0\n            if on_express:\n                return min(cost(i - 1, True), cost(i - 1, False) + expressCost) + express[i]\n            return min(cost(i - 1, False), cost(i - 1, True)) + regular[i]\n        return [min(cost(i, True), cost(i, False)) for i in range(n)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "cost(i, onExpress) built from the previous stop.",
   "frames": [],
   "alt": true
  }
 ]
};
