window.PROBLEM = {
 "id": "2290",
 "title": "Minimum Obstacle Removal to Reach Corner",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "[[0,1,1],[1,1,0],[1,1,0]] → remove 2 obstacles.",
 "idea": "Moving into an empty cell costs 0, into an obstacle costs 1. That is a shortest path with 0/1 weights: use a deque, pushing cost-0 moves at the front and cost-1 moves at the back.",
 "input": "grid = [[0,1,1],[1,1,0],[1,1,0]]",
 "output": "2",
 "notes": [],
 "best": "Moving into an empty cell costs 0, into an obstacle costs 1. That is a shortest path with 0/1 weights: use a deque, pushing cost-0 moves at the front and cost-1 moves at the back.",
 "variants": [
  {
   "name": "0-1 BFS (Breadth-First Search): obstacles cost 1",
   "code": "class Solution:\n    def minimumObstacles(self, grid):\n        m, n = len(grid), len(grid[0])\n        INF = float('inf')\n        dist = [[INF] * n for _ in range(m)]\n        dist[0][0] = 0\n        dq = deque([(0, 0)])\n        while dq:\n            i, j = dq.popleft()\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n:\n                    nd = dist[i][j] + grid[a][b]\n                    if nd < dist[a][b]:\n                        dist[a][b] = nd\n                        if grid[a][b]:\n                            dq.append((a, b))\n                        else:\n                            dq.appendleft((a, b))\n        return dist[m - 1][n - 1]",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Moving into an empty cell costs 0, into an obstacle costs 1. That is a shortest path with 0/1 weights: use a deque, pushing cost-0 moves at the front and cost-1 moves at the back.",
   "frames": []
  }
 ]
};
