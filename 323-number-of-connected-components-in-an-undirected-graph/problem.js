window.PROBLEM = {
 "id": "323",
 "title": "Number of Connected Components in an Undirected Graph",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "There are n nodes and some undirected edges. How many separate groups of connected nodes are there?",
 "idea": "Start with n groups. Every edge that joins two different groups merges them and lowers the count by one.",
 "input": "n=5, edges [[0,1],[1,2],[3,4]]",
 "output": "2",
 "notes": [],
 "best": "Start with n groups. Every edge that joins two different groups merges them and lowers the count by one.",
 "variants": [
  {
   "name": "Union-Find",
   "code": "class Solution:\n    def countComponents(self, n, edges):\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        groups = n\n        for a, b in edges:\n            ra, rb = find(a), find(b)\n            if ra != rb:\n                parent[ra] = rb\n                groups -= 1\n        return groups",
   "time": "O(n + e·α)",
   "space": "O(n)",
   "explain": "Start with n groups. Every edge that joins two different groups merges them and lowers the count by one.",
   "frames": []
  }
 ]
};
