window.PROBLEM = {
 "id": "1334",
 "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
