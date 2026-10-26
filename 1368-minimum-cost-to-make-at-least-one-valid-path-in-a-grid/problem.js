window.PROBLEM = {
 "id": "1368",
 "title": "Minimum Cost to Make at Least One Valid Path in a Grid",
 "level": "Hard",
 "topic": "Graph",
 "question": "Every cell of a grid holds an arrow: 1 right, 2 left, 3 down, 4 up. You start at the top-left and want to reach the bottom-right by following arrows. Changing one cell's arrow costs 1 (each cell at most once). Return the minimum total cost to make at least one valid path. Example: [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]] → 3.",
 "why": "Every cell has an arrow (1 right, 2 left, 3 down, 4 up). Following arrows is free; changing one cell's arrow costs 1. Find the cheapest way to make a path from the top-left to the bottom-right.",
 "idea": "A graph where every move costs 0 (along the arrow) or 1 (against it). Use a deque: push 0-cost moves to the front and 1-cost moves to the back (0-1 BFS).",
 "input": "[[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]",
 "output": "3",
 "notes": [],
 "best": "A graph where every move costs 0 (along the arrow) or 1 (against it). Use a deque: push 0-cost moves to the front and 1-cost moves to the back (0-1 BFS).",
 "variants": [
  {
   "name": "0-1 BFS",
   "code": "class Solution:\n    def minCost(self, grid):\n        m, n = len(grid), len(grid[0])\n        dirs = ((0, 1), (0, -1), (1, 0), (-1, 0))\n        dist = [[float('inf')] * n for _ in range(m)]\n        dist[0][0] = 0\n        dq = deque([(0, 0)])\n        while dq:\n            i, j = dq.popleft()\n            for d, (di, dj) in enumerate(dirs):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n:\n                    cost = dist[i][j] + (0 if grid[i][j] == d + 1 else 1)\n                    if cost < dist[a][b]:\n                        dist[a][b] = cost\n                        if grid[i][j] == d + 1: dq.appendleft((a, b))\n                        else: dq.append((a, b))\n        return dist[m - 1][n - 1]",
   "time": "O(mn)",
   "space": "O(mn)",
   "explain": "A graph where every move costs 0 (along the arrow) or 1 (against it). Use a deque: push 0-cost moves to the front and 1-cost moves to the back (0-1 BFS).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dijkstra",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, grid):\n        m, n = len(grid), len(grid[0])\n        dirs = ((0, 1), (0, -1), (1, 0), (-1, 0))\n        dist = [[float('inf')] * n for _ in range(m)]\n        dist[0][0] = 0\n        heap = [(0, 0, 0)]\n        while heap:\n            d, i, j = heappop(heap)\n            if d > dist[i][j]: continue\n            for k, (di, dj) in enumerate(dirs):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n:\n                    nd = d + (0 if grid[i][j] == k + 1 else 1)\n                    if nd < dist[a][b]:\n                        dist[a][b] = nd\n                        heappush(heap, (nd, a, b))\n        return dist[m - 1][n - 1]",
   "time": "O(mn log mn)",
   "space": "O(mn)",
   "explain": "The same graph with a heap instead of a deque.",
   "frames": [],
   "alt": true
  }
 ]
};
