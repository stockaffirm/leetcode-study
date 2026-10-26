window.PROBLEM = {
 "id": "1428",
 "title": "Leftmost Column with at Least a One",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "A matrix of 0s and 1s whose rows are sorted. You can only read it through get(row, col) and dimensions(). Find the leftmost column that contains a 1.",
 "idea": "Start at the top-right. If the cell is 1, step left (a 1 may exist further left); if 0, step down. The last column where you saw a 1 is the answer.",
 "input": "[[0,0],[0,1]]",
 "output": "1",
 "notes": [],
 "best": "Start at the top-right. If the cell is 1, step left (a 1 may exist further left); if 0, step down. The last column where you saw a 1 is the answer.",
 "variants": [
  {
   "name": "Staircase walk from the top-right",
   "code": "class Solution:\n    def leftMostColumnWithOne(self, binaryMatrix):\n        rows, cols = binaryMatrix.dimensions()\n        r, c, ans = 0, cols - 1, -1\n        while r < rows and c >= 0:\n            if binaryMatrix.get(r, c) == 1:\n                ans = c\n                c -= 1\n            else: r += 1\n        return ans",
   "time": "O(rows + cols)",
   "space": "O(1)",
   "explain": "Start at the top-right. If the cell is 1, step left (a 1 may exist further left); if 0, step down. The last column where you saw a 1 is the answer.",
   "frames": []
  }
 ]
};
