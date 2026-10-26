window.PROBLEM = {
 "id": "261",
 "title": "Graph Valid Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Do these edges connect all n nodes into a tree (connected, no loops)?",
 "idea": "A tree on n nodes has exactly n−1 edges. If the count is right, joining nodes with union-find must never join two nodes that are already together (that would be a cycle).",
 "input": "n=5, edges [[0,1],[0,2],[0,3],[1,4]]",
 "output": "True",
 "notes": [],
 "best": "A tree on n nodes has exactly n−1 edges. If the count is right, joining nodes with union-find must never join two nodes that are already together (that would be a cycle).",
 "variants": [
  {
   "name": "Union-find: no cycle, n−1 edges",
   "code": "class Solution:\n    def validTree(self, n, edges):\n        if len(edges) != n - 1: return False\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for a, b in edges:\n            ra, rb = find(a), find(b)\n            if ra == rb: return False\n            parent[ra] = rb\n        return True",
   "time": "O(n·α)",
   "space": "O(n)",
   "explain": "A tree on n nodes has exactly n−1 edges. If the count is right, joining nodes with union-find must never join two nodes that are already together (that would be a cycle).",
   "frames": []
  }
 ]
};
