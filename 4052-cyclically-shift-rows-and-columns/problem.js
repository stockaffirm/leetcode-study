window.PROBLEM = {
 "id": "4052",
 "title": "Cyclically Shift Rows and Columns",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "[[1,2],[3,4]], rowShift [1,0], colShift [0,1] → [[2,4],[3,1]].",
 "idea": "Row i is rotated left by rowShift[i] (element at column j moves to (j − k) mod n). Then column j is rotated up by colShift[j]. Do the two steps in order.",
 "input": "n = 2, grid = [[1,2],[3,4]], rowShift = [1,0], colShift = [0,1]",
 "output": "[[2, 4], [3, 1]]",
 "notes": [],
 "best": "Row i is rotated left by rowShift[i] (element at column j moves to (j − k) mod n). Then column j is rotated up by colShift[j]. Do the two steps in order.",
 "variants": [
  {
   "name": "Shift the rows left, then the columns up",
   "code": "class Solution:\n    def cyclicShift(self, n, grid, rowShift, colShift):\n        rows = [[grid[i][(j + rowShift[i]) % n] for j in range(n)] for i in range(n)]\n        return [[rows[(i + colShift[j]) % n][j] for j in range(n)] for i in range(n)]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Row i is rotated left by rowShift[i] (element at column j moves to (j − k) mod n). Then column j is rotated up by colShift[j]. Do the two steps in order.",
   "frames": []
  }
 ]
};
