window.PROBLEM = {
 "id": "240",
 "title": "Search a 2D Matrix II",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
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
   "frames": []
  }
 ]
};
