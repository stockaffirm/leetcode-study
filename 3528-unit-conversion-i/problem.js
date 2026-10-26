window.PROBLEM = {
 "id": "3528",
 "title": "Unit Conversion I",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "1 unit0 = 2 unit1 and 1 unit1 = 3 unit2 → unit counts [1, 2, 6].",
 "idea": "The conversions form a tree rooted at unit 0. Walk it from 0 and multiply the factors along the path (modulo 1e9+7): base[target] = base[source] × factor.",
 "input": "conversions = [[0,1,2],[1,2,3]]",
 "output": "[1, 2, 6]",
 "notes": [],
 "best": "The conversions form a tree rooted at unit 0. Walk it from 0 and multiply the factors along the path (modulo 1e9+7): base[target] = base[source] × factor.",
 "variants": [
  {
   "name": "BFS multiplying the conversion factors",
   "code": "class Solution:\n    def baseUnitConversions(self, conversions):\n        MOD = 10**9 + 7\n        n = len(conversions) + 1\n        g = [[] for _ in range(n)]\n        for a, b, f in conversions:\n            g[a].append((b, f))\n        res = [0] * n\n        res[0] = 1\n        q = deque([0])\n        while q:\n            u = q.popleft()\n            for v, f in g[u]:\n                res[v] = res[u] * f % MOD\n                q.append(v)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The conversions form a tree rooted at unit 0. Walk it from 0 and multiply the factors along the path (modulo 1e9+7): base[target] = base[source] × factor.",
   "frames": []
  }
 ]
};
