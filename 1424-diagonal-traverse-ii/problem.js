window.PROBLEM = {
 "id": "1424",
 "title": "Diagonal Traverse II",
 "level": "Medium",
 "topic": "Matrix",
 "question": "A list of rows of different lengths is given. Return all numbers in diagonal order: diagonal by diagonal, starting at the top-left, and inside a diagonal from the bottom-left to the top-right. Example: [[1,2,3],[4,5,6],[7,8,9]] → [1,4,2,7,5,3,8,6,9].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS from the corner",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDiagonalOrder(self, nums):\n        q = deque([(0, 0)])\n        res = []\n        while q:\n            i, j = q.popleft()\n            res.append(nums[i][j])\n            if j == 0 and i + 1 < len(nums):\n                q.append((i + 1, 0))\n            if j + 1 < len(nums[i]):\n                q.append((i, j + 1))\n        return res",
   "time": "O(total cells)",
   "space": "O(width)",
   "explain": "Start at (0,0); a cell adds the cell below it (only from column 0) and the cell to its right to the queue.",
   "frames": [],
   "alt": true
  }
 ]
};
