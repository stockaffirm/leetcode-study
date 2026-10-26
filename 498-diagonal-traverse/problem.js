window.PROBLEM = {
 "id": "498",
 "title": "Diagonal Traverse",
 "level": "Medium",
 "topic": "Matrix",
 "question": "Return all the numbers of an m × n matrix in diagonal order: start at the top-left, move up-right along a diagonal, then down-left along the next one, and so on. Example: [[1,2,3],[4,5,6],[7,8,9]] → [1,2,4,7,5,3,6,8,9].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate the bouncing walk",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDiagonalOrder(self, mat):\n        m, n = len(mat), len(mat[0])\n        res = []\n        i = j = 0\n        up = True\n        for _ in range(m * n):\n            res.append(mat[i][j])\n            if up:\n                if j == n - 1:\n                    i += 1\n                    up = False\n                elif i == 0:\n                    j += 1\n                    up = False\n                else:\n                    i -= 1\n                    j += 1\n            else:\n                if i == m - 1:\n                    j += 1\n                    up = True\n                elif j == 0:\n                    i += 1\n                    up = True\n                else:\n                    i += 1\n                    j -= 1\n        return res",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Move up-right or down-left and turn at the borders.",
   "frames": [],
   "alt": true
  }
 ]
};
