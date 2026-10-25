window.PROBLEM = {
 "id": "2373",
 "title": "Largest Local Values in a Matrix",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given an n × n grid of numbers. Build a smaller (n − 2) × (n − 2) grid where each cell holds the LARGEST value found in the 3 × 3 block of the original grid centred on the matching position. Example: [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]] → [[9,9],[8,6]].",
 "why": "Make a smaller grid where each cell is the largest value in the matching 3×3 block of the original.",
 "idea": "For each top-left corner of a 3×3 window take the maximum of its nine cells.",
 "input": "[[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]",
 "output": "[[9,9],[8,6]]",
 "notes": [],
 "best": "For each top-left corner of a 3×3 window take the maximum of its nine cells.",
 "variants": [
  {
   "name": "Max of every 3×3 window",
   "code": "class Solution:\n    def largestLocal(self, grid):\n        n = len(grid)\n        res = []\n        for i in range(n - 2):\n            row = []\n            for j in range(n - 2):\n                m = 0\n                for a in range(3):\n                    for b in range(3): m = max(m, grid[i + a][j + b])\n                row.append(m)\n            res.append(row)\n        return res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "For each top-left corner of a 3×3 window take the maximum of its nine cells.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One expression",
   "tag": "Pythonic",
   "code": "class Solution:\n    def largestLocal(self, grid):\n        n = len(grid)\n        return [[max(grid[i + a][j + b] for a in range(3) for b in range(3)) for j in range(n - 2)] for i in range(n - 2)]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "The same window maximum as a nested comprehension.",
   "frames": [],
   "alt": true
  }
 ]
};
