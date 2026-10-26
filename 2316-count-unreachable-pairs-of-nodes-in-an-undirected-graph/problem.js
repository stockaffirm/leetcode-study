window.PROBLEM = {
 "id": "2316",
 "title": "Count Unreachable Pairs of Nodes in an Undirected Graph",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "An undirected graph has n nodes. Return the number of pairs of nodes that cannot reach each other. Example: n=7, edges [[0,2],[0,5],[2,4],[1,6],[5,4]] → 14.",
 "why": "7 nodes split into components of sizes 3, 2, 2 → pairs across components = 14.",
 "idea": "Two nodes are unreachable from each other when they are in different components. With component sizes s₁, s₂ …, the number of such pairs is the sum over components of s × (nodes not in earlier components). Find components with Union-Find.",
 "input": "n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]",
 "output": "14",
 "notes": [],
 "best": "Two nodes are unreachable from each other when they are in different components. With component sizes s₁, s₂ …, the number of such pairs is the sum over components of s × (nodes not in earlier components). Find components with Union-Find.",
 "variants": [
  {
   "name": "Component sizes",
   "code": "class Solution:\n    def countPairs(self, n, edges):\n        p = list(range(n))\n        def find(x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        for a, b in edges:\n            p[find(a)] = find(b)\n        sizes = Counter(find(i) for i in range(n))\n        res = 0\n        rest = n\n        for s in sizes.values():\n            rest -= s\n            res += s * rest\n        return res",
   "time": "O(n + e)",
   "space": "O(n)",
   "explain": "Two nodes are unreachable from each other when they are in different components. With component sizes s₁, s₂ …, the number of such pairs is the sum over components of s × (nodes not in earlier components). Find components with Union-Find.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS components",
   "tag": "Alternative",
   "code": "class Solution:\n    def countPairs(self, n, edges):\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        seen = [False] * n\n        sizes = []\n        for s in range(n):\n            if not seen[s]:\n                seen[s] = True\n                st = [s]\n                c = 0\n                while st:\n                    u = st.pop()\n                    c += 1\n                    for v in g[u]:\n                        if not seen[v]:\n                            seen[v] = True\n                            st.append(v)\n                sizes.append(c)\n        total = n * (n - 1) // 2\n        return total - sum(s * (s - 1) // 2 for s in sizes)",
   "time": "O(n + e)",
   "space": "O(n + e)",
   "explain": "Find component sizes with DFS (Depth-First Search) and count cross-component pairs.",
   "frames": [],
   "alt": true
  }
 ]
};
