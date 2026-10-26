window.PROBLEM = {
 "id": "2976",
 "title": "Minimum Cost to Convert String I",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Letters can be changed into other letters at given costs (and chains of changes are allowed). Cheapest way to turn source into target letter by letter?",
 "idea": "Build a 26×26 table of cheapest direct changes, run Floyd–Warshall to get the cheapest chain between any two letters, then add up the cost for each position (−1 if some change is impossible).",
 "input": "abcd → acbe with several change rules",
 "output": "28",
 "notes": [],
 "best": "Build a 26×26 table of cheapest direct changes, run Floyd–Warshall to get the cheapest chain between any two letters, then add up the cost for each position (−1 if some change is impossible).",
 "variants": [
  {
   "name": "Floyd–Warshall on 26 letters",
   "code": "class Solution:\n    def minimumCost(self, source, target, original, changed, cost):\n        INF = float('inf')\n        d = [[INF] * 26 for _ in range(26)]\n        for i in range(26): d[i][i] = 0\n        for a, b, c in zip(original, changed, cost):\n            x, y = ord(a) - 97, ord(b) - 97\n            d[x][y] = min(d[x][y], c)\n        for k in range(26):\n            for i in range(26):\n                for j in range(26):\n                    if d[i][k] + d[k][j] < d[i][j]: d[i][j] = d[i][k] + d[k][j]\n        total = 0\n        for s, t in zip(source, target):\n            c = d[ord(s) - 97][ord(t) - 97]\n            if c == INF: return -1\n            total += c\n        return total",
   "time": "O(26³ + n)",
   "space": "O(26²)",
   "explain": "Build a 26×26 table of cheapest direct changes, run Floyd–Warshall to get the cheapest chain between any two letters, then add up the cost for each position (−1 if some change is impossible).",
   "frames": []
  }
 ]
};
