window.PROBLEM = {
 "id": "463",
 "title": "Island Perimeter",
 "level": "Easy",
 "topic": "Matrix",
 "question": "A grid shows an island: 1 is land, 0 is water (the grid is surrounded by water; there is exactly one island, with no lakes). Return the length of the island's perimeter. Example: [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] → 16.",
 "why": "A grid with a single island (1 = land). Return the length of its perimeter.",
 "idea": "Each land cell contributes 4 sides, minus 2 for every pair of land cells that touch (each shared edge hides two sides).",
 "input": "[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]",
 "output": "16",
 "notes": [],
 "best": "Each land cell contributes 4 sides, minus 2 for every pair of land cells that touch (each shared edge hides two sides).",
 "variants": [
  {
   "name": "Count land edges",
   "code": "class Solution:\n    def islandPerimeter(self, grid):\n        total = 0\n        for i in range(len(grid)):\n            for j in range(len(grid[0])):\n                if grid[i][j]:\n                    total += 4\n                    if i and grid[i - 1][j]: total -= 2\n                    if j and grid[i][j - 1]: total -= 2\n        return total",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Each land cell contributes 4 sides, minus 2 for every pair of land cells that touch (each shared edge hides two sides).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count exposed sides",
   "tag": "Alternative",
   "code": "class Solution:\n    def islandPerimeter(self, grid):\n        m, n = len(grid), len(grid[0])\n        total = 0\n        for i in range(m):\n            for j in range(n):\n                if not grid[i][j]: continue\n                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = i + di, j + dj\n                    if not (0 <= a < m and 0 <= b < n) or not grid[a][b]: total += 1\n        return total",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "For every land cell count neighbours that are water or outside the grid.",
   "frames": [],
   "alt": true
  }
 ]
};
