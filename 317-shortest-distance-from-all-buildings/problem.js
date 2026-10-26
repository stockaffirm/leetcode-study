window.PROBLEM = {
 "id": "317",
 "title": "Shortest Distance from All Buildings",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Build a house on an empty spot so the total walking distance to ALL buildings is smallest (obstacles block the way).",
 "idea": "BFS from each building across empty cells, adding the distance into a 'total' grid and counting how many buildings reached each cell. The answer is the smallest total among cells every building reached.",
 "input": "[[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]",
 "output": "7",
 "notes": [],
 "best": "BFS from each building across empty cells, adding the distance into a 'total' grid and counting how many buildings reached each cell. The answer is the smallest total among cells every building reached.",
 "variants": [
  {
   "name": "BFS from every building, add up distances",
   "code": "class Solution:\n    def shortestDistance(self, grid):\n        m, n = len(grid), len(grid[0])\n        total = [[0] * n for _ in range(m)]\n        reach = [[0] * n for _ in range(m)]\n        buildings = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    buildings += 1\n                    q, seen, d = deque([(i, j)]), {(i, j)}, 0\n                    while q:\n                        d += 1\n                        for _ in range(len(q)):\n                            r, c = q.popleft()\n                            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                                a, b = r + dr, c + dc\n                                if 0 <= a < m and 0 <= b < n and (a, b) not in seen and grid[a][b] == 0:\n                                    seen.add((a, b))\n                                    total[a][b] += d\n                                    reach[a][b] += 1\n                                    q.append((a, b))\n        best = [total[i][j] for i in range(m) for j in range(n) if grid[i][j] == 0 and reach[i][j] == buildings]\n        return min(best) if best else -1",
   "time": "O(buildings · m·n)",
   "space": "O(m·n)",
   "explain": "BFS from each building across empty cells, adding the distance into a 'total' grid and counting how many buildings reached each cell. The answer is the smallest total among cells every building reached.",
   "frames": []
  }
 ]
};
