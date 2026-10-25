window.PROBLEM = {
 "id": "2714",
 "title": "Find Shortest Path with K Hops",
 "level": "Hard",
 "topic": "Graph",
 "question": "An undirected weighted graph; you may 'hop' over up to k edges, treating each hopped edge as cost 0. Return the minimum cost of a path from s to d. Example: n=4, edges [[0,1,4],[0,2,2],[2,3,6]], s=1, d=3, k=2 → 2.",
 "why": "Path 1 → 0 → 2 → 3 with the 4-edge and the 6-edge hopped (cost 0) leaves just the 2-edge → 2.",
 "idea": "A hop makes one edge cost 0, at most k times. Run Dijkstra on states (node, hops used): from a state you can pay the edge weight, or if hops remain use a hop and pay 0. The answer is the cheapest distance to the destination over all hop counts.",
 "input": "n = 4, edges = [[0,1,4],[0,2,2],[2,3,6]], s = 1, d = 3, k = 2",
 "output": "2",
 "notes": [],
 "best": "A hop makes one edge cost 0, at most k times. Run Dijkstra on states (node, hops used): from a state you can pay the edge weight, or if hops remain use a hop and pay 0. The answer is the cheapest distance to the destination over all hop counts.",
 "variants": [
  {
   "name": "Dijkstra on (node, hops used)",
   "code": "class Solution:\n    def shortestPathWithHops(self, n, edges, s, d, k):\n        g = [[] for _ in range(n)]\n        for a, b, w in edges:\n            g[a].append((b, w))\n            g[b].append((a, w))\n        INF = float('inf')\n        dist = [[INF] * (k + 1) for _ in range(n)]\n        dist[s][0] = 0\n        pq = [(0, s, 0)]\n        while pq:\n            c, u, h = heappop(pq)\n            if c > dist[u][h]:\n                continue\n            for v, w in g[u]:\n                if c + w < dist[v][h]:\n                    dist[v][h] = c + w\n                    heappush(pq, (c + w, v, h))\n                if h < k and c < dist[v][h + 1]:\n                    dist[v][h + 1] = c\n                    heappush(pq, (c, v, h + 1))\n        return min(dist[d])",
   "time": "O((n·k)·log(n·k))",
   "space": "O(n·k)",
   "explain": "A hop makes one edge cost 0, at most k times. Run Dijkstra on states (node, hops used): from a state you can pay the edge weight, or if hops remain use a hop and pay 0. The answer is the cheapest distance to the destination over all hop counts.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Layered Dijkstra with hop cost",
   "tag": "Alternative",
   "code": "class Solution:\n    def shortestPathWithHops(self, n, edges, s, d, k):\n        adj = defaultdict(list)\n        for a, b, w in edges:\n            adj[a].append((b, w))\n            adj[b].append((a, w))\n        best = {}\n        pq = [(0, s, 0)]\n        while pq:\n            c, u, h = heappop(pq)\n            if (u, h) in best:\n                continue\n            best[(u, h)] = c\n            if u == d:\n                return c\n            for v, w in adj[u]:\n                heappush(pq, (c + w, v, h))\n                if h < k:\n                    heappush(pq, (c, v, h + 1))\n        return -1",
   "time": "O(n·k log)",
   "space": "O(n·k)",
   "explain": "Treat a hop as an extra edge of cost 0 between layers h and h + 1.",
   "frames": [],
   "alt": true
  }
 ]
};
