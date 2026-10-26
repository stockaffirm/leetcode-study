window.PROBLEM = {
 "id": "1730",
 "title": "Shortest Path to Get Food",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
