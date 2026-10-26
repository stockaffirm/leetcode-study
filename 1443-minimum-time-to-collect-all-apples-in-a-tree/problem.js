window.PROBLEM = {
 "id": "1443",
 "title": "Minimum Time to Collect All Apples in a Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "A tree has n nodes; you start at node 0 and may walk along edges (1 second per step) and must come back to node 0. hasApple tells which nodes have an apple. Return the minimum time to collect all apples. Example: n=7, edges [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], apples at 2, 4, 5 → 8.",
 "why": "Apples at 2, 4 and 5. Every edge that leads to an apple is walked down and back (2 seconds): 0–1, 1–4, 1–5, 0–2 → 4 edges × 2 = 8.",
 "idea": "An edge is worth walking only if its lower side contains an apple. DFS from the root: a child's subtree costs (its own cost + 2) when it has an apple anywhere inside it.",
 "input": "n=7, edges=[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple=[F,F,T,F,T,T,F]",
 "output": "8",
 "notes": [],
 "best": "An edge is worth walking only if its lower side contains an apple. DFS from the root: a child's subtree costs (its own cost + 2) when it has an apple anywhere inside it.",
 "variants": [
  {
   "name": "DFS: 2 per useful edge",
   "code": "class Solution:\n    def minTime(self, n, edges, hasApple):\n        g = defaultdict(list)\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        def dfs(u, p):\n            t = 0\n            for v in g[u]:\n                if v != p:\n                    sub = dfs(v, u)\n                    if sub or hasApple[v]:\n                        t += sub + 2\n            return t\n        return dfs(0, -1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "An edge is worth walking only if its lower side contains an apple. DFS from the root: a child's subtree costs (its own cost + 2) when it has an apple anywhere inside it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Mark apple-carrying nodes bottom-up",
   "tag": "Alternative",
   "code": "class Solution:\n    def minTime(self, n, edges, hasApple):\n        g = defaultdict(list)\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        parent = {0: -1}\n        order = [0]\n        for u in order:\n            for v in g[u]:\n                if v not in parent:\n                    parent[v] = u\n                    order.append(v)\n        need = list(hasApple)\n        for u in reversed(order):\n            if need[u] and parent[u] != -1:\n                need[parent[u]] = True\n        return 2 * sum(1 for u in order if u and need[u])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find each node's parent, push 'needs a visit' from apples up to the root, then every marked non-root node costs 2.",
   "frames": [],
   "alt": true
  }
 ]
};
