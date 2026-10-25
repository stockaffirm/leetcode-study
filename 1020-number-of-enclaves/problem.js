window.PROBLEM = {
 "id": "1020",
 "title": "Number of Enclaves",
 "level": "Medium",
 "topic": "Matrix",
 "question": "In a grid of 1s (land) and 0s (sea) you can walk between 4-neighbouring land cells or leave the grid from a border land cell. Return the number of land cells from which you can NOT leave the grid. Example: [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS each island, check the border",
   "tag": "Alternative",
   "code": "class Solution:\n    def numEnclaves(self, grid):\n        m, n = len(grid), len(grid[0])\n        seen = set()\n        res = 0\n        for si in range(m):\n            for sj in range(n):\n                if grid[si][sj] == 1 and (si, sj) not in seen:\n                    seen.add((si, sj))\n                    stack = [(si, sj)]\n                    size, edge = 0, False\n                    while stack:\n                        i, j = stack.pop()\n                        size += 1\n                        if i in (0, m - 1) or j in (0, n - 1):\n                            edge = True\n                        for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                            if 0 <= a < m and 0 <= b < n and grid[a][b] == 1 and (a, b) not in seen:\n                                seen.add((a, b))\n                                stack.append((a, b))\n                    if not edge:\n                        res += size\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Flood each land island and add its size only if it never touches the border.",
   "frames": [],
   "alt": true
  }
 ]
};
