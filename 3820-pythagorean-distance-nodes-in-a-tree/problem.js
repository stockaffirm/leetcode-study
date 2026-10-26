window.PROBLEM = {
 "id": "3820",
 "title": "Pythagorean Distance Nodes in a Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "A tree has n nodes and three distinct target nodes x, y, z. A node u is special if its distances dx, dy, dz to the three targets, sorted as a ≤ b ≤ c, satisfy a² + b² = c². Return the number of special nodes. Example: star with centre 0 and leaves 1,2,3, targets 1,2,3 → 3.",
 "why": "Star with centre 0 and targets 1, 2, 3: node 1 sees distances (0, 2, 2) and 0² + 2² = 2² → special; same for 2 and 3 → 3.",
 "idea": "Run a BFS (Breadth-First Search) from each of the three target nodes to get the distance of every node to x, y and z. For a node sort its three distances (a ≤ b ≤ c) and check a² + b² = c².",
 "input": "n = 4, edges = [[0,1],[0,2],[0,3]], x = 1, y = 2, z = 3",
 "output": "3",
 "notes": [],
 "best": "Run a BFS (Breadth-First Search) from each of the three target nodes to get the distance of every node to x, y and z. For a node sort its three distances (a ≤ b ≤ c) and check a² + b² = c².",
 "variants": [
  {
   "name": "BFS from x, y and z, test each node",
   "code": "class Solution:\n    def specialNodes(self, n, edges, x, y, z):\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        def bfs(s):\n            d = [-1] * n\n            d[s] = 0\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if d[v] < 0:\n                        d[v] = d[u] + 1\n                        q.append(v)\n            return d\n        dx, dy, dz = bfs(x), bfs(y), bfs(z)\n        res = 0\n        for i in range(n):\n            a, b, c = sorted((dx[i], dy[i], dz[i]))\n            if a * a + b * b == c * c:\n                res += 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Run a BFS (Breadth-First Search) from each of the three target nodes to get the distance of every node to x, y and z. For a node sort its three distances (a ≤ b ≤ c) and check a² + b² = c².",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS for the distances",
   "tag": "Alternative",
   "code": "class Solution:\n    def specialNodes(self, n, edges, x, y, z):\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        def dist(s):\n            d = [-1] * n\n            d[s] = 0\n            st = [s]\n            while st:\n                u = st.pop()\n                for v in g[u]:\n                    if d[v] < 0:\n                        d[v] = d[u] + 1\n                        st.append(v)\n            return d\n        D = [dist(x), dist(y), dist(z)]\n        res = 0\n        for i in range(n):\n            t = sorted(d[i] for d in D)\n            res += t[0] ** 2 + t[1] ** 2 == t[2] ** 2\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Same test, distances computed with an iterative DFS (Depth-First Search).",
   "frames": [],
   "alt": true
  }
 ]
};
