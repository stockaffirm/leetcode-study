window.PROBLEM = {
 "id": "498",
 "title": "Diagonal Traverse",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Diagonal 1 is just [1]; the next goes down-left: 2, 4; the next goes up-right: 7, 5, 3; then 6, 8; then 9.",
 "idea": "All cells on one diagonal share the same i + j. Collect each diagonal top-to-bottom; for even i + j the walk goes up-right, so reverse that diagonal.",
 "input": "mat = [[1,2,3],[4,5,6],[7,8,9]]",
 "output": "[1,2,4,7,5,3,6,8,9]",
 "notes": [],
 "best": "All cells on one diagonal share the same i + j. Collect each diagonal top-to-bottom; for even i + j the walk goes up-right, so reverse that diagonal.",
 "variants": [
  {
   "name": "Group by i + j, flip every other diagonal",
   "code": "class Solution:\n    def findDiagonalOrder(self, mat):\n        m, n = len(mat), len(mat[0])\n        diags = defaultdict(list)\n        for i in range(m):\n            for j in range(n):\n                diags[i + j].append(mat[i][j])\n        res = []\n        for d in range(m + n - 1):\n            res += diags[d][::-1] if d % 2 == 0 else diags[d]\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "All cells on one diagonal share the same i + j. Collect each diagonal top-to-bottom; for even i + j the walk goes up-right, so reverse that diagonal.",
   "frames": []
  }
 ]
};
