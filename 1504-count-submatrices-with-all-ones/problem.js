window.PROBLEM = {
 "id": "1504",
 "title": "Count Submatrices With All Ones",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "[[1,0,1],[1,1,0],[1,1,0]] contains 13 all-ones submatrices.",
 "idea": "Let h[j] be the number of consecutive ones above (and including) the current row in column j. For each row and each column j count the rectangles whose bottom-right corner is (row, j): extend leftwards keeping the minimum height and add it up.",
 "input": "mat = [[1,0,1],[1,1,0],[1,1,0]]",
 "output": "13",
 "notes": [],
 "best": "Let h[j] be the number of consecutive ones above (and including) the current row in column j. For each row and each column j count the rectangles whose bottom-right corner is (row, j): extend leftwards keeping the minimum height and add it up.",
 "variants": [
  {
   "name": "Histogram heights per row",
   "code": "class Solution:\n    def numSubmat(self, mat):\n        m, n = len(mat), len(mat[0])\n        h = [0] * n\n        total = 0\n        for i in range(m):\n            for j in range(n):\n                h[j] = h[j] + 1 if mat[i][j] else 0\n            for j in range(n):\n                low = h[j]\n                for k in range(j, -1, -1):\n                    low = min(low, h[k])\n                    if low == 0:\n                        break\n                    total += low\n        return total",
   "time": "O(m·n²)",
   "space": "O(n)",
   "explain": "Let h[j] be the number of consecutive ones above (and including) the current row in column j. For each row and each column j count the rectangles whose bottom-right corner is (row, j): extend leftwards keeping the minimum height and add it up.",
   "frames": []
  }
 ]
};
