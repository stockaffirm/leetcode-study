window.PROBLEM = {
 "id": "2643",
 "title": "Row With Maximum Ones",
 "level": "Easy",
 "topic": "Matrix",
 "question": "Return [index of the row with the most ones, that count], using the smallest index on ties. Example: [[0,1],[1,0]] → [0,1].",
 "why": "[[0,1],[1,0]] → both rows have one 1 → [0, 1].",
 "idea": "Count the ones in each row and return [row index, count] for the row with the most ones (the smallest index on ties).",
 "input": "mat = [[0,1],[1,0]]",
 "output": "[0, 1]",
 "notes": [],
 "best": "Count the ones in each row and return [row index, count] for the row with the most ones (the smallest index on ties).",
 "variants": [
  {
   "name": "Count ones per row; smallest index on ties",
   "code": "class Solution:\n    def rowAndMaximumOnes(self, mat):\n        best = max(range(len(mat)), key=lambda i: (sum(mat[i]), -i))\n        return [best, sum(mat[best])]",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Count the ones in each row and return [row index, count] for the row with the most ones (the smallest index on ties).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Loop with a running best",
   "tag": "Alternative",
   "code": "class Solution:\n    def rowAndMaximumOnes(self, mat):\n        bi, bc = 0, -1\n        for i, row in enumerate(mat):\n            c = sum(row)\n            if c > bc:\n                bi, bc = i, c\n        return [bi, bc]",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Keep the best row so far.",
   "frames": [],
   "alt": true
  }
 ]
};
