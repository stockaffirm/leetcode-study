window.PROBLEM = {
 "id": "1351",
 "title": "Count Negative Numbers in a Sorted Matrix",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "The grid has 8 negative numbers.",
 "idea": "Rows and columns are sorted in decreasing order. Start at the top-right corner: if the cell is negative, the whole column below it is negative (add that many) and move left; otherwise move down.",
 "input": "grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]",
 "output": "8",
 "notes": [],
 "best": "Rows and columns are sorted in decreasing order. Start at the top-right corner: if the cell is negative, the whole column below it is negative (add that many) and move left; otherwise move down.",
 "variants": [
  {
   "name": "Staircase walk from the top right",
   "code": "class Solution:\n    def countNegatives(self, grid):\n        m, n = len(grid), len(grid[0])\n        r, c, res = 0, n - 1, 0\n        while r < m and c >= 0:\n            if grid[r][c] < 0:\n                res += m - r\n                c -= 1\n            else:\n                r += 1\n        return res",
   "time": "O(m + n)",
   "space": "O(1)",
   "explain": "Rows and columns are sorted in decreasing order. Start at the top-right corner: if the cell is negative, the whole column below it is negative (add that many) and move left; otherwise move down.",
   "frames": []
  }
 ]
};
