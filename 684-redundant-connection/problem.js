window.PROBLEM = {
 "id": "684",
 "title": "Redundant Connection",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "A graph that started as a tree (nodes 1 … n) got one extra edge. Return an edge that can be removed so the graph is a tree again; if several, the one that appears last in the input. Example: [[1,2],[1,3],[2,3]] → [2,3].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Detect the cycle with DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def findRedundantConnection(self, edges):\n        g = defaultdict(list)\n        def connected(a, b):\n            seen = {a}\n            stack = [a]\n            while stack:\n                u = stack.pop()\n                if u == b:\n                    return True\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        stack.append(v)\n            return False\n        for a, b in edges:\n            if connected(a, b):\n                return [a, b]\n            g[a].append(b)\n            g[b].append(a)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Add edges one at a time; if the ends are already connected through the graph so far, this edge closes a cycle.",
   "frames": [],
   "alt": true
  }
 ]
};
