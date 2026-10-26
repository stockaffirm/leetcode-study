window.PROBLEM = {
 "id": "3651",
 "title": "Minimum Cost Path with Teleportations",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[[1,3,3],[2,5,4],[4,3,5]], k=2: walk down, right (cost 7), then teleport to the bottom-right (value 5 ≤ 5) → 7.",
 "idea": "Layer t = best cost to reach each cell using at most t teleports. Layer 0 is the usual right/down DP (cost = destination value). For the next layer, a cell can be entered for free from any cell with a value ≥ its own, so keep the cheapest previous-layer cost among cells with value ≥ v (a suffix minimum over values), then rerun the right/down DP (Dynamic Programming) seeded with those teleport costs.",
 "input": "grid = [[1,3,3],[2,5,4],[4,3,5]], k = 2",
 "output": "7",
 "notes": [],
 "best": "Layer t = best cost to reach each cell using at most t teleports. Layer 0 is the usual right/down DP (cost = destination value). For the next layer, a cell can be entered for free from any cell with a value ≥ its own, so keep the cheapest previous-layer cost among cells with value ≥ v (a suffix minimum over values), then rerun the right/down DP (Dynamic Programming) seeded with those teleport costs.",
 "variants": [
  {
   "name": "Layered DP with a suffix minimum by value",
   "code": "class Solution:\n    def minCost(self, grid, k):\n        m, n = len(grid), len(grid[0])\n        INF = float('inf')\n        def walk(seed):\n            dp = [[INF] * n for _ in range(m)]\n            for i in range(m):\n                for j in range(n):\n                    if i == 0 and j == 0:\n                        dp[i][j] = 0\n                        continue\n                    best = seed[i][j]\n                    if i:\n                        best = min(best, dp[i - 1][j] + grid[i][j])\n                    if j:\n                        best = min(best, dp[i][j - 1] + grid[i][j])\n                    dp[i][j] = best\n            return dp\n        dp = walk([[INF] * n for _ in range(m)])\n        vals = sorted({v for row in grid for v in row}, reverse=True)\n        for _ in range(k):\n            at = defaultdict(lambda: INF)\n            for i in range(m):\n                for j in range(n):\n                    at[grid[i][j]] = min(at[grid[i][j]], dp[i][j])\n            suffix = {}\n            cur = INF\n            for v in vals:\n                cur = min(cur, at[v])\n                suffix[v] = cur\n            dp = walk([[suffix[grid[i][j]] for j in range(n)] for i in range(m)])\n        return dp[m - 1][n - 1]",
   "time": "O(k·m·n)",
   "space": "O(m·n)",
   "explain": "Layer t = best cost to reach each cell using at most t teleports. Layer 0 is the usual right/down DP (cost = destination value). For the next layer, a cell can be entered for free from any cell with a value ≥ its own, so keep the cheapest previous-layer cost among cells with value ≥ v (a suffix minimum over values), then rerun the right/down DP (Dynamic Programming) seeded with those teleport costs.",
   "frames": []
  }
 ]
};
