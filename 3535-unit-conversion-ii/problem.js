window.PROBLEM = {
 "id": "3535",
 "title": "Unit Conversion II",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Units are connected as a tree: one unit of A equals some number of units of B. Answer queries 'how many units of B equal one unit of A' as a fraction modulo 10⁹+7.",
 "idea": "Pick unit 0 as the root and compute for every unit how many of it equal one root unit (multiply by the factor going down an edge, by its modular inverse going up). A query is ratio[b] / ratio[a] — a division done with a modular inverse.",
 "input": "conversions [[0,1,2],[0,2,6]], queries [[1,2],[1,0]]",
 "output": "[3, 500000004]",
 "notes": [],
 "best": "Pick unit 0 as the root and compute for every unit how many of it equal one root unit (multiply by the factor going down an edge, by its modular inverse going up). A query is ratio[b] / ratio[a] — a division done with a modular inverse.",
 "variants": [
  {
   "name": "Ratios to the root unit",
   "code": "class Solution:\n    def queryConversions(self, conversions, queries):\n        MOD = 10 ** 9 + 7\n        n = len(conversions) + 1\n        g = defaultdict(list)\n        for s, t, f in conversions:\n            g[s].append((t, f))\n            g[t].append((s, pow(f, MOD - 2, MOD)))\n        ratio = [0] * n\n        ratio[0] = 1\n        q = deque([0])\n        while q:\n            u = q.popleft()\n            for v, f in g[u]:\n                if not ratio[v]:\n                    ratio[v] = ratio[u] * f % MOD\n                    q.append(v)\n        return [ratio[b] * pow(ratio[a], MOD - 2, MOD) % MOD for a, b in queries]",
   "time": "O(n + q log MOD)",
   "space": "O(n)",
   "explain": "Pick unit 0 as the root and compute for every unit how many of it equal one root unit (multiply by the factor going down an edge, by its modular inverse going up). A query is ratio[b] / ratio[a] — a division done with a modular inverse.",
   "frames": []
  }
 ]
};
