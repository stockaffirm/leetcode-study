window.PROBLEM = {
 "id": "2192",
 "title": "All Ancestors of a Node in a Directed Acyclic Graph",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Edges 0→3, 1→3, 3→5: node 5's ancestors are 0, 1, 3 → [0,1,3].",
 "idea": "Process nodes in topological order (Kahn). When u is processed, every child v inherits u and all of u's ancestors. Sort each node's set at the end.",
 "input": "n = 8, edges = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]",
 "output": "[[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]]",
 "notes": [],
 "best": "Process nodes in topological order (Kahn). When u is processed, every child v inherits u and all of u's ancestors. Sort each node's set at the end.",
 "variants": [
  {
   "name": "Topological order, push ancestor sets down",
   "code": "class Solution:\n    def getAncestors(self, n, edges):\n        g = [[] for _ in range(n)]\n        indeg = [0] * n\n        for a, b in edges:\n            g[a].append(b)\n            indeg[b] += 1\n        anc = [set() for _ in range(n)]\n        q = deque(i for i in range(n) if indeg[i] == 0)\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                anc[v] |= anc[u]\n                anc[v].add(u)\n                indeg[v] -= 1\n                if indeg[v] == 0:\n                    q.append(v)\n        return [sorted(s) for s in anc]",
   "time": "O(n·(n + e))",
   "space": "O(n²)",
   "explain": "Process nodes in topological order (Kahn). When u is processed, every child v inherits u and all of u's ancestors. Sort each node's set at the end.",
   "frames": []
  }
 ]
};
