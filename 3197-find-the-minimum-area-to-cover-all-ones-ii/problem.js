window.PROBLEM = {
 "id": "3197",
 "title": "Find the Minimum Area to Cover All Ones II",
 "level": "Hard",
 "topic": "Matrix",
 "question": "",
 "why": "[[1,0,1],[1,1,1]]: one rectangle for the left column (area 2), one for the middle 1 (area 1), one for the right column (area 2) → 5.",
 "idea": "Three non-overlapping rectangles can always be separated by straight cuts. There are only six shapes: three vertical strips, three horizontal strips, or one cut with the other side split once the other way (four variants). For each region the best rectangle is the bounding box of its 1s.",
 "input": "grid = [[1,0,1],[1,1,1]]",
 "output": "5",
 "notes": [],
 "best": "Three non-overlapping rectangles can always be separated by straight cuts. There are only six shapes: three vertical strips, three horizontal strips, or one cut with the other side split once the other way (four variants). For each region the best rectangle is the bounding box of its 1s.",
 "variants": [
  {
   "name": "Try the six ways to cut into three rectangles",
   "code": "class Solution:\n    def minimumSum(self, grid):\n        m, n = len(grid), len(grid[0])\n        def area(r1, r2, c1, c2):\n            lo_r = lo_c = 10**9\n            hi_r = hi_c = -1\n            for i in range(r1, r2 + 1):\n                for j in range(c1, c2 + 1):\n                    if grid[i][j]:\n                        lo_r = min(lo_r, i)\n                        hi_r = max(hi_r, i)\n                        lo_c = min(lo_c, j)\n                        hi_c = max(hi_c, j)\n            return 0 if hi_r < 0 else (hi_r - lo_r + 1) * (hi_c - lo_c + 1)\n        best = 10**9\n        for a in range(n - 1):\n            for b in range(a + 1, n - 1):\n                best = min(best, area(0, m - 1, 0, a) + area(0, m - 1, a + 1, b) + area(0, m - 1, b + 1, n - 1))\n        for a in range(m - 1):\n            for b in range(a + 1, m - 1):\n                best = min(best, area(0, a, 0, n - 1) + area(a + 1, b, 0, n - 1) + area(b + 1, m - 1, 0, n - 1))\n        for c in range(n - 1):\n            for r in range(m - 1):\n                best = min(best, area(0, m - 1, 0, c) + area(0, r, c + 1, n - 1) + area(r + 1, m - 1, c + 1, n - 1))\n                best = min(best, area(0, m - 1, c + 1, n - 1) + area(0, r, 0, c) + area(r + 1, m - 1, 0, c))\n        for r in range(m - 1):\n            for c in range(n - 1):\n                best = min(best, area(0, r, 0, n - 1) + area(r + 1, m - 1, 0, c) + area(r + 1, m - 1, c + 1, n - 1))\n                best = min(best, area(r + 1, m - 1, 0, n - 1) + area(0, r, 0, c) + area(0, r, c + 1, n - 1))\n        return best",
   "time": "O(mn·(m+n)²)",
   "space": "O(1)",
   "explain": "Three non-overlapping rectangles can always be separated by straight cuts. There are only six shapes: three vertical strips, three horizontal strips, or one cut with the other side split once the other way (four variants). For each region the best rectangle is the bounding box of its 1s.",
   "frames": []
  }
 ]
};
