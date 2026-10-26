window.PROBLEM = {
 "id": "3123",
 "title": "Find Edges in Shortest Paths",
 "level": "Hard",
 "topic": "Graph",
 "question": "A weighted undirected graph has nodes 0…n−1. An edge is 'on a shortest path' if it belongs to at least one shortest path from node 0 to node n−1. Return a list with True or False for each edge, in the given order (all False if n−1 is unreachable). Example: n=4, edges [[2,0,1],[0,1,1],[0,3,4],[3,2,2]] → [True,False,False,True].",
 "why": "For every road, say whether it lies on at least one shortest route from node 0 to node n−1.",
 "idea": "Compute shortest distances from node 0 and from node n−1. A road (u, v, w) is on a shortest route if dist0[u] + w + distEnd[v] equals the shortest total (in either direction).",
 "input": "n=6 with 8 roads",
 "output": "[true,true,true,false,true,true,true,false]",
 "notes": [],
 "best": "Compute shortest distances from node 0 and from node n−1. A road (u, v, w) is on a shortest route if dist0[u] + w + distEnd[v] equals the shortest total (in either direction).",
 "variants": [
  {
   "name": "Dijkstra from both ends",
   "code": "class Solution:\n    def findAnswer(self, n, edges):\n        g = defaultdict(list)\n        for u, v, w in edges:\n            g[u].append((v, w))\n            g[v].append((u, w))\n        def dijkstra(src):\n            dist = [float('inf')] * n\n            dist[src] = 0\n            pq = [(0, src)]\n            while pq:\n                d, u = heappop(pq)\n                if d > dist[u]: continue\n                for v, w in g[u]:\n                    if d + w < dist[v]:\n                        dist[v] = d + w\n                        heappush(pq, (d + w, v))\n            return dist\n        d0, d1 = dijkstra(0), dijkstra(n - 1)\n        total = d0[n - 1]\n        if total == float('inf'): return [False] * len(edges)\n        return [d0[u] + w + d1[v] == total or d0[v] + w + d1[u] == total for u, v, w in edges]",
   "time": "O(E log V)",
   "space": "O(V + E)",
   "explain": "Compute shortest distances from node 0 and from node n−1. A road (u, v, w) is on a shortest route if dist0[u] + w + distEnd[v] equals the shortest total (in either direction).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Floyd–Warshall",
   "tag": "Alternative",
   "code": "class Solution:\n    def findAnswer(self, n, edges):\n        INF = float('inf')\n        d = [[INF] * n for _ in range(n)]\n        for i in range(n): d[i][i] = 0\n        for u, v, w in edges:\n            d[u][v] = min(d[u][v], w)\n            d[v][u] = min(d[v][u], w)\n        for k in range(n):\n            for i in range(n):\n                for j in range(n):\n                    if d[i][k] + d[k][j] < d[i][j]: d[i][j] = d[i][k] + d[k][j]\n        total = d[0][n - 1]\n        if total == INF: return [False] * len(edges)\n        return [d[0][u] + w + d[v][n - 1] == total or d[0][v] + w + d[u][n - 1] == total for u, v, w in edges]",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "All-pairs distances (fine for small n), then test each edge.",
   "frames": [],
   "alt": true
  }
 ]
};
