window.PROBLEM = {
 "id": "3286",
 "title": "Find a Safe Walk Through a Grid",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A grid with unsafe cells (1) that each cost 1 health: reach the bottom-right keeping health ≥ 1.",
 "idea": "Moving into an unsafe cell costs 1 health. Find the path that loses the least health with 0-1 BFS (Breadth-First Search with a deque: cost-0 moves to the front, cost-1 moves to the back). Return true if health − minimum loss is at least 1.",
 "input": "grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1",
 "output": "true",
 "notes": [],
 "best": "Moving into an unsafe cell costs 1 health. Find the path that loses the least health with 0-1 BFS (Breadth-First Search with a deque: cost-0 moves to the front, cost-1 moves to the back). Return true if health − minimum loss is at least 1.",
 "variants": [
  {
   "name": "0-1 BFS tracking the least health lost",
   "code": "class Solution:\n    def findSafeWalk(self, grid, health):\n        m, n = len(grid), len(grid[0])\n        INF = float('inf')\n        loss = [[INF] * n for _ in range(m)]\n        loss[0][0] = grid[0][0]\n        dq = deque([(0, 0)])\n        while dq:\n            i, j = dq.popleft()\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n:\n                    nl = loss[i][j] + grid[a][b]\n                    if nl < loss[a][b]:\n                        loss[a][b] = nl\n                        if grid[a][b]:\n                            dq.append((a, b))\n                        else:\n                            dq.appendleft((a, b))\n        return health - loss[m - 1][n - 1] >= 1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Moving into an unsafe cell costs 1 health. Find the path that loses the least health with 0-1 BFS (Breadth-First Search with a deque: cost-0 moves to the front, cost-1 moves to the back). Return true if health − minimum loss is at least 1.",
   "frames": []
  }
 ]
};
