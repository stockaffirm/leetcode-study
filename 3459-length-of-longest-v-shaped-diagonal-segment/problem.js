window.PROBLEM = {
 "id": "3459",
 "title": "Length of Longest V-Shaped Diagonal Segment",
 "level": "Hard",
 "topic": "Matrix",
 "question": "grid contains 0, 1 and 2. A V-shaped diagonal segment starts at a 1, continues along a diagonal with the values 2, 0, 2, 0, …, and may make at most one clockwise 90° turn to another diagonal direction (still following the sequence). Return the length of the longest such segment, or 0. Example: the 5×5 sample grid → 5.",
 "why": "In the sample grid the segment 1 → 2 → 0 → 2 → 0 along a diagonal with one clockwise turn has length 5.",
 "idea": "A segment starts at a 1 and then follows 2, 0, 2, 0 … along a diagonal, and may turn clockwise once. State = (cell, direction, turned yet?). From a cell with value v the next required value is 2 (after 1 or 0) or 0 (after 2). Continue straight, or turn to the next clockwise diagonal if no turn has been used; take the longer result. Memoise and try every 1 with every direction.",
 "input": "grid = [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]",
 "output": "5",
 "notes": [],
 "best": "A segment starts at a 1 and then follows 2, 0, 2, 0 … along a diagonal, and may turn clockwise once. State = (cell, direction, turned yet?). From a cell with value v the next required value is 2 (after 1 or 0) or 0 (after 2). Continue straight, or turn to the next clockwise diagonal if no turn has been used; take the longer result. Memoise and try every 1 with every direction.",
 "variants": [
  {
   "name": "Memoised DFS along diagonals with one turn",
   "code": "class Solution:\n    def lenOfVDiagonal(self, grid):\n        m, n = len(grid), len(grid[0])\n        dirs = [(1, 1), (1, -1), (-1, -1), (-1, 1)]\n        @lru_cache(None)\n        def go(i, j, d, turned):\n            need = 0 if grid[i][j] == 2 else 2\n            best = 1\n            a, b = i + dirs[d][0], j + dirs[d][1]\n            if 0 <= a < m and 0 <= b < n and grid[a][b] == need:\n                best = max(best, 1 + go(a, b, d, turned))\n            if not turned:\n                nd = (d + 1) % 4\n                a, b = i + dirs[nd][0], j + dirs[nd][1]\n                if 0 <= a < m and 0 <= b < n and grid[a][b] == need:\n                    best = max(best, 1 + go(a, b, nd, True))\n            return best\n        res = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    for d in range(4):\n                        res = max(res, go(i, j, d, False))\n        return res",
   "time": "O(m·n·4·2)",
   "space": "O(m·n·8)",
   "explain": "A segment starts at a 1 and then follows 2, 0, 2, 0 … along a diagonal, and may turn clockwise once. State = (cell, direction, turned yet?). From a cell with value v the next required value is 2 (after 1 or 0) or 0 (after 2). Continue straight, or turn to the next clockwise diagonal if no turn has been used; take the longer result. Memoise and try every 1 with every direction.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Plain recursion without memo",
   "tag": "Brute force",
   "code": "class Solution:\n    def lenOfVDiagonal(self, grid):\n        m, n = len(grid), len(grid[0])\n        dirs = [(1, 1), (1, -1), (-1, -1), (-1, 1)]\n        def go(i, j, d, turned):\n            need = 0 if grid[i][j] == 2 else 2\n            best = 1\n            a, b = i + dirs[d][0], j + dirs[d][1]\n            if 0 <= a < m and 0 <= b < n and grid[a][b] == need:\n                best = max(best, 1 + go(a, b, d, turned))\n            if not turned:\n                nd = (d + 1) % 4\n                a, b = i + dirs[nd][0], j + dirs[nd][1]\n                if 0 <= a < m and 0 <= b < n and grid[a][b] == need:\n                    best = max(best, 1 + go(a, b, nd, True))\n            return best\n        return max([go(i, j, d, False) for i in range(m) for j in range(n) if grid[i][j] == 1 for d in range(4)], default=0)",
   "time": "exponential (bounded)",
   "space": "O(m+n)",
   "explain": "Same search but without caching: from every 1 walk each direction, optionally turning once.",
   "frames": [],
   "alt": true
  }
 ]
};
