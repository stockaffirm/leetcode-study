window.PROBLEM = {
 "id": "983",
 "title": "Minimum Cost For Tickets",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Days [1,4,6,7,8,20], costs [2,7,15]: a 1-day ticket on day 1 (2), a 7-day ticket covering days 4–10 (7), a 1-day ticket on day 20 (2) → 11.",
 "idea": "dp[d] is the cheapest cost to cover all travel days up to day d. On a non-travel day it equals dp[d−1]. On a travel day take the best of: 1-day ticket from d−1, 7-day ticket from d−7, 30-day ticket from d−30.",
 "input": "days = [1,4,6,7,8,20], costs = [2,7,15]",
 "output": "11",
 "notes": [],
 "best": "dp[d] is the cheapest cost to cover all travel days up to day d. On a non-travel day it equals dp[d−1]. On a travel day take the best of: 1-day ticket from d−1, 7-day ticket from d−7, 30-day ticket from d−30.",
 "variants": [
  {
   "name": "DP over calendar days",
   "code": "class Solution:\n    def mincostTickets(self, days, costs):\n        last = days[-1]\n        travel = set(days)\n        dp = [0] * (last + 1)\n        for d in range(1, last + 1):\n            if d not in travel:\n                dp[d] = dp[d - 1]\n            else:\n                dp[d] = min(dp[d - 1] + costs[0],\n                            dp[max(0, d - 7)] + costs[1],\n                            dp[max(0, d - 30)] + costs[2])\n        return dp[last]",
   "time": "O(last day)",
   "space": "O(last day)",
   "explain": "dp[d] is the cheapest cost to cover all travel days up to day d. On a non-travel day it equals dp[d−1]. On a travel day take the best of: 1-day ticket from d−1, 7-day ticket from d−7, 30-day ticket from d−30.",
   "frames": []
  }
 ]
};
