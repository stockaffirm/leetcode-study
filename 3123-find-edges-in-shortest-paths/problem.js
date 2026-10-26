window.PROBLEM = {
 "id": "3123",
 "title": "Find Edges in Shortest Paths",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
