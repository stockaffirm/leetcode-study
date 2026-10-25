window.PROBLEM = {
 "id": "1168",
 "title": "Optimize Water Distribution in a Village",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "There are n houses. Water reaches a house either from a well built in it (wells[i−1] is the cost for house i) or through a pipe to a house that has water (pipes[j] = [house1, house2, cost]). Return the minimum total cost to supply water to every house. Example: n=3, wells [1,2,2], pipes [[1,2,1],[2,3,1]] → 3.",
 "why": "Every house needs water: either dig its own well (a cost per house) or connect it by pipe to a house that has water (pipe costs given). Minimise the total cost.",
 "idea": "Add a virtual node 0 and an edge 0–i with the well cost of house i. Now we need the cheapest way to connect all nodes: a minimum spanning tree (Kruskal with union-find).",
 "input": "wells [1,2,2], pipes [[1,2,1],[2,3,1]]",
 "output": "3",
 "notes": [],
 "best": "Add a virtual node 0 and an edge 0–i with the well cost of house i. Now we need the cheapest way to connect all nodes: a minimum spanning tree (Kruskal with union-find).",
 "variants": [
  {
   "name": "Minimum spanning tree with a virtual well node",
   "code": "class Solution:\n    def minCostToSupplyWater(self, n, wells, pipes):\n        edges = [(c, 0, i + 1) for i, c in enumerate(wells)] + [(c, a, b) for a, b, c in pipes]\n        edges.sort()\n        parent = list(range(n + 1))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        total = 0\n        for c, a, b in edges:\n            ra, rb = find(a), find(b)\n            if ra != rb:\n                parent[ra] = rb\n                total += c\n        return total",
   "time": "O(E log E)",
   "space": "O(n)",
   "explain": "Add a virtual node 0 and an edge 0–i with the well cost of house i. Now we need the cheapest way to connect all nodes: a minimum spanning tree (Kruskal with union-find).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prim's algorithm",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCostToSupplyWater(self, n, wells, pipes):\n        g = defaultdict(list)\n        for i, c in enumerate(wells):\n            g[0].append((c, i + 1))\n            g[i + 1].append((c, 0))\n        for a, b, c in pipes:\n            g[a].append((c, b))\n            g[b].append((c, a))\n        seen, heap, total = set(), [(0, 0)], 0\n        while heap and len(seen) < n + 1:\n            c, u = heappop(heap)\n            if u in seen: continue\n            seen.add(u)\n            total += c\n            for nc, v in g[u]:\n                if v not in seen: heappush(heap, (nc, v))\n        return total",
   "time": "O(E log V)",
   "space": "O(V + E)",
   "explain": "Grow the network from the virtual node 0 with a heap of cheapest connections.",
   "frames": [],
   "alt": true
  }
 ]
};
