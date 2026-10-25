window.PROBLEM = {
 "id": "2742",
 "title": "Painting the Walls",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Two painters paint n walls. The paid painter paints wall i in time[i] time units and charges cost[i]. The free painter paints any wall in 1 time unit at no cost, but can only work while the paid painter is busy. Return the minimum total cost to paint all walls. Example: cost [1,2,3,2], time [1,2,3,2] → pay for walls 0 and 1 (cost 3, 3 time units): the free painter paints the other two meanwhile → 3.",
 "why": "A paid painter paints wall i in time[i] and costs cost[i]; a free painter paints one wall per time unit but only while the paid painter is busy. Cheapest way to paint all walls?",
 "idea": "Hiring the paid painter for wall i effectively paints 1 + time[i] walls. So choose walls to pay for such that their (1 + time) sum covers n walls at minimum total cost — a knapsack.",
 "input": "cost [1,2,3,2], time [1,2,3,2]",
 "output": "3",
 "notes": [],
 "best": "Hiring the paid painter for wall i effectively paints 1 + time[i] walls. So choose walls to pay for such that their (1 + time) sum covers n walls at minimum total cost — a knapsack.",
 "variants": [
  {
   "name": "Knapsack: each paid wall also covers `time` free walls",
   "code": "class Solution:\n    def paintWalls(self, cost, time):\n        n = len(cost)\n        INF = float('inf')\n        dp = [0] + [INF] * n\n        for c, t in zip(cost, time):\n            for j in range(n, 0, -1):\n                dp[j] = min(dp[j], dp[max(j - t - 1, 0)] + c)\n        return dp[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Hiring the paid painter for wall i effectively paints 1 + time[i] walls. So choose walls to pay for such that their (1 + time) sum covers n walls at minimum total cost — a knapsack.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def paintWalls(self, cost, time):\n        n = len(cost)\n        @lru_cache(None)\n        def go(i, need):\n            if need <= 0: return 0\n            if i == n: return float('inf')\n            return min(go(i + 1, need), cost[i] + go(i + 1, need - 1 - time[i]))\n        return go(0, n)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "For each wall decide whether to pay a painter for it (covering 1 + time walls) or not.",
   "frames": [],
   "alt": true
  }
 ]
};
