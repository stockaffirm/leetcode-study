window.PROBLEM = {
 "id": "118",
 "title": "Pascal's Triangle",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return the first numRows rows of Pascal's triangle, where each inner number is the sum of the two numbers above it (and each row starts and ends with 1). Example: numRows=5 → [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]].",
 "why": "Return the first numRows rows of Pascal's triangle (each number is the sum of the two above it).",
 "idea": "Each new row starts and ends with 1; the inside numbers are sums of neighbouring numbers of the previous row.",
 "input": "numRows = 5",
 "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
 "notes": [],
 "best": "Each new row starts and ends with 1; the inside numbers are sums of neighbouring numbers of the previous row.",
 "variants": [
  {
   "name": "Build row from the previous row",
   "code": "class Solution:\n    def generate(self, numRows):\n        rows = [[1]]\n        for _ in range(numRows - 1):\n            prev = rows[-1]\n            rows.append([1] + [a + b for a, b in zip(prev, prev[1:])] + [1])\n        return rows",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Each new row starts and ends with 1; the inside numbers are sums of neighbouring numbers of the previous row.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binomial coefficients",
   "tag": "Alternative",
   "code": "class Solution:\n    def generate(self, numRows):\n        return [[comb(r, c) for c in range(r + 1)] for r in range(numRows)]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Entry (r, c) is C(r, c).",
   "frames": [],
   "alt": true
  }
 ]
};
