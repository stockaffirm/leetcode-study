window.PROBLEM = {
 "id": "766",
 "title": "Toeplitz Matrix",
 "level": "Easy",
 "topic": "Matrix",
 "question": "A matrix is Toeplitz if every diagonal going from top-left to bottom-right holds the same value. Return true if the matrix is Toeplitz. Example: [[1,2,3,4],[5,1,2,3],[9,5,1,2]] → true.",
 "why": "Every diagonal from top-left to bottom-right holds one value: 1-1-1, 2-2-2, 3-3, and so on → true.",
 "idea": "A matrix is Toeplitz when every cell equals its up-left neighbour. Check that for all cells that have one.",
 "input": "matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]",
 "output": "true",
 "notes": [],
 "best": "A matrix is Toeplitz when every cell equals its up-left neighbour. Check that for all cells that have one.",
 "variants": [
  {
   "name": "Compare with the up-left neighbour",
   "code": "class Solution:\n    def isToeplitzMatrix(self, matrix):\n        for r in range(1, len(matrix)):\n            for c in range(1, len(matrix[0])):\n                if matrix[r][c] != matrix[r - 1][c - 1]:\n                    return False\n        return True",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "A matrix is Toeplitz when every cell equals its up-left neighbour. Check that for all cells that have one.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One value per diagonal",
   "tag": "Alternative",
   "code": "class Solution:\n    def isToeplitzMatrix(self, matrix):\n        seen = {}\n        for r, row in enumerate(matrix):\n            for c, v in enumerate(row):\n                if seen.setdefault(r - c, v) != v:\n                    return False\n        return True",
   "time": "O(m·n)",
   "space": "O(m+n)",
   "explain": "Cells of one diagonal share r − c; remember the first value and compare the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
