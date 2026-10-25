window.PROBLEM = {
 "id": "2577",
 "title": "Minimum Time to Visit a Cell In a Grid",
 "level": "Hard",
 "topic": "Graph",
 "question": "You are given a grid grid[i][j] = the earliest second at which you may step INTO that cell. You start at the top-left at second 0 and must move to a neighbouring cell (up, down, left or right) every second — you cannot stand still, but you may move back and forth. Return the minimum time to reach the bottom-right cell, or −1 if it is impossible. Example: [[0,1,3,2],[5,1,2,5],[4,3,8,6]] → 7.",
 "why": "grid[i][j] is the earliest second you may enter that cell; you must move every second but can bounce back and forth. Earliest time to reach the bottom-right corner?",
 "idea": "Dijkstra on arrival time. Moving to a neighbour takes max(t+1, its opening time); if you have to wait, you can only wait an even number of seconds by bouncing, so add 1 when the parity is wrong. If both first moves are blocked, return −1.",
 "input": "[[0,1,3,2],[5,1,2,5],[4,3,8,6]]",
 "output": "7",
 "notes": [],
 "best": "Dijkstra on arrival time. Moving to a neighbour takes max(t+1, its opening time); if you have to wait, you can only wait an even number of seconds by bouncing, so add 1 when the parity is wrong. If both first moves are blocked, return −1.",
 "variants": [
  {
   "name": "Dijkstra with parity waiting",
   "code": "class Solution:\n    def minimumTime(self, grid):\n        m, n = len(grid), len(grid[0])\n        if grid[0][1] > 1 and grid[1][0] > 1: return -1\n        dist = [[float('inf')] * n for _ in range(m)]\n        dist[0][0] = 0\n        pq = [(0, 0, 0)]\n        while pq:\n            t, r, c = heappop(pq)\n            if (r, c) == (m - 1, n - 1): return t\n            if t > dist[r][c]: continue\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n:\n                    nt = max(t + 1, grid[a][b])\n                    if (nt - (t + 1)) % 2: nt += 1\n                    if nt < dist[a][b]:\n                        dist[a][b] = nt\n                        heappush(pq, (nt, a, b))\n        return -1",
   "time": "O(m·n log(m·n))",
   "space": "O(m·n)",
   "explain": "Dijkstra on arrival time. Moving to a neighbour takes max(t+1, its opening time); if you have to wait, you can only wait an even number of seconds by bouncing, so add 1 when the parity is wrong. If both first moves are blocked, return −1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Relax until nothing changes",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumTime(self, grid):\n        m, n = len(grid), len(grid[0])\n        if grid[0][1] > 1 and grid[1][0] > 1: return -1\n        INF = float('inf')\n        dist = [[INF] * n for _ in range(m)]\n        dist[0][0] = 0\n        changed = True\n        while changed:\n            changed = False\n            for r in range(m):\n                for c in range(n):\n                    t = dist[r][c]\n                    if t == INF: continue\n                    for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                        a, b = r + dr, c + dc\n                        if 0 <= a < m and 0 <= b < n:\n                            nt = max(t + 1, grid[a][b])\n                            if (nt - (t + 1)) % 2: nt += 1\n                            if nt < dist[a][b]:\n                                dist[a][b] = nt\n                                changed = True\n        return dist[m - 1][n - 1] if dist[m - 1][n - 1] < INF else -1",
   "time": "O((m·n)²)",
   "space": "O(m·n)",
   "explain": "Keep improving the arrival times of all cells until no cell improves (Bellman–Ford style).",
   "frames": [],
   "alt": true
  }
 ]
};
