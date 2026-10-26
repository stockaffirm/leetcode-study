window.PROBLEM = {
 "id": "1443",
 "title": "Minimum Time to Collect All Apples in a Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
