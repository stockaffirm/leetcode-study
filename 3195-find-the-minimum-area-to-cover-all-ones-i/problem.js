window.PROBLEM = {
 "id": "3195",
 "title": "Find the Minimum Area to Cover All Ones I",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
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
   "frames": []
  }
 ]
};
