window.PROBLEM = {
 "id": "1314",
 "title": "Matrix Block Sum",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[[1,2,3],[4,5,6],[7,8,9]], k=1: the centre cell sums the whole grid, 45.",
 "idea": "answer[i][j] is the sum of the block from (i−k, j−k) to (i+k, j+k), clamped to the matrix. A 2D prefix-sum table gives any rectangle sum in O(1) by inclusion–exclusion.",
 "input": "mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1",
 "output": "[[12, 21, 16], [27, 45, 33], [24, 39, 28]]",
 "notes": [],
 "best": "answer[i][j] is the sum of the block from (i−k, j−k) to (i+k, j+k), clamped to the matrix. A 2D prefix-sum table gives any rectangle sum in O(1) by inclusion–exclusion.",
 "variants": [
  {
   "name": "2D prefix sums",
   "code": "class Solution:\n    def matrixBlockSum(self, mat, k):\n        m, n = len(mat), len(mat[0])\n        P = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(m):\n            for j in range(n):\n                P[i + 1][j + 1] = mat[i][j] + P[i][j + 1] + P[i + 1][j] - P[i][j]\n        res = [[0] * n for _ in range(m)]\n        for i in range(m):\n            for j in range(n):\n                r1, c1 = max(0, i - k), max(0, j - k)\n                r2, c2 = min(m, i + k + 1), min(n, j + k + 1)\n                res[i][j] = P[r2][c2] - P[r1][c2] - P[r2][c1] + P[r1][c1]\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "answer[i][j] is the sum of the block from (i−k, j−k) to (i+k, j+k), clamped to the matrix. A 2D prefix-sum table gives any rectangle sum in O(1) by inclusion–exclusion.",
   "frames": []
  }
 ]
};
