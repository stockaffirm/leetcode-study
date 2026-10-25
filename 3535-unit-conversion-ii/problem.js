window.PROBLEM = {
 "id": "3535",
 "title": "Unit Conversion II",
 "level": "Medium",
 "topic": "Graph",
 "question": "There are n kinds of units connected as a tree by n−1 conversions [a, b, f]: one unit of a equals f units of b. For each query [a, b] give the number of units of b equal to one unit of a. The answer is a fraction p/q; return p·q⁻¹ modulo 1,000,000,007 (q⁻¹ is the modular inverse of q). Example: conversions [[0,1,2],[0,2,6]], queries [[1,2],[1,0]] → [3, 500000004].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk the path for each query",
   "tag": "Brute force",
   "code": "class Solution:\n    def queryConversions(self, conversions, queries):\n        MOD = 10 ** 9 + 7\n        g = defaultdict(list)\n        for s, t, f in conversions:\n            g[s].append((t, f))\n            g[t].append((s, pow(f, MOD - 2, MOD)))\n        res = []\n        for a, b in queries:\n            val = {a: 1}\n            st = [a]\n            while st:\n                u = st.pop()\n                for v, f in g[u]:\n                    if v not in val:\n                        val[v] = val[u] * f % MOD\n                        st.append(v)\n            res.append(val[b])\n        return res",
   "time": "O(q·n)",
   "space": "O(n)",
   "explain": "For every query search the path from a to b multiplying the factors.",
   "frames": [],
   "alt": true
  }
 ]
};
