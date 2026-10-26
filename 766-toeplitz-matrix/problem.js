window.PROBLEM = {
 "id": "766",
 "title": "Toeplitz Matrix",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
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
   "frames": []
  }
 ]
};
