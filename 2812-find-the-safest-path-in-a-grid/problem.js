window.PROBLEM = {
 "id": "2812",
 "title": "Find the Safest Path in a Grid",
 "level": "Medium",
 "topic": "Graph",
 "question": "A grid contains thieves (1) and empty cells (0). The safeness of a cell is its Manhattan distance to the nearest thief; the safeness of a path is the smallest safeness of its cells. Find the largest possible safeness of a path from the top-left to the bottom-right (moving up, down, left or right). Example: [[0,0,1],[0,0,0],[0,0,0]] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search on the safeness",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumSafenessFactor(self, grid):\n        n = len(grid)\n        dist = [[-1] * n for _ in range(n)]\n        q = deque()\n        for i in range(n):\n            for j in range(n):\n                if grid[i][j]:\n                    dist[i][j] = 0\n                    q.append((i, j))\n        while q:\n            i, j = q.popleft()\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < n and 0 <= b < n and dist[a][b] < 0:\n                    dist[a][b] = dist[i][j] + 1\n                    q.append((a, b))\n        def ok(t):\n            if dist[0][0] < t: return False\n            seen, st = {(0, 0)}, [(0, 0)]\n            while st:\n                i, j = st.pop()\n                if (i, j) == (n - 1, n - 1): return True\n                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = i + di, j + dj\n                    if 0 <= a < n and 0 <= b < n and (a, b) not in seen and dist[a][b] >= t:\n                        seen.add((a, b))\n                        st.append((a, b))\n            return False\n        lo, hi = 0, dist[0][0]\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if ok(mid): lo = mid\n            else: hi = mid - 1\n        return lo",
   "time": "O(n² log n)",
   "space": "O(n²)",
   "explain": "For a value t, check whether a path exists using only cells with thief distance ≥ t.",
   "frames": [],
   "alt": true
  }
 ]
};
