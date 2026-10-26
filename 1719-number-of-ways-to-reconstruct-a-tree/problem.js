window.PROBLEM = {
 "id": "1719",
 "title": "Number of Ways to Reconstruct a Tree",
 "level": "Hard",
 "topic": "Graph",
 "question": "A set of pairs [x, y] lists exactly the pairs of nodes where one is an ancestor of the other in some rooted tree with distinct node values. Return 0 if no such tree exists, 1 if exactly one tree is possible, and 2 if more than one is. Example: [[1,2],[2,3]] → 1; [[1,2],[2,3],[1,3]] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Enumerate every rooted tree",
   "tag": "Brute force",
   "code": "class Solution:\n    def checkWays(self, pairs):\n        nodes = sorted({x for p in pairs for x in p})\n        want = {frozenset(p) for p in pairs}\n        count = 0\n        for root in nodes:\n            others = [v for v in nodes if v != root]\n            for choice in product(nodes, repeat=len(others)):\n                par = dict(zip(others, choice))\n                if any(par[v] == v for v in others): continue\n                got, ok = set(), True\n                for v in others:\n                    u, steps = v, 0\n                    while u != root and steps <= len(nodes):\n                        u = par[u]\n                        got.add(frozenset((v, u)))\n                        steps += 1\n                    if u != root:\n                        ok = False\n                        break\n                if ok and got == want: count += 1\n        return min(count, 2)",
   "time": "O(n·(n−1)^(n−1))",
   "space": "O(n)",
   "explain": "For tiny inputs: try every root and parent choice, keep trees whose ancestor pairs equal the given pairs.",
   "frames": [],
   "alt": true
  }
 ]
};
