window.PROBLEM = {
 "id": "661",
 "title": "Image Smoother",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "Replace every pixel by the average (rounded down) of itself and its up to 8 neighbours.",
 "idea": "For each cell collect the values in the 3×3 window that lie inside the grid and divide the sum by their count.",
 "input": "[[1,1,1],[1,0,1],[1,1,1]]",
 "output": "[[0,0,0],[0,0,0],[0,0,0]]",
 "notes": [],
 "best": "For each cell collect the values in the 3×3 window that lie inside the grid and divide the sum by their count.",
 "variants": [
  {
   "name": "Average of the 3×3 neighbourhood",
   "code": "class Solution:\n    def imageSmoother(self, img):\n        m, n = len(img), len(img[0])\n        res = [[0] * n for _ in range(m)]\n        for i in range(m):\n            for j in range(n):\n                vals = [img[a][b] for a in range(max(0, i - 1), min(m, i + 2)) for b in range(max(0, j - 1), min(n, j + 2))]\n                res[i][j] = sum(vals) // len(vals)\n        return res",
   "time": "O(9·m·n)",
   "space": "O(m·n)",
   "explain": "For each cell collect the values in the 3×3 window that lie inside the grid and divide the sum by their count.",
   "frames": []
  }
 ]
};
