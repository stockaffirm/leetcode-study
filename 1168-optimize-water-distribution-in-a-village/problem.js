window.PROBLEM = {
 "id": "1168",
 "title": "Optimize Water Distribution in a Village",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
