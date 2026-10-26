window.PROBLEM = {
 "id": "308",
 "title": "Range Sum Query 2D - Mutable",
 "level": "Medium",
 "topic": "Design",
 "question": "Design NumMatrix(matrix) that supports update(row, col, val) and sumRegion(row1, col1, row2, col2) returning the sum of the sub-rectangle. Example: after the 5×5 sample, sumRegion(2,1,4,3)=8; update(3,2,2); sumRegion(2,1,4,3)=10.",
 "why": "A 5×5 grid: sumRegion(2,1,4,3) = 8; after update(3,2,2) it is 10.",
 "idea": "A 2D binary indexed tree stores partial rectangle sums. Update adds the delta at (r, c) along both index chains; a prefix query sums along the chains. A region sum is inclusion–exclusion of four prefix queries.",
 "input": "NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]); sumRegion(2,1,4,3); update(3,2,2); sumRegion(2,1,4,3)",
 "output": "[8, None, 10]",
 "notes": [],
 "best": "A 2D binary indexed tree stores partial rectangle sums. Update adds the delta at (r, c) along both index chains; a prefix query sums along the chains. A region sum is inclusion–exclusion of four prefix queries.",
 "variants": [
  {
   "name": "2D Fenwick tree",
   "code": "class NumMatrix:\n    def __init__(self, matrix):\n        self.m, self.n = len(matrix), len(matrix[0])\n        self.mat = [[0] * self.n for _ in range(self.m)]\n        self.tree = [[0] * (self.n + 1) for _ in range(self.m + 1)]\n        for i in range(self.m):\n            for j in range(self.n):\n                self.update(i, j, matrix[i][j])\n\n    def update(self, row, col, val):\n        delta = val - self.mat[row][col]\n        self.mat[row][col] = val\n        i = row + 1\n        while i <= self.m:\n            j = col + 1\n            while j <= self.n:\n                self.tree[i][j] += delta\n                j += j & -j\n            i += i & -i\n\n    def _prefix(self, r, c):\n        s = 0\n        i = r\n        while i > 0:\n            j = c\n            while j > 0:\n                s += self.tree[i][j]\n                j -= j & -j\n            i -= i & -i\n        return s\n\n    def sumRegion(self, row1, col1, row2, col2):\n        return (self._prefix(row2 + 1, col2 + 1) - self._prefix(row1, col2 + 1)\n                - self._prefix(row2 + 1, col1) + self._prefix(row1, col1))",
   "time": "O(log m · log n)",
   "space": "O(m·n)",
   "explain": "A 2D binary indexed tree stores partial rectangle sums. Update adds the delta at (r, c) along both index chains; a prefix query sums along the chains. A region sum is inclusion–exclusion of four prefix queries.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Row prefix sums",
   "tag": "Alternative",
   "code": "class NumMatrix:\n    def __init__(self, matrix):\n        self.mat = [row[:] for row in matrix]\n        self.pre = [[0] + list(accumulate(row)) for row in matrix]\n\n    def update(self, row, col, val):\n        self.mat[row][col] = val\n        self.pre[row] = [0] + list(accumulate(self.mat[row]))\n\n    def sumRegion(self, row1, col1, row2, col2):\n        return sum(self.pre[r][col2 + 1] - self.pre[r][col1] for r in range(row1, row2 + 1))",
   "time": "O(n) per call",
   "space": "O(m·n)",
   "explain": "Keep a prefix-sum array per row; update rebuilds one row.",
   "frames": [],
   "alt": true
  }
 ]
};
