window.PROBLEM = {
 "id": "1615",
 "title": "Maximal Network Rank",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "n=4, roads [[0,1],[0,3],[1,2],[1,3]] → cities 0 and 1: 2 + 3 − 1 = 4.",
 "idea": "The network rank of two cities is the number of roads touching either, with a shared road counted once: degree[a] + degree[b] − (1 if a and b are directly connected). Try every pair.",
 "input": "n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]",
 "output": "4",
 "notes": [],
 "best": "The network rank of two cities is the number of roads touching either, with a shared road counted once: degree[a] + degree[b] − (1 if a and b are directly connected). Try every pair.",
 "variants": [
  {
   "name": "degree[a] + degree[b] − 1 if directly connected",
   "code": "class Solution:\n    def maximalNetworkRank(self, n, roads):\n        deg = [0] * n\n        linked = set()\n        for a, b in roads:\n            deg[a] += 1\n            deg[b] += 1\n            linked.add((a, b))\n            linked.add((b, a))\n        best = 0\n        for a in range(n):\n            for b in range(a + 1, n):\n                best = max(best, deg[a] + deg[b] - ((a, b) in linked))\n        return best",
   "time": "O(n² + m)",
   "space": "O(n + m)",
   "explain": "The network rank of two cities is the number of roads touching either, with a shared road counted once: degree[a] + degree[b] − (1 if a and b are directly connected). Try every pair.",
   "frames": []
  }
 ]
};
