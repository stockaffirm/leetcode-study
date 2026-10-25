window.PROBLEM = {
 "id": "1380",
 "title": "Lucky Numbers in a Matrix",
 "level": "Easy",
 "topic": "Matrix",
 "question": "A lucky number is a matrix element that is the minimum in its row and the maximum in its column. Return all lucky numbers (values are distinct). Example: [[3,7,8],[9,11,13],[15,16,17]] → [15].",
 "why": "[[3,7,8],[9,11,13],[15,16,17]]: 15 is the minimum of its row and the maximum of its column → [15].",
 "idea": "A lucky number is the minimum of its row and the maximum of its column. Compute every row minimum and every column maximum and keep the numbers that are both.",
 "input": "matrix = [[3,7,8],[9,11,13],[15,16,17]]",
 "output": "[15]",
 "notes": [],
 "best": "A lucky number is the minimum of its row and the maximum of its column. Compute every row minimum and every column maximum and keep the numbers that are both.",
 "variants": [
  {
   "name": "Smallest in its row and largest in its column",
   "code": "class Solution:\n    def luckyNumbers(self, matrix):\n        rows = [min(r) for r in matrix]\n        cols = [max(c) for c in zip(*matrix)]\n        return [v for i, r in enumerate(matrix) for j, v in enumerate(r) if v == rows[i] == cols[j]]",
   "time": "O(m·n)",
   "space": "O(m + n)",
   "explain": "A lucky number is the minimum of its row and the maximum of its column. Compute every row minimum and every column maximum and keep the numbers that are both.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set intersection",
   "tag": "Alternative",
   "code": "class Solution:\n    def luckyNumbers(self, matrix):\n        return list({min(r) for r in matrix} & {max(c) for c in zip(*matrix)})",
   "time": "O(m·n)",
   "space": "O(m + n)",
   "explain": "The lucky numbers are the intersection of the set of row minima and the set of column maxima (all values are distinct).",
   "frames": [],
   "alt": true
  }
 ]
};
