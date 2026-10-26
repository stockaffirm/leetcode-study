window.PROBLEM = {
 "id": "1928",
 "title": "Minimum Cost to Reach Destination in Time",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Roads take time, cities charge a passing fee each time you are in them. Cheapest trip from city 0 to the last city within maxTime?",
 "idea": "Make time part of the state: dp[t][city] = cheapest cost to be in that city at exactly time t. Roads move you from t−w to t.",
 "input": "maxTime=10, edges=[[0,1,3],[1,2,3],[0,2,9]], passingFees=[5,3,2]",
 "output": "7",
 "notes": [],
 "best": "Make time part of the state: dp[t][city] = cheapest cost to be in that city at exactly time t. Roads move you from t−w to t.",
 "variants": [
  {
   "name": "DP over time",
   "code": "class Solution:\n    def minCost(self, maxTime, edges, passingFees):\n        n = len(passingFees)\n        INF = float('inf')\n        dp = [[INF] * n for _ in range(maxTime + 1)]\n        dp[0][0] = passingFees[0]\n        for t in range(1, maxTime + 1):\n            for u, v, w in edges:\n                if w <= t:\n                    if dp[t - w][u] + passingFees[v] < dp[t][v]: dp[t][v] = dp[t - w][u] + passingFees[v]\n                    if dp[t - w][v] + passingFees[u] < dp[t][u]: dp[t][u] = dp[t - w][v] + passingFees[u]\n        ans = min(dp[t][n - 1] for t in range(maxTime + 1))\n        return ans if ans < INF else -1",
   "time": "O(maxTime · edges)",
   "space": "O(maxTime · n)",
   "explain": "Make time part of the state: dp[t][city] = cheapest cost to be in that city at exactly time t. Roads move you from t−w to t.",
   "frames": []
  }
 ]
};
