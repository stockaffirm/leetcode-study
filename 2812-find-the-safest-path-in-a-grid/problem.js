window.PROBLEM = {
 "id": "2812",
 "title": "Find the Safest Path in a Grid",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A grid contains thieves (1). The safeness of a cell is its Manhattan distance to the nearest thief; the safeness of a path is its smallest cell safeness. Find the safest path from the top-left to the bottom-right.",
 "idea": "First compute every cell's distance to the nearest thief with a multi-source BFS. Then run Dijkstra that always extends the path with the biggest safeness so far (max-heap), tracking the minimum along the path.",
 "input": "[[0,0,1],[0,0,0],[0,0,0]]",
 "output": "2",
 "notes": [],
 "best": "First compute every cell's distance to the nearest thief with a multi-source BFS. Then run Dijkstra that always extends the path with the biggest safeness so far (max-heap), tracking the minimum along the path.",
 "variants": [
  {
   "name": "Distance to thieves + max-heap path",
   "code": "class Solution:\n    def maximumSafenessFactor(self, grid):\n        n = len(grid)\n        dist = [[-1] * n for _ in range(n)]\n        q = deque()\n        for i in range(n):\n            for j in range(n):\n                if grid[i][j]:\n                    dist[i][j] = 0\n                    q.append((i, j))\n        while q:\n            i, j = q.popleft()\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < n and 0 <= b < n and dist[a][b] < 0:\n                    dist[a][b] = dist[i][j] + 1\n                    q.append((a, b))\n        heap = [(-dist[0][0], 0, 0)]\n        seen = {(0, 0)}\n        while heap:\n            s, i, j = heappop(heap)\n            if (i, j) == (n - 1, n - 1): return -s\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < n and 0 <= b < n and (a, b) not in seen:\n                    seen.add((a, b))\n                    heappush(heap, (-min(-s, dist[a][b]), a, b))\n        return 0",
   "time": "O(mn log mn)",
   "space": "O(mn)",
   "explain": "First compute every cell's distance to the nearest thief with a multi-source BFS. Then run Dijkstra that always extends the path with the biggest safeness so far (max-heap), tracking the minimum along the path.",
   "frames": []
  }
 ]
};
