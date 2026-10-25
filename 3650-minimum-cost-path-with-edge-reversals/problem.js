window.PROBLEM = {
 "id": "3650",
 "title": "Minimum Cost Path with Edge Reversals",
 "level": "Medium",
 "topic": "Graph",
 "question": "A directed weighted graph has nodes 0 … n−1. Each node has a switch that may be used once: when you arrive at it you can turn one incoming edge around and use it immediately at DOUBLE its weight. Return the minimum cost to go from node 0 to node n−1, or −1. Example: n=4, edges [[0,1,3],[3,1,1],[2,3,4],[0,2,2]] → 5.",
 "why": "0→1 costs 3. At node 1 the edge 3→1 can be reversed to 1→3 for twice its weight (2): total 5.",
 "idea": "Using a switch to reverse an incoming edge is the same as being allowed to walk any edge backwards at double cost. So add, for every edge u→v of weight w, an extra edge v→u of weight 2w and run Dijkstra from 0 to n − 1.",
 "input": "n=4, edges=[[0,1,3],[3,1,1],[2,3,4],[0,2,2]]",
 "output": "5",
 "notes": [],
 "best": "Using a switch to reverse an incoming edge is the same as being allowed to walk any edge backwards at double cost. So add, for every edge u→v of weight w, an extra edge v→u of weight 2w and run Dijkstra from 0 to n − 1.",
 "variants": [
  {
   "name": "Dijkstra with extra reversed edges",
   "code": "class Solution:\n    def minCost(self, n, edges):\n        g = defaultdict(list)\n        for u, v, w in edges:\n            g[u].append((v, w))\n            g[v].append((u, 2 * w))\n        dist = [inf] * n\n        dist[0] = 0\n        h = [(0, 0)]\n        while h:\n            d, u = heappop(h)\n            if d > dist[u]:\n                continue\n            if u == n - 1:\n                return d\n            for v, w in g[u]:\n                if d + w < dist[v]:\n                    dist[v] = d + w\n                    heappush(h, (d + w, v))\n        return -1",
   "time": "O(E log E)",
   "space": "O(n + E)",
   "explain": "Using a switch to reverse an incoming edge is the same as being allowed to walk any edge backwards at double cost. So add, for every edge u→v of weight w, an extra edge v→u of weight 2w and run Dijkstra from 0 to n − 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bellman-Ford",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, n, edges):\n        dist = [inf] * n\n        dist[0] = 0\n        for _ in range(n):\n            changed = False\n            for u, v, w in edges:\n                if dist[u] + w < dist[v]:\n                    dist[v] = dist[u] + w\n                    changed = True\n                if dist[v] + 2 * w < dist[u]:\n                    dist[u] = dist[v] + 2 * w\n                    changed = True\n            if not changed:\n                break\n        return -1 if dist[n - 1] == inf else dist[n - 1]",
   "time": "O(n · E)",
   "space": "O(n)",
   "explain": "Relax every edge forward (cost w) and backward (cost 2w) until nothing improves.",
   "frames": [],
   "alt": true
  }
 ]
};
