window.PROBLEM = {
 "id": "304",
 "title": "Range Sum Query 2D - Immutable",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Answer many 'sum of this rectangle of the grid' questions quickly.",
 "idea": "Precompute p[i][j] = sum of the rectangle from the top-left corner to (i, j). Any rectangle sum is then four lookups: big − left − top + overlap.",
 "input": "[[3,0,1],[5,6,3],[1,2,0]], sumRegion(1,1,2,2)",
 "output": "11",
 "notes": [],
 "best": "Precompute p[i][j] = sum of the rectangle from the top-left corner to (i, j). Any rectangle sum is then four lookups: big − left − top + overlap.",
 "variants": [
  {
   "name": "2D prefix sums",
   "code": "class NumMatrix:\n    def __init__(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        self.p = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(m):\n            for j in range(n):\n                self.p[i + 1][j + 1] = matrix[i][j] + self.p[i][j + 1] + self.p[i + 1][j] - self.p[i][j]\n    def sumRegion(self, row1, col1, row2, col2):\n        p = self.p\n        return p[row2 + 1][col2 + 1] - p[row1][col2 + 1] - p[row2 + 1][col1] + p[row1][col1]",
   "time": "O(1) per query",
   "space": "O(m·n)",
   "explain": "Precompute p[i][j] = sum of the rectangle from the top-left corner to (i, j). Any rectangle sum is then four lookups: big − left − top + overlap.",
   "frames": []
  }
 ]
};
