window.PROBLEM = {
 "id": "3650",
 "title": "Minimum Cost Path with Edge Reversals",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
