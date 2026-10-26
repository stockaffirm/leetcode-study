window.PROBLEM = {
 "id": "1245",
 "title": "Tree Diameter",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Star with centre 0 and leaves 1, 2: the longest path 1-0-2 has 2 edges.",
 "idea": "BFS (Breadth-First Search) from any node reaches the farthest node A; that A is one end of a longest path. BFS from A: the largest distance found is the diameter.",
 "input": "edges = [[0,1],[0,2]]",
 "output": "2",
 "notes": [],
 "best": "BFS (Breadth-First Search) from any node reaches the farthest node A; that A is one end of a longest path. BFS from A: the largest distance found is the diameter.",
 "variants": [
  {
   "name": "Two BFS runs find the longest path",
   "code": "class Solution:\n    def treeDiameter(self, edges):\n        n = len(edges) + 1\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        def bfs(s):\n            d = [-1] * n\n            d[s] = 0\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if d[v] < 0:\n                        d[v] = d[u] + 1\n                        q.append(v)\n            far = d.index(max(d))\n            return far, d[far]\n        a, _ = bfs(0)\n        return bfs(a)[1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "BFS (Breadth-First Search) from any node reaches the farthest node A; that A is one end of a longest path. BFS from A: the largest distance found is the diameter.",
   "frames": []
  }
 ]
};
