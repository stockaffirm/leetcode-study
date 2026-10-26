window.PROBLEM = {
 "id": "310",
 "title": "Minimum Height Trees",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A star with centre 1 and leaves 0, 2, 3: the centre is the only minimum-height root → [1].",
 "idea": "The roots of minimum height trees are the centre(s) of the tree. Repeatedly remove all current leaves (degree 1) like peeling an onion; when at most two nodes remain, they are the answer.",
 "input": "n = 4, edges = [[1,0],[1,2],[1,3]]",
 "output": "[1]",
 "notes": [],
 "best": "The roots of minimum height trees are the centre(s) of the tree. Repeatedly remove all current leaves (degree 1) like peeling an onion; when at most two nodes remain, they are the answer.",
 "variants": [
  {
   "name": "Peel leaves until one or two nodes remain",
   "code": "class Solution:\n    def findMinHeightTrees(self, n, edges):\n        if n <= 2:\n            return list(range(n))\n        g = [set() for _ in range(n)]\n        for a, b in edges:\n            g[a].add(b)\n            g[b].add(a)\n        leaves = [i for i in range(n) if len(g[i]) == 1]\n        remaining = n\n        while remaining > 2:\n            remaining -= len(leaves)\n            nxt = []\n            for leaf in leaves:\n                nb = g[leaf].pop()\n                g[nb].discard(leaf)\n                if len(g[nb]) == 1:\n                    nxt.append(nb)\n            leaves = nxt\n        return sorted(leaves)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The roots of minimum height trees are the centre(s) of the tree. Repeatedly remove all current leaves (degree 1) like peeling an onion; when at most two nodes remain, they are the answer.",
   "frames": []
  }
 ]
};
