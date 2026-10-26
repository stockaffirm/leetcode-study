window.PROBLEM = {
 "id": "3559",
 "title": "Number of Ways to Assign Edge Weights II",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "Path with 2 edges: the weights must sum to an odd number → 2 ways (1,2 or 2,1).",
 "idea": "Every edge has weight 1 or 2; a path of d edges has an odd sum for exactly half of the 2^d assignments, i.e. 2^(d−1) (and 0 if d = 0). For each query find d = depth[u] + depth[v] − 2·depth[lca(u, v)] with binary lifting (a table of 2^j-th ancestors).",
 "input": "edges = [[1,2],[1,3],[3,4],[3,5]], queries = [[1,4],[3,4],[2,5]]",
 "output": "[2, 1, 4]",
 "notes": [],
 "best": "Every edge has weight 1 or 2; a path of d edges has an odd sum for exactly half of the 2^d assignments, i.e. 2^(d−1) (and 0 if d = 0). For each query find d = depth[u] + depth[v] − 2·depth[lca(u, v)] with binary lifting (a table of 2^j-th ancestors).",
 "variants": [
  {
   "name": "Path length via LCA, then 2^(d−1)",
   "code": "class Solution:\n    def assignEdgeWeights(self, edges, queries):\n        MOD = 10**9 + 7\n        n = len(edges) + 1\n        g = [[] for _ in range(n + 1)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        LOG = max(1, n.bit_length())\n        up = [[0] * (n + 1) for _ in range(LOG)]\n        depth = [0] * (n + 1)\n        seen = [False] * (n + 1)\n        seen[1] = True\n        q = deque([1])\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                if not seen[v]:\n                    seen[v] = True\n                    depth[v] = depth[u] + 1\n                    up[0][v] = u\n                    q.append(v)\n        for j in range(1, LOG):\n            for v in range(1, n + 1):\n                up[j][v] = up[j - 1][up[j - 1][v]]\n        def lca(a, b):\n            if depth[a] < depth[b]:\n                a, b = b, a\n            diff = depth[a] - depth[b]\n            for j in range(LOG):\n                if (diff >> j) & 1:\n                    a = up[j][a]\n            if a == b:\n                return a\n            for j in range(LOG - 1, -1, -1):\n                if up[j][a] != up[j][b]:\n                    a, b = up[j][a], up[j][b]\n            return up[0][a]\n        res = []\n        for u, v in queries:\n            d = depth[u] + depth[v] - 2 * depth[lca(u, v)]\n            res.append(pow(2, d - 1, MOD) if d else 0)\n        return res",
   "time": "O((n + q) log n)",
   "space": "O(n log n)",
   "explain": "Every edge has weight 1 or 2; a path of d edges has an odd sum for exactly half of the 2^d assignments, i.e. 2^(d−1) (and 0 if d = 0). For each query find d = depth[u] + depth[v] − 2·depth[lca(u, v)] with binary lifting (a table of 2^j-th ancestors).",
   "frames": []
  }
 ]
};
