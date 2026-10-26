window.PROBLEM = {
 "id": "684",
 "title": "Redundant Connection",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Edges 1–2 and 1–3 connect all three nodes; the edge 2–3 closes a cycle, so it is the redundant one.",
 "idea": "Add the edges one by one with Union Find. The first edge whose two ends are already in the same group closes the cycle — return it.",
 "input": "edges = [[1,2],[1,3],[2,3]]",
 "output": "[2, 3]",
 "notes": [],
 "best": "Add the edges one by one with Union Find. The first edge whose two ends are already in the same group closes the cycle — return it.",
 "variants": [
  {
   "name": "Union Find",
   "code": "class Solution:\n    def findRedundantConnection(self, edges):\n        parent = list(range(len(edges) + 1))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for a, b in edges:\n            ra, rb = find(a), find(b)\n            if ra == rb:\n                return [a, b]\n            parent[ra] = rb",
   "time": "O(n α(n))",
   "space": "O(n)",
   "explain": "Add the edges one by one with Union Find. The first edge whose two ends are already in the same group closes the cycle — return it.",
   "frames": []
  }
 ]
};
