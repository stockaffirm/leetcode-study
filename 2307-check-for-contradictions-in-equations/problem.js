window.PROBLEM = {
 "id": "2307",
 "title": "Check for Contradictions in Equations",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
