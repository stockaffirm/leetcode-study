window.PROBLEM = {
 "id": "661",
 "title": "Image Smoother",
 "level": "Easy",
 "topic": "Matrix",
 "question": "Each cell of a grayscale image is replaced by the average (rounded down) of itself and all its existing neighbours in the 3×3 block around it (fewer cells at the borders). Return the new image. Example: [[1,1,1],[1,0,1],[1,1,1]] → all zeros.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "2D prefix sums",
   "tag": "Alternative",
   "code": "class Solution:\n    def imageSmoother(self, img):\n        m, n = len(img), len(img[0])\n        P = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(m):\n            for j in range(n): P[i + 1][j + 1] = img[i][j] + P[i][j + 1] + P[i + 1][j] - P[i][j]\n        res = [[0] * n for _ in range(m)]\n        for i in range(m):\n            for j in range(n):\n                r1, r2, c1, c2 = max(0, i - 1), min(m, i + 2), max(0, j - 1), min(n, j + 2)\n                s = P[r2][c2] - P[r1][c2] - P[r2][c1] + P[r1][c1]\n                res[i][j] = s // ((r2 - r1) * (c2 - c1))\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Window sums in O(1) each from a prefix-sum table.",
   "frames": [],
   "alt": true
  }
 ]
};
