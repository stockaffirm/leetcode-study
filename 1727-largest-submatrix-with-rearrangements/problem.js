window.PROBLEM = {
 "id": "1727",
 "title": "Largest Submatrix With Rearrangements",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "[[0,0,1],[1,1,1],[1,0,1]] → rearrange columns to get a 2×2 block of ones → 4.",
 "idea": "Columns can be reordered freely. For each row compute the heights of consecutive ones ending there, sort the heights descending, and the best rectangle in this row has area max over j of height[j] × (j + 1).",
 "input": "matrix = [[0,0,1],[1,1,1],[1,0,1]]",
 "output": "4",
 "notes": [],
 "best": "Columns can be reordered freely. For each row compute the heights of consecutive ones ending there, sort the heights descending, and the best rectangle in this row has area max over j of height[j] × (j + 1).",
 "variants": [
  {
   "name": "Column heights, sort each row descending",
   "code": "class Solution:\n    def largestSubmatrix(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        h = [0] * n\n        best = 0\n        for i in range(m):\n            for j in range(n):\n                h[j] = h[j] + 1 if matrix[i][j] else 0\n            for j, v in enumerate(sorted(h, reverse=True)):\n                best = max(best, v * (j + 1))\n        return best",
   "time": "O(m·n log n)",
   "space": "O(n)",
   "explain": "Columns can be reordered freely. For each row compute the heights of consecutive ones ending there, sort the heights descending, and the best rectangle in this row has area max over j of height[j] × (j + 1).",
   "frames": []
  }
 ]
};
