window.PROBLEM = {
 "id": "1020",
 "title": "Number of Enclaves",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Only the cells that cannot walk off the grid count. The 3 land cells in the middle are surrounded by water, so the answer is 3.",
 "idea": "Start from every land cell on the border and sink everything reachable from it (BFS). Whatever land is left cannot reach the edge, so count it.",
 "input": "grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]",
 "output": "3",
 "notes": [],
 "best": "Start from every land cell on the border and sink everything reachable from it (BFS). Whatever land is left cannot reach the edge, so count it.",
 "variants": [
  {
   "name": "BFS from the border",
   "code": "class Solution:\n    def numEnclaves(self, grid):\n        m, n = len(grid), len(grid[0])\n        q = deque((i, j) for i in range(m) for j in range(n)\n                  if (i in (0, m - 1) or j in (0, n - 1)) and grid[i][j] == 1)\n        for i, j in q:\n            grid[i][j] = 0\n        while q:\n            i, j = q.popleft()\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n and grid[a][b] == 1:\n                    grid[a][b] = 0\n                    q.append((a, b))\n        return sum(map(sum, grid))",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Start from every land cell on the border and sink everything reachable from it (BFS). Whatever land is left cannot reach the edge, so count it.",
   "frames": []
  }
 ]
};
