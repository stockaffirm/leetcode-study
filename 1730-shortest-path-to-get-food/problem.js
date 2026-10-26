window.PROBLEM = {
 "id": "1730",
 "title": "Shortest Path to Get Food",
 "level": "Medium",
 "topic": "Graph",
 "question": "A grid has '*' (you), '#' (food), 'O' (free) and 'X' (obstacle). Moving up, down, left or right, return the number of steps to the nearest food, or −1 if none can be reached. Example: a 4×6 room where the food is 3 steps away → 3.",
 "why": "From '*' find the fewest steps to any food cell '#' (X is a wall, O is free).",
 "idea": "Plain BFS from the start; stop at the first food cell reached.",
 "input": "4×6 grid with one food cell",
 "output": "3",
 "notes": [],
 "best": "Plain BFS from the start; stop at the first food cell reached.",
 "variants": [
  {
   "name": "BFS to the nearest '#'",
   "code": "class Solution:\n    def getFood(self, grid):\n        m, n = len(grid), len(grid[0])\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == '*': si, sj = i, j\n        q, seen, steps = deque([(si, sj)]), {(si, sj)}, 0\n        while q:\n            for _ in range(len(q)):\n                r, c = q.popleft()\n                if grid[r][c] == '#': return steps\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = r + dr, c + dc\n                    if 0 <= a < m and 0 <= b < n and grid[a][b] != 'X' and (a, b) not in seen:\n                        seen.add((a, b))\n                        q.append((a, b))\n            steps += 1\n        return -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Plain BFS from the start; stop at the first food cell reached.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Distance table, then nearest food",
   "tag": "Alternative",
   "code": "class Solution:\n    def getFood(self, grid):\n        m, n = len(grid), len(grid[0])\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == '*': si, sj = i, j\n        dist = [[-1] * n for _ in range(m)]\n        dist[si][sj] = 0\n        q = deque([(si, sj)])\n        while q:\n            r, c = q.popleft()\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n and grid[a][b] != 'X' and dist[a][b] < 0:\n                    dist[a][b] = dist[r][c] + 1\n                    q.append((a, b))\n        foods = [dist[i][j] for i in range(m) for j in range(n) if grid[i][j] == '#' and dist[i][j] >= 0]\n        return min(foods) if foods else -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "BFS fills a distance grid from the start; the answer is the smallest distance among food cells.",
   "frames": [],
   "alt": true
  }
 ]
};
