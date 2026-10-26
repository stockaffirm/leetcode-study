window.PROBLEM = {
 "id": "1334",
 "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
 "level": "Medium",
 "topic": "Graph",
 "question": "n cities are joined by weighted two-way roads. For each city count how many OTHER cities can be reached with total distance at most distanceThreshold (by the shortest road path). Return the city with the fewest such cities; if several, the one with the greatest number. Example: n=4, edges [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], threshold 4 → 3.",
 "why": "Cities joined by weighted roads. For each city count the cities reachable within a distance threshold; return the city with the fewest (the largest number on ties).",
 "idea": "Compute all shortest distances with Floyd–Warshall, count neighbours within the threshold for each city, and choose the best.",
 "input": "n=4, edges [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], threshold 4",
 "output": "3",
 "notes": [],
 "best": "Compute all shortest distances with Floyd–Warshall, count neighbours within the threshold for each city, and choose the best.",
 "variants": [
  {
   "name": "Floyd–Warshall",
   "code": "class Solution:\n    def findTheCity(self, n, edges, distanceThreshold):\n        INF = float('inf')\n        d = [[INF] * n for _ in range(n)]\n        for i in range(n): d[i][i] = 0\n        for u, v, w in edges:\n            d[u][v] = d[v][u] = w\n        for k in range(n):\n            for i in range(n):\n                for j in range(n):\n                    if d[i][k] + d[k][j] < d[i][j]: d[i][j] = d[i][k] + d[k][j]\n        best, city = n + 1, -1\n        for i in range(n):\n            c = sum(1 for j in range(n) if j != i and d[i][j] <= distanceThreshold)\n            if c <= best: best, city = c, i\n        return city",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "Compute all shortest distances with Floyd–Warshall, count neighbours within the threshold for each city, and choose the best.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dijkstra from every city",
   "tag": "Alternative",
   "code": "class Solution:\n    def findTheCity(self, n, edges, distanceThreshold):\n        g = defaultdict(list)\n        for u, v, w in edges:\n            g[u].append((v, w))\n            g[v].append((u, w))\n        best, city = n + 1, -1\n        for s in range(n):\n            dist = {s: 0}\n            heap = [(0, s)]\n            while heap:\n                d, u = heappop(heap)\n                if d > dist[u]: continue\n                for v, w in g[u]:\n                    if d + w < dist.get(v, float('inf')):\n                        dist[v] = d + w\n                        heappush(heap, (d + w, v))\n            c = sum(1 for v, d in dist.items() if v != s and d <= distanceThreshold)\n            if c <= best: best, city = c, s\n        return city",
   "time": "O(n·E log n)",
   "space": "O(n + E)",
   "explain": "Run Dijkstra from each city and count the cities within the threshold.",
   "frames": [],
   "alt": true
  }
 ]
};
