window.PROBLEM = {
 "id": "2258",
 "title": "Escape the Spreading Fire",
 "level": "Hard",
 "topic": "Graph",
 "question": "A grid has grass (0), fire (1) and walls (2). Each minute the fire spreads to all neighbouring grass cells. You start at the top-left, may wait there, then move one cell per minute (not through walls or burning cells) to the bottom-right 'safehouse'. Return the maximum number of minutes you can wait before leaving and still reach it; −1 if you cannot, and 1,000,000,000 if you can wait forever. Arriving at the safehouse in the same minute as the fire is fine.",
 "why": "A fire spreads each minute to neighbouring grass cells (walls block it). You start at the top-left, move one cell per minute and want to reach the bottom-right. What is the longest you can wait before leaving and still survive? (−1 if impossible; 10⁹ if you can always escape.)",
 "idea": "Compute when the fire reaches every cell with a BFS. Then binary search the waiting time: for a given delay, BFS yourself and require reaching each cell strictly before the fire (the last cell may be reached at the same moment).",
 "input": "[[0,2,0,0,0,0,0],[0,0,0,2,2,1,0],[0,2,0,0,1,2,0],[0,0,2,2,2,0,2],[0,0,0,0,0,0,0]]",
 "output": "3",
 "notes": [],
 "best": "Compute when the fire reaches every cell with a BFS. Then binary search the waiting time: for a given delay, BFS yourself and require reaching each cell strictly before the fire (the last cell may be reached at the same moment).",
 "variants": [
  {
   "name": "BFS for fire times + binary search on the delay",
   "code": "class Solution:\n    def maximumMinutes(self, grid):\n        m, n = len(grid), len(grid[0])\n        INF = float('inf')\n        fire = [[INF] * n for _ in range(m)]\n        q = deque()\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    fire[i][j] = 0\n                    q.append((i, j))\n        while q:\n            i, j = q.popleft()\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n and grid[a][b] != 2 and fire[a][b] == INF:\n                    fire[a][b] = fire[i][j] + 1\n                    q.append((a, b))\n        def ok(wait):\n            if fire[0][0] <= wait: return False\n            seen = {(0, 0)}\n            q = deque([(0, 0, 0)])\n            while q:\n                i, j, d = q.popleft()\n                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = i + di, j + dj\n                    t = wait + d + 1\n                    if 0 <= a < m and 0 <= b < n and grid[a][b] != 2 and (a, b) not in seen:\n                        if (a, b) == (m - 1, n - 1):\n                            if t <= fire[a][b]: return True\n                        elif t < fire[a][b]:\n                            seen.add((a, b))\n                            q.append((a, b, d + 1))\n            return False\n        if not ok(0): return -1\n        if ok(m * n): return 10 ** 9\n        lo, hi = 0, m * n\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if ok(mid): lo = mid\n            else: hi = mid - 1\n        return lo",
   "time": "O(mn log(mn))",
   "space": "O(mn)",
   "explain": "Compute when the fire reaches every cell with a BFS. Then binary search the waiting time: for a given delay, BFS yourself and require reaching each cell strictly before the fire (the last cell may be reached at the same moment).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every waiting time",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumMinutes(self, grid):\n        m, n = len(grid), len(grid[0])\n        INF = float('inf')\n        fire = [[INF] * n for _ in range(m)]\n        q = deque()\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    fire[i][j] = 0\n                    q.append((i, j))\n        while q:\n            i, j = q.popleft()\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n and grid[a][b] != 2 and fire[a][b] == INF:\n                    fire[a][b] = fire[i][j] + 1\n                    q.append((a, b))\n        def ok(wait):\n            if fire[0][0] <= wait: return False\n            seen = {(0, 0)}\n            q = deque([(0, 0, 0)])\n            while q:\n                i, j, d = q.popleft()\n                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = i + di, j + dj\n                    t = wait + d + 1\n                    if 0 <= a < m and 0 <= b < n and grid[a][b] != 2 and (a, b) not in seen:\n                        if (a, b) == (m - 1, n - 1):\n                            if t <= fire[a][b]: return True\n                        elif t < fire[a][b]:\n                            seen.add((a, b))\n                            q.append((a, b, d + 1))\n            return False\n        if not ok(0): return -1\n        w = 0\n        while w <= m * n and ok(w): w += 1\n        return 10 ** 9 if w > m * n else w - 1",
   "time": "O(mn·mn)",
   "space": "O(mn)",
   "explain": "Increase the waiting time one by one until you can no longer escape.",
   "frames": [],
   "alt": true
  }
 ]
};
