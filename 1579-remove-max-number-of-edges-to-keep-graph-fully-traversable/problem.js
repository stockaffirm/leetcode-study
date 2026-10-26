window.PROBLEM = {
 "id": "1579",
 "title": "Remove Max Number of Edges to Keep Graph Fully Traversable",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
