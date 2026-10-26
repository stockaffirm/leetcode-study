window.PROBLEM = {
 "id": "3342",
 "title": "Find Minimum Time to Reach Last Room II",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Like the previous room problem, but moves alternate in cost: the first move takes 1 second, the second 2 seconds, then 1, 2, …",
 "idea": "After k moves you are on a cell with (row + col) ≡ k (mod 2), so the cost of leaving cell (i, j) is 1 if i + j is even and 2 if odd. Dijkstra again, with arrival = max(time, moveTime) + cost.",
 "input": "[[0,4],[4,4]]",
 "output": "7",
 "notes": [],
 "best": "After k moves you are on a cell with (row + col) ≡ k (mod 2), so the cost of leaving cell (i, j) is 1 if i + j is even and 2 if odd. Dijkstra again, with arrival = max(time, moveTime) + cost.",
 "variants": [
  {
   "name": "Dijkstra with alternating move costs",
   "code": "class Solution:\n    def minTimeToReach(self, moveTime):\n        m, n = len(moveTime), len(moveTime[0])\n        dist = [[float('inf')] * n for _ in range(m)]\n        dist[0][0] = 0\n        heap = [(0, 0, 0)]\n        while heap:\n            t, i, j = heappop(heap)\n            if t > dist[i][j]: continue\n            if (i, j) == (m - 1, n - 1): return t\n            cost = 1 if (i + j) % 2 == 0 else 2\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n:\n                    nt = max(t, moveTime[a][b]) + cost\n                    if nt < dist[a][b]:\n                        dist[a][b] = nt\n                        heappush(heap, (nt, a, b))",
   "time": "O(mn log mn)",
   "space": "O(mn)",
   "explain": "After k moves you are on a cell with (row + col) ≡ k (mod 2), so the cost of leaving cell (i, j) is 1 if i + j is even and 2 if odd. Dijkstra again, with arrival = max(time, moveTime) + cost.",
   "frames": []
  }
 ]
};
