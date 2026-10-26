window.PROBLEM = {
 "id": "2361",
 "title": "Minimum Costs Using the Train Line",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
