window.PROBLEM = {
 "id": "3402",
 "title": "Minimum Operations to Make Columns Strictly Increasing",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
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
   "frames": []
  }
 ]
};
