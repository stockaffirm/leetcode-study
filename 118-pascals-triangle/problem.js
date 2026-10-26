window.PROBLEM = {
 "id": "118",
 "title": "Pascal's Triangle",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
