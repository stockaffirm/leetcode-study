window.PROBLEM = {
 "id": "1579",
 "title": "Remove Max Number of Edges to Keep Graph Fully Traversable",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "Alice and Bob walk on a graph. Edge type 1 can be used only by Alice, type 2 only by Bob, type 3 by both. Remove as many edges as possible while both can still reach every node. Return how many edges were removed, or −1 if even with all edges one of them cannot reach every node. Example: n=4, edges [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]] → 2.",
 "why": "Edges of type 1 can be used only by Alice, type 2 only by Bob, type 3 by both. Remove as many edges as possible so that both can still reach every node (−1 if impossible).",
 "idea": "Use type-3 edges first (they help both). Keep a union-find for Alice and one for Bob; keep an edge only if it joins two groups for somebody. Everything else is removable. Both must end connected.",
 "input": "n=4, 6 edges",
 "output": "2",
 "notes": [],
 "best": "Use type-3 edges first (they help both). Keep a union-find for Alice and one for Bob; keep an edge only if it joins two groups for somebody. Everything else is removable. Both must end connected.",
 "variants": [
  {
   "name": "Two union-finds, shared edges first",
   "code": "class Solution:\n    def maxNumEdgesToRemove(self, n, edges):\n        pa, pb = list(range(n + 1)), list(range(n + 1))\n        def find(p, x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        def union(p, a, b):\n            ra, rb = find(p, a), find(p, b)\n            if ra == rb: return False\n            p[ra] = rb\n            return True\n        used = 0\n        for t, a, b in edges:\n            if t == 3:\n                ua, ub = union(pa, a, b), union(pb, a, b)\n                if ua or ub: used += 1\n        for t, a, b in edges:\n            if t == 1 and union(pa, a, b): used += 1\n            elif t == 2 and union(pb, a, b): used += 1\n        ca = len({find(pa, i) for i in range(1, n + 1)})\n        cb = len({find(pb, i) for i in range(1, n + 1)})\n        return len(edges) - used if ca == 1 and cb == 1 else -1",
   "time": "O(E α)",
   "space": "O(n)",
   "explain": "Use type-3 edges first (they help both). Keep a union-find for Alice and one for Bob; keep an edge only if it joins two groups for somebody. Everything else is removable. Both must end connected.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count the edges a spanning structure needs",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxNumEdgesToRemove(self, n, edges):\n        def find(p, x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        def union(p, a, b):\n            ra, rb = find(p, a), find(p, b)\n            if ra == rb: return False\n            p[ra] = rb\n            return True\n        shared = list(range(n + 1))\n        s = sum(1 for t, a, b in edges if t == 3 and union(shared, a, b))\n        for kind in (1, 2):\n            p = shared[:]\n            for t, a, b in edges:\n                if t == kind: union(p, a, b)\n            if len({find(p, i) for i in range(1, n + 1)}) != 1: return -1\n        return len(edges) - (s + 2 * (n - 1 - s))",
   "time": "O(E α)",
   "space": "O(n)",
   "explain": "Both people need n−1 edges; every shared edge in the forest of type-3 edges serves both, so the minimum kept is s + 2(n−1−s). Check connectivity first.",
   "frames": [],
   "alt": true
  }
 ]
};
