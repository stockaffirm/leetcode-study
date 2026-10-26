window.PROBLEM = {
 "id": "2257",
 "title": "Count Unguarded Cells in the Grid",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "A guard sees along its row and column until a wall or another guard; free cells nobody sees are unguarded.",
 "idea": "Create a grid with the guards and walls marked. From each guard walk in the four directions, marking free cells as guarded, and stop at a wall or another guard. The unguarded cells are the free cells never marked.",
 "input": "m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]",
 "output": "7",
 "notes": [],
 "best": "Create a grid with the guards and walls marked. From each guard walk in the four directions, marking free cells as guarded, and stop at a wall or another guard. The unguarded cells are the free cells never marked.",
 "variants": [
  {
   "name": "Mark everything a guard sees",
   "code": "class Solution:\n    def countUnguarded(self, m, n, guards, walls):\n        grid = [[0] * n for _ in range(m)]\n        for r, c in guards:\n            grid[r][c] = 2\n        for r, c in walls:\n            grid[r][c] = 3\n        for r, c in guards:\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                while 0 <= a < m and 0 <= b < n and grid[a][b] not in (2, 3):\n                    grid[a][b] = 1\n                    a += dr\n                    b += dc\n        return sum(row.count(0) for row in grid)",
   "time": "O(m·n·(m+n))",
   "space": "O(m·n)",
   "explain": "Create a grid with the guards and walls marked. From each guard walk in the four directions, marking free cells as guarded, and stop at a wall or another guard. The unguarded cells are the free cells never marked.",
   "frames": []
  }
 ]
};
