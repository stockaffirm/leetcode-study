window.PROBLEM = {
 "id": "1928",
 "title": "Minimum Cost to Reach Destination in Time",
 "level": "Hard",
 "topic": "Graph",
 "question": "There are n cities (0 to n−1) joined by two-way roads; edges[i] = [x, y, time] means a road between x and y that takes that many minutes. Every time you ARE in a city you pay that city's passing fee, passingFees[city] (including the starting city and the destination). You start in city 0 and must reach city n−1 in at most maxTime minutes in total. Return the smallest total fee, or -1 if it is impossible. Example: maxTime=10, roads [[0,1,3],[1,2,3],[0,2,9]], fees [5,3,2] → direct road 9 min costs 5+2 = 7; via city 1 (6 min) costs 5+3+2 = 10 → 7.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dijkstra over cost",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, maxTime, edges, passingFees):\n        n = len(passingFees)\n        g = defaultdict(list)\n        for u, v, w in edges:\n            g[u].append((v, w))\n            g[v].append((u, w))\n        best = {}\n        pq = [(passingFees[0], 0, 0)]\n        while pq:\n            cost, t, u = heappop(pq)\n            if u == n - 1: return cost\n            if u in best and best[u] <= t: continue\n            best[u] = t\n            for v, w in g[u]:\n                if t + w <= maxTime:\n                    heappush(pq, (cost + passingFees[v], t + w, v))\n        return -1",
   "time": "O(E log E)",
   "space": "O(E)",
   "explain": "Always expand the cheapest trip first; skip a city if you have already been there with less time.",
   "frames": [],
   "alt": true
  }
 ]
};
