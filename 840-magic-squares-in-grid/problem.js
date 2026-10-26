window.PROBLEM = {
 "id": "840",
 "title": "Magic Squares In Grid",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "The sample 3×4 grid contains one 3×3 magic square (1–9 each once, all lines sum to 15).",
 "idea": "A 3×3 magic square of the numbers 1–9 must have 5 in the centre, hold each of 1–9 exactly once, and all rows, columns and both diagonals sum to 15. Test each window.",
 "input": "grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]",
 "output": "1",
 "notes": [],
 "best": "A 3×3 magic square of the numbers 1–9 must have 5 in the centre, hold each of 1–9 exactly once, and all rows, columns and both diagonals sum to 15. Test each window.",
 "variants": [
  {
   "name": "Test every 3×3 window",
   "code": "class Solution:\n    def numMagicSquaresInside(self, grid):\n        def magic(r, c):\n            cells = [grid[r + i][c + j] for i in range(3) for j in range(3)]\n            if sorted(cells) != list(range(1, 10)):\n                return False\n            g = [cells[0:3], cells[3:6], cells[6:9]]\n            lines = [sum(row) for row in g] + [sum(col) for col in zip(*g)]\n            lines += [g[0][0] + g[1][1] + g[2][2], g[0][2] + g[1][1] + g[2][0]]\n            return all(x == 15 for x in lines)\n        m, n = len(grid), len(grid[0])\n        return sum(magic(r, c) for r in range(m - 2) for c in range(n - 2))",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "A 3×3 magic square of the numbers 1–9 must have 5 in the centre, hold each of 1–9 exactly once, and all rows, columns and both diagonals sum to 15. Test each window.",
   "frames": []
  }
 ]
};
