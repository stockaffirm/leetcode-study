window.PROBLEM = {
 "id": "1074",
 "title": "Number of Submatrices That Sum to Target",
 "level": "Hard",
 "topic": "Prefix Sum",
 "question": "Return the number of non-empty submatrices whose elements add up to target. Example: [[0,1,0],[1,1,1],[0,1,0]], target 0 → 4.",
 "why": "[[0,1,0],[1,1,1],[0,1,0]], target 0: the four single zero cells are the only submatrices → 4.",
 "idea": "Choose a pair of rows (top, bottom) and collapse the columns between them into one array of column sums. The submatrices with those rows are now subarrays of this array, counted with a prefix-sum hash map (count earlier prefixes equal to current − target).",
 "input": "matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0",
 "output": "4",
 "notes": [],
 "best": "Choose a pair of rows (top, bottom) and collapse the columns between them into one array of column sums. The submatrices with those rows are now subarrays of this array, counted with a prefix-sum hash map (count earlier prefixes equal to current − target).",
 "variants": [
  {
   "name": "Fix two rows, count subarrays with a hash map",
   "code": "class Solution:\n    def numSubmatrixSumTarget(self, matrix, target):\n        m, n = len(matrix), len(matrix[0])\n        res = 0\n        for top in range(m):\n            cols = [0] * n\n            for bottom in range(top, m):\n                for j in range(n):\n                    cols[j] += matrix[bottom][j]\n                seen = Counter({0: 1})\n                run = 0\n                for v in cols:\n                    run += v\n                    res += seen[run - target]\n                    seen[run] += 1\n        return res",
   "time": "O(m²·n)",
   "space": "O(n)",
   "explain": "Choose a pair of rows (top, bottom) and collapse the columns between them into one array of column sums. The submatrices with those rows are now subarrays of this array, counted with a prefix-sum hash map (count earlier prefixes equal to current − target).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "2D prefix sums with every rectangle",
   "tag": "Brute force",
   "code": "class Solution:\n    def numSubmatrixSumTarget(self, matrix, target):\n        m, n = len(matrix), len(matrix[0])\n        P = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(m):\n            for j in range(n):\n                P[i + 1][j + 1] = matrix[i][j] + P[i][j + 1] + P[i + 1][j] - P[i][j]\n        res = 0\n        for r1 in range(m):\n            for r2 in range(r1, m):\n                for c1 in range(n):\n                    for c2 in range(c1, n):\n                        if P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1] == target:\n                            res += 1\n        return res",
   "time": "O(m²n²)",
   "space": "O(m·n)",
   "explain": "Build a 2D prefix table and test all rectangles.",
   "frames": [],
   "alt": true
  }
 ]
};
