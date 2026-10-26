window.PROBLEM = {
 "id": "1293",
 "title": "Shortest Path in a Grid with Obstacles Elimination",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Walk from top-left to bottom-right; you may smash through at most k walls (1s). What is the fewest steps?",
 "idea": "A square is not enough to describe where you are — you also need how many wall-breaks you have left. BFS over (row, col, breaks left); the first time you reach the corner is the shortest.",
 "input": "[[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k=1",
 "output": "6",
 "notes": [],
 "best": "A square is not enough to describe where you are — you also need how many wall-breaks you have left. BFS over (row, col, breaks left); the first time you reach the corner is the shortest.",
 "variants": [
  {
   "name": "BFS over (cell, removals left)",
   "code": "class Solution:\n    def shortestPath(self, grid, k):\n        m, n = len(grid), len(grid[0])\n        if k >= m + n - 2: return m + n - 2\n        q, seen, steps = deque([(0, 0, k)]), {(0, 0, k)}, 0\n        while q:\n            for _ in range(len(q)):\n                r, c, left = q.popleft()\n                if r == m - 1 and c == n - 1: return steps\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = r + dr, c + dc\n                    if 0 <= a < m and 0 <= b < n:\n                        nl = left - grid[a][b]\n                        if nl >= 0 and (a, b, nl) not in seen:\n                            seen.add((a, b, nl))\n                            q.append((a, b, nl))\n            steps += 1\n        return -1",
   "time": "O(m·n·k)",
   "space": "O(m·n·k)",
   "explain": "A square is not enough to describe where you are — you also need how many wall-breaks you have left. BFS over (row, col, breaks left); the first time you reach the corner is the shortest.",
   "frames": []
  }
 ]
};
