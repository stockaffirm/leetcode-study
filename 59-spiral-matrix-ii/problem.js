window.PROBLEM = {
 "id": "59",
 "title": "Spiral Matrix II",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Fill an n×n matrix with 1…n² in spiral order.",
 "idea": "Keep four boundaries (top, bottom, left, right). Fill the top row, right column, bottom row and left column in turn, shrinking the boundary after each side.",
 "input": "n = 3",
 "output": "[[1,2,3],[8,9,4],[7,6,5]]",
 "notes": [],
 "best": "Keep four boundaries (top, bottom, left, right). Fill the top row, right column, bottom row and left column in turn, shrinking the boundary after each side.",
 "variants": [
  {
   "name": "Peel the layers",
   "code": "class Solution:\n    def generateMatrix(self, n):\n        res = [[0] * n for _ in range(n)]\n        top, bottom, left, right = 0, n - 1, 0, n - 1\n        num = 1\n        while top <= bottom and left <= right:\n            for j in range(left, right + 1):\n                res[top][j] = num\n                num += 1\n            top += 1\n            for i in range(top, bottom + 1):\n                res[i][right] = num\n                num += 1\n            right -= 1\n            if top <= bottom:\n                for j in range(right, left - 1, -1):\n                    res[bottom][j] = num\n                    num += 1\n                bottom -= 1\n            if left <= right:\n                for i in range(bottom, top - 1, -1):\n                    res[i][left] = num\n                    num += 1\n                left += 1\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Keep four boundaries (top, bottom, left, right). Fill the top row, right column, bottom row and left column in turn, shrinking the boundary after each side.",
   "frames": []
  }
 ]
};
