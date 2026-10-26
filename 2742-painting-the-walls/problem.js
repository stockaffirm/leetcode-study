window.PROBLEM = {
 "id": "2742",
 "title": "Painting the Walls",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
