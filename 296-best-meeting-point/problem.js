window.PROBLEM = {
 "id": "296",
 "title": "Best Meeting Point",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "In a grid, each 1 is a friend's home. Choose a meeting point (any cell); the total travel distance is the sum of the Manhattan distances (|rows| + |columns|) from every home. Return the smallest possible total distance. Example: [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]] → 6.",
 "why": "Friends live at the 1s of a grid. Choose a meeting cell that minimises their total walking distance (Manhattan: |dx| + |dy|).",
 "idea": "Rows and columns are independent. The sum of absolute distances along one axis is smallest at the MEDIAN, so take the median row and the median column.",
 "input": "[[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]",
 "output": "6",
 "notes": [],
 "best": "Rows and columns are independent. The sum of absolute distances along one axis is smallest at the MEDIAN, so take the median row and the median column.",
 "variants": [
  {
   "name": "Medians of rows and of columns",
   "code": "class Solution:\n    def minTotalDistance(self, grid):\n        rows, cols = [], []\n        for i in range(len(grid)):\n            for j in range(len(grid[0])):\n                if grid[i][j] == 1:\n                    rows.append(i)\n                    cols.append(j)\n        cols.sort()\n        r, c = rows[len(rows) // 2], cols[len(cols) // 2]\n        return sum(abs(x - r) for x in rows) + sum(abs(y - c) for y in cols)",
   "time": "O(m·n log)",
   "space": "O(m·n)",
   "explain": "Rows and columns are independent. The sum of absolute distances along one axis is smallest at the MEDIAN, so take the median row and the median column.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every cell",
   "tag": "Brute force",
   "code": "class Solution:\n    def minTotalDistance(self, grid):\n        homes = [(i, j) for i in range(len(grid)) for j in range(len(grid[0])) if grid[i][j] == 1]\n        best = float('inf')\n        for r in range(len(grid)):\n            for c in range(len(grid[0])):\n                best = min(best, sum(abs(x - r) + abs(y - c) for x, y in homes))\n        return best",
   "time": "O(m·n·k)",
   "space": "O(k)",
   "explain": "Compute the total distance from every grid cell to all friends and take the smallest.",
   "frames": [],
   "alt": true
  }
 ]
};
