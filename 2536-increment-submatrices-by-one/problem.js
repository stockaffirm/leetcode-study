window.PROBLEM = {
 "id": "2536",
 "title": "Increment Submatrices by One",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "n=3 with two rectangle additions gives [[1,1,0],[1,2,1],[0,1,1]].",
 "idea": "Instead of touching every cell of each rectangle, mark only its four corners in a difference grid (+1 top-left, −1 just right, −1 just below, +1 diagonal). A final 2D prefix sum turns the marks into the real counts.",
 "input": "n = 3, queries = [[1,1,2,2],[0,0,1,1]]",
 "output": "[[1, 1, 0], [1, 2, 1], [0, 1, 1]]",
 "notes": [],
 "best": "Instead of touching every cell of each rectangle, mark only its four corners in a difference grid (+1 top-left, −1 just right, −1 just below, +1 diagonal). A final 2D prefix sum turns the marks into the real counts.",
 "variants": [
  {
   "name": "2D difference array",
   "code": "class Solution:\n    def rangeAddQueries(self, n, queries):\n        d = [[0] * (n + 1) for _ in range(n + 1)]\n        for r1, c1, r2, c2 in queries:\n            d[r1][c1] += 1\n            d[r1][c2 + 1] -= 1\n            d[r2 + 1][c1] -= 1\n            d[r2 + 1][c2 + 1] += 1\n        for i in range(n + 1):\n            for j in range(n + 1):\n                if i:\n                    d[i][j] += d[i - 1][j]\n                if j:\n                    d[i][j] += d[i][j - 1]\n                if i and j:\n                    d[i][j] -= d[i - 1][j - 1]\n        return [row[:n] for row in d[:n]]",
   "time": "O(n² + q)",
   "space": "O(n²)",
   "explain": "Instead of touching every cell of each rectangle, mark only its four corners in a difference grid (+1 top-left, −1 just right, −1 just below, +1 diagonal). A final 2D prefix sum turns the marks into the real counts.",
   "frames": []
  }
 ]
};
