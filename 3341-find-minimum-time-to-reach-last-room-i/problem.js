window.PROBLEM = {
 "id": "3341",
 "title": "Find Minimum Time to Reach Last Room I",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A grid of rooms; moveTime[i][j] is the earliest second you may start entering room (i, j). A move to a neighbouring room takes 1 second. Find the earliest arrival at the bottom-right room.",
 "idea": "Dijkstra over rooms: the arrival time in a neighbour is max(current time, its moveTime) + 1.",
 "input": "[[0,4],[4,4]]",
 "output": "6",
 "notes": [],
 "best": "Dijkstra over rooms: the arrival time in a neighbour is max(current time, its moveTime) + 1.",
 "variants": [
  {
   "name": "Dijkstra with waiting",
   "code": "class Solution:\n    def minTimeToReach(self, moveTime):\n        m, n = len(moveTime), len(moveTime[0])\n        dist = [[float('inf')] * n for _ in range(m)]\n        dist[0][0] = 0\n        heap = [(0, 0, 0)]\n        while heap:\n            t, i, j = heappop(heap)\n            if t > dist[i][j]: continue\n            if (i, j) == (m - 1, n - 1): return t\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n:\n                    nt = max(t, moveTime[a][b]) + 1\n                    if nt < dist[a][b]:\n                        dist[a][b] = nt\n                        heappush(heap, (nt, a, b))",
   "time": "O(mn log mn)",
   "space": "O(mn)",
   "explain": "Dijkstra over rooms: the arrival time in a neighbour is max(current time, its moveTime) + 1.",
   "frames": []
  }
 ]
};
