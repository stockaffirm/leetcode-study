window.PROBLEM = {
 "id": "867",
 "title": "Transpose Matrix",
 "level": "Easy",
 "topic": "Matrix",
 "question": "Return the transpose of a matrix: flip it over its main diagonal so rows become columns. Example: [[1,2,3],[4,5,6],[7,8,9]] → [[1,4,7],[2,5,8],[3,6,9]].",
 "why": "The first column 1,4,7 becomes the first row.",
 "idea": "zip(*matrix) pairs up the i-th entries of all rows — exactly the columns.",
 "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
 "output": "[[1,4,7],[2,5,8],[3,6,9]]",
 "notes": [],
 "best": "zip(*matrix) pairs up the i-th entries of all rows — exactly the columns.",
 "variants": [
  {
   "name": "Rows become columns",
   "code": "class Solution:\n    def transpose(self, matrix):\n        return [list(col) for col in zip(*matrix)]",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "zip(*matrix) pairs up the i-th entries of all rows — exactly the columns.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Nested loops",
   "tag": "Alternative",
   "code": "class Solution:\n    def transpose(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        res = [[0] * m for _ in range(n)]\n        for i in range(m):\n            for j in range(n):\n                res[j][i] = matrix[i][j]\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Copy entry (i, j) to (j, i).",
   "frames": [],
   "alt": true
  }
 ]
};
