window.PROBLEM = {
 "id": "323",
 "title": "Number of Connected Components in an Undirected Graph",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "There are n nodes labelled 0…n−1 and a list of undirected edges. Return how many groups of connected nodes (connected components) the graph has. Example: n=5, edges [[0,1],[1,2],[3,4]] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS over components",
   "tag": "Alternative",
   "code": "class Solution:\n    def countComponents(self, n, edges):\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        seen = [False] * n\n        groups = 0\n        for s in range(n):\n            if seen[s]: continue\n            groups += 1\n            seen[s] = True\n            st = [s]\n            while st:\n                u = st.pop()\n                for v in g[u]:\n                    if not seen[v]:\n                        seen[v] = True\n                        st.append(v)\n        return groups",
   "time": "O(V + E)",
   "space": "O(V + E)",
   "explain": "Build the adjacency lists and start a search from every unvisited node.",
   "frames": [],
   "alt": true
  }
 ]
};
