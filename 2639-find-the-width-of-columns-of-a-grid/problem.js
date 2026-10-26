window.PROBLEM = {
 "id": "2639",
 "title": "Find the Width of Columns of a Grid",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given a grid of whole numbers (possibly negative). The width of a column is the largest number of characters needed to write any number in it (a minus sign counts as a character). Return a list with the width of every column. Example: [[-15,1,3],[15,7,12],[5,6,-2]] → [3, 1, 2].",
 "why": "The width of a column is the number of characters of its longest number (a minus sign counts). Report each column's width.",
 "idea": "For each column compute the length of every number written as text and keep the maximum.",
 "input": "[[-15,1,3],[15,7,12],[5,6,-2]]",
 "output": "[3, 1, 2]",
 "notes": [],
 "best": "For each column compute the length of every number written as text and keep the maximum.",
 "variants": [
  {
   "name": "Longest number per column",
   "code": "class Solution:\n    def findColumnWidth(self, grid):\n        m, n = len(grid), len(grid[0])\n        res = []\n        for j in range(n):\n            w = 0\n            for i in range(m): w = max(w, len(str(grid[i][j])))\n            res.append(w)\n        return res",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "For each column compute the length of every number written as text and keep the maximum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "zip(*grid)",
   "tag": "Pythonic",
   "code": "class Solution:\n    def findColumnWidth(self, grid):\n        return [max(len(str(x)) for x in col) for col in zip(*grid)]",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "Transpose the grid and take the longest text per column.",
   "frames": [],
   "alt": true
  }
 ]
};
