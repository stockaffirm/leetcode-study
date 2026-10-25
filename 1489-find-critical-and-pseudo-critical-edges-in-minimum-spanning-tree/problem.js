window.PROBLEM = {
 "id": "1489",
 "title": "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "A weighted undirected graph is given. An edge is CRITICAL if deleting it makes the minimum spanning tree's total weight bigger (or the graph disconnected). An edge is PSEUDO-CRITICAL if it is in some minimum spanning tree but not in all. Return [list of critical edge indexes, list of pseudo-critical edge indexes]. Example: n=5, edges [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]] → [[0,1],[2,3,4,5]].",
 "why": "In a weighted graph, an edge is 'critical' if removing it makes the minimum spanning tree (MST) heavier (or impossible); 'pseudo-critical' if it appears in some MST but not all. List both kinds (by edge index).",
 "idea": "Compute the MST weight W. For each edge: Kruskal without it — if the weight rises (or the graph disconnects) it is critical. Otherwise Kruskal with it forced in — if the weight is still W it is pseudo-critical.",
 "input": "n=5, edges [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]",
 "output": "[[0,1],[2,3,4,5]]",
 "notes": [],
 "best": "Compute the MST weight W. For each edge: Kruskal without it — if the weight rises (or the graph disconnects) it is critical. Otherwise Kruskal with it forced in — if the weight is still W it is pseudo-critical.",
 "variants": [
  {
   "name": "Kruskal with one edge excluded or forced",
   "code": "class Solution:\n    def findCriticalAndPseudoCriticalEdges(self, n, edges):\n        order = sorted(range(len(edges)), key=lambda i: edges[i][2])\n        def mst(skip=-1, force=-1):\n            parent = list(range(n))\n            def find(x):\n                while parent[x] != x:\n                    parent[x] = parent[parent[x]]\n                    x = parent[x]\n                return x\n            w = used = 0\n            if force >= 0:\n                a, b, c = edges[force]\n                parent[find(a)] = find(b)\n                w, used = c, 1\n            for i in order:\n                if i == skip: continue\n                a, b, c = edges[i]\n                ra, rb = find(a), find(b)\n                if ra != rb:\n                    parent[ra] = rb\n                    w += c\n                    used += 1\n            return w if used == n - 1 else float('inf')\n        base = mst()\n        crit, pseudo = [], []\n        for i in range(len(edges)):\n            if mst(skip=i) > base: crit.append(i)\n            elif mst(force=i) == base: pseudo.append(i)\n        return [crit, pseudo]",
   "time": "O(E²α)",
   "space": "O(E)",
   "explain": "Compute the MST weight W. For each edge: Kruskal without it — if the weight rises (or the graph disconnects) it is critical. Otherwise Kruskal with it forced in — if the weight is still W it is pseudo-critical.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Enumerate every minimum spanning tree",
   "tag": "Brute force",
   "code": "class Solution:\n    def findCriticalAndPseudoCriticalEdges(self, n, edges):\n        best, trees = float('inf'), []\n        for combo in combinations(range(len(edges)), n - 1):\n            parent = list(range(n))\n            def find(x):\n                while parent[x] != x:\n                    parent[x] = parent[parent[x]]\n                    x = parent[x]\n                return x\n            ok = True\n            for i in combo:\n                ra, rb = find(edges[i][0]), find(edges[i][1])\n                if ra == rb:\n                    ok = False\n                    break\n                parent[ra] = rb\n            if not ok: continue\n            w = sum(edges[i][2] for i in combo)\n            if w < best: best, trees = w, [set(combo)]\n            elif w == best: trees.append(set(combo))\n        allin = set.intersection(*trees)\n        anyin = set.union(*trees)\n        return [sorted(allin), sorted(anyin - allin)]",
   "time": "O(C(E,n−1)·n)",
   "space": "O(E)",
   "explain": "For small graphs list all spanning trees of minimum weight: edges in all of them are critical, in some of them pseudo-critical.",
   "frames": [],
   "alt": true
  }
 ]
};
