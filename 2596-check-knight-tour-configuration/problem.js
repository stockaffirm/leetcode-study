window.PROBLEM = {
 "id": "2596",
 "title": "Check Knight Tour Configuration",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "The cell numbers 0, 1, 2 … must start in the top-left corner and every next cell must be a knight's jump away.",
 "idea": "Record the position of every number. The tour starts at 0 in the top-left corner; for k = 1 … n²−1 the cells k−1 and k must differ by (1,2) or (2,1) rows/columns.",
 "input": "grid = 5 × 5 tour starting with 0 at the top-left",
 "output": "true",
 "notes": [],
 "best": "Record the position of every number. The tour starts at 0 in the top-left corner; for k = 1 … n²−1 the cells k−1 and k must differ by (1,2) or (2,1) rows/columns.",
 "variants": [
  {
   "name": "Check every consecutive pair is a knight move",
   "code": "class Solution:\n    def checkValidGrid(self, grid):\n        n = len(grid)\n        if grid[0][0] != 0:\n            return False\n        pos = {}\n        for r in range(n):\n            for c in range(n):\n                pos[grid[r][c]] = (r, c)\n        for k in range(1, n * n):\n            (r1, c1), (r2, c2) = pos[k - 1], pos[k]\n            if sorted((abs(r1 - r2), abs(c1 - c2))) != [1, 2]:\n                return False\n        return True",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Record the position of every number. The tour starts at 0 in the top-left corner; for k = 1 … n²−1 the cells k−1 and k must differ by (1,2) or (2,1) rows/columns.",
   "frames": []
  }
 ]
};
