window.PROBLEM = {
 "id": "3613",
 "title": "Minimize Maximum Component Cost",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "A connected weighted graph has n nodes. You may delete any number of edges so that at most k connected components remain. The cost of a component is its heaviest edge (0 if it has none). Return the smallest possible value of the largest component cost. Example: n=5, edges [[0,1,4],[1,2,3],[1,3,2],[3,4,6]], k=2 → 4 (delete the edge of weight 6).",
 "why": "A connected weighted graph; delete edges so that at most k components remain. The cost of a component is its heaviest edge (0 if none). Minimise the largest component cost.",
 "idea": "Keep the cheapest edges that merge components (Kruskal). Add edges in increasing weight order; stop when only k components are left — the last weight added is the answer.",
 "input": "n=5, edges [[0,1,4],[1,2,3],[1,3,2],[3,4,6]], k=2",
 "output": "4",
 "notes": [],
 "best": "Keep the cheapest edges that merge components (Kruskal). Add edges in increasing weight order; stop when only k components are left — the last weight added is the answer.",
 "variants": [
  {
   "name": "Kruskal until k components remain",
   "code": "class Solution:\n    def minCost(self, n, edges, k):\n        if k >= n: return 0\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        comps = n\n        for u, v, w in sorted(edges, key=lambda e: e[2]):\n            ru, rv = find(u), find(v)\n            if ru != rv:\n                parent[ru] = rv\n                comps -= 1\n                if comps == k: return w\n        return 0",
   "time": "O(E log E)",
   "space": "O(n)",
   "explain": "Keep the cheapest edges that merge components (Kruskal). Add edges in increasing weight order; stop when only k components are left — the last weight added is the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search on the cost",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, n, edges, k):\n        def comps(w):\n            parent = list(range(n))\n            def find(x):\n                while parent[x] != x:\n                    parent[x] = parent[parent[x]]\n                    x = parent[x]\n                return x\n            c = n\n            for u, v, wt in edges:\n                if wt <= w:\n                    ru, rv = find(u), find(v)\n                    if ru != rv:\n                        parent[ru] = rv\n                        c -= 1\n            return c\n        cands = sorted({0} | {e[2] for e in edges})\n        lo, hi = 0, len(cands) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if comps(cands[mid]) <= k: hi = mid\n            else: lo = mid + 1\n        return cands[lo]",
   "time": "O(E log W)",
   "space": "O(n)",
   "explain": "For a cost limit w, union only edges ≤ w; feasible if at most k components remain.",
   "frames": [],
   "alt": true
  }
 ]
};
