window.PROBLEM = {
 "id": "119",
 "title": "Pascal's Triangle II",
 "level": "Easy",
 "topic": "Dynamic Programming",
 "question": "Return the row rowIndex (0-indexed) of Pascal's triangle. Example: 3 → [1,3,3,1].",
 "why": "rowIndex=3 → [1,3,3,1].",
 "idea": "Start with [1]. For each next row update the values from right to left so each number becomes the sum of the two above it, then append a 1.",
 "input": "rowIndex = 3",
 "output": "[1, 3, 3, 1]",
 "notes": [],
 "best": "Start with [1]. For each next row update the values from right to left so each number becomes the sum of the two above it, then append a 1.",
 "variants": [
  {
   "name": "Build one row in place",
   "code": "class Solution:\n    def getRow(self, rowIndex):\n        row = [1]\n        for _ in range(rowIndex):\n            row = [1] + [row[i] + row[i + 1] for i in range(len(row) - 1)] + [1]\n        return row",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Start with [1]. For each next row update the values from right to left so each number becomes the sum of the two above it, then append a 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binomial coefficients",
   "tag": "Alternative",
   "code": "class Solution:\n    def getRow(self, rowIndex):\n        row = [1]\n        for k in range(1, rowIndex + 1):\n            row.append(row[-1] * (rowIndex - k + 1) // k)\n        return row",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Row n holds C(n, 0) … C(n, n).",
   "frames": [],
   "alt": true
  }
 ]
};
