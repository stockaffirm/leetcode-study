window.PROBLEM = {
 "id": "1719",
 "title": "Number of Ways to Reconstruct a Tree",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "A set of pairs says 'x is an ancestor of y or the other way round'. Count the rooted trees consistent with exactly these pairs: 0, 1 or 2 (meaning multiple).",
 "idea": "The root must be paired with every node. For every other node its parent is the neighbour with the smallest degree that is still ≥ its own; its neighbours must all be that parent's neighbours too, otherwise no tree exists. If a parent has exactly the same degree as the child, either could be on top: multiple ways.",
 "input": "pairs [[1,2],[2,3],[1,3]]",
 "output": "2",
 "notes": [],
 "best": "The root must be paired with every node. For every other node its parent is the neighbour with the smallest degree that is still ≥ its own; its neighbours must all be that parent's neighbours too, otherwise no tree exists. If a parent has exactly the same degree as the child, either could be on top: multiple ways.",
 "variants": [
  {
   "name": "Degrees decide the parent",
   "code": "class Solution:\n    def checkWays(self, pairs):\n        adj = defaultdict(set)\n        for x, y in pairs:\n            adj[x].add(y)\n            adj[y].add(x)\n        nodes = sorted(adj, key=lambda x: -len(adj[x]))\n        n = len(nodes)\n        if len(adj[nodes[0]]) != n - 1: return 0\n        res = 1\n        for node in nodes[1:]:\n            d = len(adj[node])\n            parent, pd = None, float('inf')\n            for nb in adj[node]:\n                if d <= len(adj[nb]) < pd: parent, pd = nb, len(adj[nb])\n            if parent is None: return 0\n            for nb in adj[node]:\n                if nb != parent and nb not in adj[parent]: return 0\n            if pd == d: res = 2\n        return res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "The root must be paired with every node. For every other node its parent is the neighbour with the smallest degree that is still ≥ its own; its neighbours must all be that parent's neighbours too, otherwise no tree exists. If a parent has exactly the same degree as the child, either could be on top: multiple ways.",
   "frames": []
  }
 ]
};
