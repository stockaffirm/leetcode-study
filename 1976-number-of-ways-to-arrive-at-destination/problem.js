window.PROBLEM = {
 "id": "1976",
 "title": "Number of Ways to Arrive at Destination",
 "level": "Medium",
 "topic": "Graph",
 "question": "A city has n intersections joined by two-way roads with travel times. Return the number of different ways to travel from node 0 to node n−1 in the SHORTEST possible time, modulo 1,000,000,007. Example: n=7, roads [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]] → 4.",
 "why": "There are 4 different shortest routes (7 minutes) from 0 to 6 in the example graph.",
 "idea": "Run Dijkstra and keep for every node the number of shortest paths found so far. When a strictly shorter way to a node appears, copy the count of its predecessor; when an equally short way appears, add the counts (modulo 10⁹+7).",
 "input": "n=7, roads=[[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]",
 "output": "4",
 "notes": [],
 "best": "Run Dijkstra and keep for every node the number of shortest paths found so far. When a strictly shorter way to a node appears, copy the count of its predecessor; when an equally short way appears, add the counts (modulo 10⁹+7).",
 "variants": [
  {
   "name": "Dijkstra that counts shortest paths",
   "code": "class Solution:\n    def countPaths(self, n, roads):\n        MOD = 10 ** 9 + 7\n        g = defaultdict(list)\n        for u, v, w in roads:\n            g[u].append((v, w))\n            g[v].append((u, w))\n        dist = [inf] * n\n        ways = [0] * n\n        dist[0], ways[0] = 0, 1\n        h = [(0, 0)]\n        while h:\n            d, u = heappop(h)\n            if d > dist[u]:\n                continue\n            for v, w in g[u]:\n                nd = d + w\n                if nd < dist[v]:\n                    dist[v] = nd\n                    ways[v] = ways[u]\n                    heappush(h, (nd, v))\n                elif nd == dist[v]:\n                    ways[v] = (ways[v] + ways[u]) % MOD\n        return ways[n - 1] % MOD",
   "time": "O(E log n)",
   "space": "O(n + E)",
   "explain": "Run Dijkstra and keep for every node the number of shortest paths found so far. When a strictly shorter way to a node appears, copy the count of its predecessor; when an equally short way appears, add the counts (modulo 10⁹+7).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dijkstra, then count along tight edges",
   "tag": "Alternative",
   "code": "class Solution:\n    def countPaths(self, n, roads):\n        MOD = 10 ** 9 + 7\n        g = defaultdict(list)\n        for u, v, w in roads:\n            g[u].append((v, w))\n            g[v].append((u, w))\n        dist = [inf] * n\n        dist[0] = 0\n        h = [(0, 0)]\n        while h:\n            d, u = heappop(h)\n            if d > dist[u]:\n                continue\n            for v, w in g[u]:\n                if d + w < dist[v]:\n                    dist[v] = d + w\n                    heappush(h, (d + w, v))\n        ways = [0] * n\n        ways[0] = 1\n        for u in sorted(range(n), key=lambda x: dist[x]):\n            for v, w in g[u]:\n                if dist[u] + w == dist[v]:\n                    ways[v] = (ways[v] + ways[u]) % MOD\n        return ways[n - 1]",
   "time": "O(E log n)",
   "space": "O(n + E)",
   "explain": "First compute all shortest distances; then visit nodes in order of distance and add the ways along every edge that lies on a shortest path.",
   "frames": [],
   "alt": true
  }
 ]
};
