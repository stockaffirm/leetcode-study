window.PROBLEM = {
 "id": "240",
 "title": "Search a 2D Matrix II",
 "level": "Medium",
 "topic": "Matrix",
 "question": "You are given a grid (matrix) of numbers in which every row is sorted from left to right and every column is sorted from top to bottom. Return true if the number target is somewhere in the grid. Aim for better than checking every cell. Example: the 5 × 5 grid [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]] with target 5 → true; with target 20 → false.",
 "why": "Each row is sorted left→right and each column top→bottom. Find a value fast.",
 "idea": "Start at the top-right corner. If the value is too big, move left; if too small, move down. Each move discards a whole row or column.",
 "input": "5×5 matrix, target 5",
 "output": "True",
 "notes": [],
 "best": "Start at the top-right corner. If the value is too big, move left; if too small, move down. Each move discards a whole row or column.",
 "variants": [
  {
   "name": "Staircase search from the top-right",
   "code": "class Solution:\n    def searchMatrix(self, matrix, target):\n        r, c = 0, len(matrix[0]) - 1\n        while r < len(matrix) and c >= 0:\n            v = matrix[r][c]\n            if v == target: return True\n            if v > target: c -= 1\n            else: r += 1\n        return False",
   "time": "O(m + n)",
   "space": "O(1)",
   "explain": "Start at the top-right corner. If the value is too big, move left; if too small, move down. Each move discards a whole row or column.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search every row",
   "tag": "Alternative",
   "code": "class Solution:\n    def searchMatrix(self, matrix, target):\n        for row in matrix:\n            i = bisect_left(row, target)\n            if i < len(row) and row[i] == target: return True\n        return False",
   "time": "O(m log n)",
   "space": "O(1)",
   "explain": "Each row is sorted, so binary-search each one.",
   "frames": [],
   "alt": true
  }
 ]
};
