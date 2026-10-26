window.PROBLEM = {
 "id": "119",
 "title": "Pascal's Triangle II",
 "level": "Easy",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
