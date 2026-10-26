window.PROBLEM = {
 "id": "2204",
 "title": "Distance to a Cycle in Undirected Graph",
 "level": "Hard",
 "topic": "Graph",
 "question": "A connected undirected graph with n nodes has exactly one cycle. Return, for every node, the minimum number of edges to reach any node on the cycle (0 for cycle nodes). Example: n=7, edges [[1,2],[2,4],[4,3],[3,1],[0,1],[5,2],[6,5]] → [1,0,0,0,0,1,2].",
 "why": "Cycle 1-2-4-3 with branches 0 (off 1) and 5-6 (off 2): distances [1,0,0,0,0,1,2].",
 "idea": "The graph is connected with exactly one cycle. Repeatedly remove nodes of degree 1 (like topological sort); the nodes that never get removed are the cycle. Then run a multi-source BFS (Breadth-First Search) from all cycle nodes to get every node's distance.",
 "input": "n = 7, edges = [[1,2],[2,4],[4,3],[3,1],[0,1],[5,2],[6,5]]",
 "output": "[1, 0, 0, 0, 0, 1, 2]",
 "notes": [],
 "best": "The graph is connected with exactly one cycle. Repeatedly remove nodes of degree 1 (like topological sort); the nodes that never get removed are the cycle. Then run a multi-source BFS (Breadth-First Search) from all cycle nodes to get every node's distance.",
 "variants": [
  {
   "name": "Peel leaves to find the cycle, then BFS",
   "code": "class Solution:\n    def distanceToCycle(self, n, edges):\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        deg = [len(x) for x in g]\n        q = deque(i for i in range(n) if deg[i] == 1)\n        peeled = [False] * n\n        while q:\n            u = q.popleft()\n            peeled[u] = True\n            for v in g[u]:\n                deg[v] -= 1\n                if deg[v] == 1:\n                    q.append(v)\n        dist = [-1] * n\n        q = deque()\n        for i in range(n):\n            if not peeled[i]:\n                dist[i] = 0\n                q.append(i)\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                if dist[v] < 0:\n                    dist[v] = dist[u] + 1\n                    q.append(v)\n        return dist",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The graph is connected with exactly one cycle. Repeatedly remove nodes of degree 1 (like topological sort); the nodes that never get removed are the cycle. Then run a multi-source BFS (Breadth-First Search) from all cycle nodes to get every node's distance.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Find the cycle with DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def distanceToCycle(self, n, edges):\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        parent = [-1] * n\n        seen = [False] * n\n        cycle = []\n        stack = [(0, -1)]\n        while stack and not cycle:\n            u, p = stack.pop()\n            if seen[u]:\n                continue\n            seen[u] = True\n            parent[u] = p\n            for v in g[u]:\n                if v == p:\n                    continue\n                if seen[v]:\n                    x = u\n                    while x != v:\n                        cycle.append(x)\n                        x = parent[x]\n                    cycle.append(v)\n                    break\n                stack.append((v, u))\n        dist = [-1] * n\n        q = deque(cycle)\n        for c in cycle:\n            dist[c] = 0\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                if dist[v] < 0:\n                    dist[v] = dist[u] + 1\n                    q.append(v)\n        return dist",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "DFS (Depth-First Search) with parent tracking finds the back edge that closes the cycle; walk the parent chain to collect the cycle, then BFS (Breadth-First Search) outwards.",
   "frames": [],
   "alt": true
  }
 ]
};
