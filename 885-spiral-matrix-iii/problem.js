window.PROBLEM = {
 "id": "885",
 "title": "Spiral Matrix III",
 "level": "Medium",
 "topic": "Matrix",
 "question": "Walk a clockwise spiral on a rows×cols grid starting at (rStart, cStart) facing east, even outside the grid, and return the grid cells in the order you first visit them. Example: rows=1, cols=4, start (0,0) → [[0,0],[0,1],[0,2],[0,3]].",
 "why": "A 1×4 grid starting at (0,0): the spiral visits (0,0),(0,1),(0,2),(0,3).",
 "idea": "Walk a spiral outward from the start: segments of length 1,1,2,2,3,3,… turning right each time (east, south, west, north). Record every visited cell that lies in the grid until all rows × cols cells are collected.",
 "input": "rows = 1, cols = 4, rStart = 0, cStart = 0",
 "output": "[[0, 0], [0, 1], [0, 2], [0, 3]]",
 "notes": [],
 "best": "Walk a spiral outward from the start: segments of length 1,1,2,2,3,3,… turning right each time (east, south, west, north). Record every visited cell that lies in the grid until all rows × cols cells are collected.",
 "variants": [
  {
   "name": "Walk the spiral, keep cells inside the grid",
   "code": "class Solution:\n    def spiralMatrixIII(self, rows, cols, rStart, cStart):\n        res = [[rStart, cStart]]\n        dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]\n        r, c, d, length = rStart, cStart, 0, 1\n        while len(res) < rows * cols:\n            for _ in range(2):\n                dr, dc = dirs[d % 4]\n                for _ in range(length):\n                    r, c = r + dr, c + dc\n                    if 0 <= r < rows and 0 <= c < cols:\n                        res.append([r, c])\n                d += 1\n            length += 1\n        return res",
   "time": "O(max(m,n)²)",
   "space": "O(m·n)",
   "explain": "Walk a spiral outward from the start: segments of length 1,1,2,2,3,3,… turning right each time (east, south, west, north). Record every visited cell that lies in the grid until all rows × cols cells are collected.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Generate with direction vectors",
   "tag": "Alternative",
   "code": "class Solution:\n    def spiralMatrixIII(self, rows, cols, rStart, cStart):\n        res = [[rStart, cStart]]\n        r, c = rStart, cStart\n        dr, dc = 0, 1\n        steps = 1\n        while len(res) < rows * cols:\n            for _ in range(2):\n                for _ in range(steps):\n                    r, c = r + dr, c + dc\n                    if 0 <= r < rows and 0 <= c < cols:\n                        res.append([r, c])\n                dr, dc = dc, -dr\n            steps += 1\n        return res",
   "time": "O(max(m,n)²)",
   "space": "O(m·n)",
   "explain": "Same spiral using a step counter.",
   "frames": [],
   "alt": true
  }
 ]
};
