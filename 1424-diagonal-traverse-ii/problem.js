window.PROBLEM = {
 "id": "1424",
 "title": "Diagonal Traverse II",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Diagonal 1 holds 2 and 4; going bottom-left to top-right gives 4 then 2. The result is 1, 4, 2, 7, 5, 3, 8, 6, 9.",
 "idea": "Cells on a diagonal share i + j. Walk the rows from the bottom up and append each value to its diagonal's list; then each diagonal is already ordered bottom-left to top-right. Join the diagonals in order (works for ragged rows too).",
 "input": "nums = [[1,2,3],[4,5,6],[7,8,9]]",
 "output": "[1,4,2,7,5,3,8,6,9]",
 "notes": [],
 "best": "Cells on a diagonal share i + j. Walk the rows from the bottom up and append each value to its diagonal's list; then each diagonal is already ordered bottom-left to top-right. Join the diagonals in order (works for ragged rows too).",
 "variants": [
  {
   "name": "Group by i + j, rows bottom-up",
   "code": "class Solution:\n    def findDiagonalOrder(self, nums):\n        diags = defaultdict(list)\n        for i in range(len(nums) - 1, -1, -1):\n            for j, v in enumerate(nums[i]):\n                diags[i + j].append(v)\n        res = []\n        d = 0\n        while d in diags:\n            res += diags[d]\n            d += 1\n        return res",
   "time": "O(total cells)",
   "space": "O(total cells)",
   "explain": "Cells on a diagonal share i + j. Walk the rows from the bottom up and append each value to its diagonal's list; then each diagonal is already ordered bottom-left to top-right. Join the diagonals in order (works for ragged rows too).",
   "frames": []
  }
 ]
};
