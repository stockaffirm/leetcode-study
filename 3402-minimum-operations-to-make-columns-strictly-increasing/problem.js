window.PROBLEM = {
 "id": "3402",
 "title": "Minimum Operations to Make Columns Strictly Increasing",
 "level": "Easy",
 "topic": "Matrix",
 "question": "In one operation you may add 1 to any grid cell. Return the minimum number of operations to make every column strictly increasing from top to bottom. Example: [[3,2],[1,3],[3,4],[0,1]] → 15.",
 "why": "Column [3,1,3,0] becomes [3,4,5,6]: 0 + 3 + 2 + 6 = 11 operations for that column.",
 "idea": "Handle each column independently, top to bottom. A cell must be at least (value above) + 1; if it is smaller, raise it by the difference and count those increments.",
 "input": "grid = [[3,2],[1,3],[3,4],[0,1]]",
 "output": "15",
 "notes": [],
 "best": "Handle each column independently, top to bottom. A cell must be at least (value above) + 1; if it is smaller, raise it by the difference and count those increments.",
 "variants": [
  {
   "name": "Raise each cell just above the one over it",
   "code": "class Solution:\n    def minimumOperations(self, grid):\n        ops = 0\n        for j in range(len(grid[0])):\n            prev = grid[0][j]\n            for i in range(1, len(grid)):\n                need = max(0, prev + 1 - grid[i][j])\n                ops += need\n                prev = grid[i][j] + need\n        return ops",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Handle each column independently, top to bottom. A cell must be at least (value above) + 1; if it is smaller, raise it by the difference and count those increments.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk columns with zip",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumOperations(self, grid):\n        ops = 0\n        for col in zip(*grid):\n            prev = col[0]\n            for v in col[1:]:\n                if v <= prev:\n                    ops += prev + 1 - v\n                    v = prev + 1\n                prev = v\n        return ops",
   "time": "O(m·n)",
   "space": "O(m)",
   "explain": "Transpose the grid and fix each column in turn.",
   "frames": [],
   "alt": true
  }
 ]
};
