window.PROBLEM = {
 "id": "1473",
 "title": "Paint House III",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Some houses are already painted. Paint the rest (each colour has its own cost per house) so that exactly 'target' groups of equal-coloured neighbouring houses exist. Minimise the cost, or return −1.",
 "idea": "State = (house index, colour of the previous house, neighbourhoods so far). A new neighbourhood starts whenever the colour changes. Try every allowed colour for the current house.",
 "input": "houses [0,0,0,0,0], 2 colours, target 3",
 "output": "9",
 "notes": [],
 "best": "State = (house index, colour of the previous house, neighbourhoods so far). A new neighbourhood starts whenever the colour changes. Try every allowed colour for the current house.",
 "variants": [
  {
   "name": "DP over (house, last colour, neighbourhoods)",
   "code": "class Solution:\n    def minCost(self, houses, cost, m, n, target):\n        INF = float('inf')\n        @lru_cache(None)\n        def f(i, prev, t):\n            if t > target: return INF\n            if i == m: return 0 if t == target else INF\n            best = INF\n            for c in range(1, n + 1):\n                if houses[i] and houses[i] != c: continue\n                extra = 0 if houses[i] else cost[i][c - 1]\n                best = min(best, extra + f(i + 1, c, t + (c != prev)))\n            return best\n        ans = f(0, 0, 0)\n        return -1 if ans >= INF else ans",
   "time": "O(m·n²·target)",
   "space": "O(m·n·target)",
   "explain": "State = (house index, colour of the previous house, neighbourhoods so far). A new neighbourhood starts whenever the colour changes. Try every allowed colour for the current house.",
   "frames": []
  }
 ]
};
