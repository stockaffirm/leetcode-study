window.PROBLEM = {
 "id": "2307",
 "title": "Check for Contradictions in Equations",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "You get equations a / b = value (variables are strings). Return True if there is a contradiction, i.e. the equations cannot all hold (compare numbers allowing an error of 10⁻⁵). Example: [['a','b'],['b','c'],['a','c']], [3,0.5,1.5] → False; [['le','et'],['le','code'],['code','et']], [2,5,0.5] → True.",
 "why": "Each equation says a / b = value. Is there a contradiction (two equations that cannot both hold)? Compare with precision 10⁻⁵.",
 "idea": "Weighted union-find: store for each variable its ratio to its group's root. A new equation between variables in the same group must agree with the stored ratios; otherwise merge the groups with the ratio that makes the equation true.",
 "input": "[['a','b'],['b','c'],['a','c']], [3, 0.5, 1.5]",
 "output": "False",
 "notes": [],
 "best": "Weighted union-find: store for each variable its ratio to its group's root. A new equation between variables in the same group must agree with the stored ratios; otherwise merge the groups with the ratio that makes the equation true.",
 "variants": [
  {
   "name": "Weighted union-find",
   "code": "class Solution:\n    def checkContradictions(self, equations, values):\n        parent, w = {}, {}\n        def find(x):\n            if parent[x] != x:\n                p = parent[x]\n                root = find(p)\n                w[x] *= w[p]\n                parent[x] = root\n            return parent[x]\n        for (a, b), v in zip(equations, values):\n            for x in (a, b):\n                if x not in parent: parent[x], w[x] = x, 1.0\n            ra, rb = find(a), find(b)\n            if ra == rb:\n                if abs(w[a] / w[b] - v) >= 1e-5: return True\n            else:\n                parent[ra] = rb\n                w[ra] = v * w[b] / w[a]\n        return False",
   "time": "O(n α)",
   "space": "O(n)",
   "explain": "Weighted union-find: store for each variable its ratio to its group's root. A new equation between variables in the same group must agree with the stored ratios; otherwise merge the groups with the ratio that makes the equation true.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Assign values by BFS, then check every equation",
   "tag": "Alternative",
   "code": "class Solution:\n    def checkContradictions(self, equations, values):\n        g = defaultdict(list)\n        for (a, b), v in zip(equations, values):\n            g[a].append((b, 1 / v))\n            g[b].append((a, v))\n        val = {}\n        for s in list(g):\n            if s in val: continue\n            val[s] = 1.0\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v, r in g[u]:\n                    if v not in val:\n                        val[v] = val[u] * r\n                        q.append(v)\n        return any(abs(val[a] / val[b] - v) >= 1e-5 for (a, b), v in zip(equations, values))",
   "time": "O(n + e)",
   "space": "O(n)",
   "explain": "Give each variable a value relative to the start of its group by BFS, then verify every equation against those values.",
   "frames": [],
   "alt": true
  }
 ]
};
