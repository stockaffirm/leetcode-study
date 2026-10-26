window.PROBLEM = {
 "id": "311",
 "title": "Sparse Matrix Multiplication",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Multiply two matrices that contain mostly zeros.",
 "idea": "For every non-zero mat1[i][k], add it times row k of mat2 into row i of the answer — and skip the whole inner loop for zeros.",
 "input": "[[1,0,0],[-1,0,3]] × [[7,0,0],[0,0,0],[0,0,1]]",
 "output": "[[7,0,0],[-7,0,3]]",
 "notes": [],
 "best": "For every non-zero mat1[i][k], add it times row k of mat2 into row i of the answer — and skip the whole inner loop for zeros.",
 "variants": [
  {
   "name": "Skip the zeros",
   "code": "class Solution:\n    def multiply(self, mat1, mat2):\n        m, kk, n = len(mat1), len(mat2), len(mat2[0])\n        res = [[0] * n for _ in range(m)]\n        for i in range(m):\n            for k in range(kk):\n                if mat1[i][k] == 0: continue\n                for j in range(n):\n                    if mat2[k][j]: res[i][j] += mat1[i][k] * mat2[k][j]\n        return res",
   "time": "O(m·k·n) worst, fast when sparse",
   "space": "O(m·n)",
   "explain": "For every non-zero mat1[i][k], add it times row k of mat2 into row i of the answer — and skip the whole inner loop for zeros.",
   "frames": []
  }
 ]
};
