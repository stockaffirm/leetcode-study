window.PROBLEM = {
 "id": "1473",
 "title": "Paint House III",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A row of houses: houses[i] is its colour (1…n) or 0 if not yet painted. cost[i][j] is the cost to paint house i with colour j+1. A neighbourhood is a maximal group of consecutive houses with the same colour. Paint the unpainted houses so that there are exactly 'target' neighbourhoods, at minimum cost; return −1 if impossible. Example: houses [0,0,0,0,0], 2 colours, target 3 → 9.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bottom-up DP table",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, houses, cost, m, n, target):\n        INF = float('inf')\n        dp = [[[INF] * (target + 1) for _ in range(n + 1)] for _ in range(m)]\n        for i in range(m):\n            for c in range(1, n + 1):\n                if houses[i] and houses[i] != c: continue\n                extra = 0 if houses[i] else cost[i][c - 1]\n                if i == 0:\n                    dp[0][c][1] = extra\n                    continue\n                for t in range(1, target + 1):\n                    best = INF\n                    for pc in range(1, n + 1):\n                        tt = t if pc == c else t - 1\n                        if tt >= 1: best = min(best, dp[i - 1][pc][tt])\n                    if best < INF: dp[i][c][t] = best + extra\n        ans = min(dp[m - 1][c][target] for c in range(1, n + 1))\n        return -1 if ans == INF else ans",
   "time": "O(m·n²·target)",
   "space": "O(m·n·target)",
   "explain": "dp[i][c][t] = cheapest cost for the first i+1 houses when house i has colour c and there are t neighbourhoods.",
   "frames": [],
   "alt": true
  }
 ]
};
