window.PROBLEM = {
 "id": "3195",
 "title": "Find the Minimum Area to Cover All Ones I",
 "level": "Medium",
 "topic": "Matrix",
 "question": "Binary grid with at least one 1. Return the smallest area of a rectangle (sides parallel to the grid) that contains every 1. Example: [[0,1,0],[1,0,1]] → 6.",
 "why": "[[0,1,0],[1,0,1]]: ones span rows 0-1 and columns 0-2 → 2 × 3 = 6.",
 "idea": "The smallest rectangle covering every 1 is the bounding box: from the smallest to the largest row and column that contain a 1.",
 "input": "grid = [[0,1,0],[1,0,1]]",
 "output": "6",
 "notes": [],
 "best": "The smallest rectangle covering every 1 is the bounding box: from the smallest to the largest row and column that contain a 1.",
 "variants": [
  {
   "name": "Bounding box of the ones",
   "code": "class Solution:\n    def minimumArea(self, grid):\n        rows = [i for i, r in enumerate(grid) if any(r)]\n        cols = [j for j in range(len(grid[0])) if any(r[j] for r in grid)]\n        return (rows[-1] - rows[0] + 1) * (cols[-1] - cols[0] + 1)",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "The smallest rectangle covering every 1 is the bounding box: from the smallest to the largest row and column that contain a 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Track min and max while scanning",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumArea(self, grid):\n        r1 = c1 = 10**9\n        r2 = c2 = -1\n        for i, row in enumerate(grid):\n            for j, v in enumerate(row):\n                if v:\n                    r1, r2 = min(r1, i), max(r2, i)\n                    c1, c2 = min(c1, j), max(c2, j)\n        return (r2 - r1 + 1) * (c2 - c1 + 1)",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Visit every cell and keep the smallest/largest row and column that held a 1.",
   "frames": [],
   "alt": true
  }
 ]
};
