window.PROBLEM = {
 "id": "2087",
 "title": "Minimum Cost Homecoming of a Robot in a Grid",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "From (1,0) to (2,3): enter row 2 (3) and columns 1,2,3 (2 + 6 + 7) → 18.",
 "idea": "Every path that moves only toward home enters the same rows and columns, and the cost of a move depends only on the row or column entered. So the minimum is the sum of rowCosts of every row passed (excluding the start row) plus colCosts of every column passed.",
 "input": "startPos = [1,0], homePos = [2,3], rowCosts = [5,4,3], colCosts = [8,2,6,7]",
 "output": "18",
 "notes": [],
 "best": "Every path that moves only toward home enters the same rows and columns, and the cost of a move depends only on the row or column entered. So the minimum is the sum of rowCosts of every row passed (excluding the start row) plus colCosts of every column passed.",
 "variants": [
  {
   "name": "Pay for every row and column you enter",
   "code": "class Solution:\n    def minCost(self, startPos, homePos, rowCosts, colCosts):\n        (r1, c1), (r2, c2) = startPos, homePos\n        step_r = 1 if r2 > r1 else -1\n        step_c = 1 if c2 > c1 else -1\n        total = 0\n        for r in range(r1 + step_r, r2 + step_r, step_r) if r1 != r2 else []:\n            total += rowCosts[r]\n        for c in range(c1 + step_c, c2 + step_c, step_c) if c1 != c2 else []:\n            total += colCosts[c]\n        return total",
   "time": "O(m + n)",
   "space": "O(1)",
   "explain": "Every path that moves only toward home enters the same rows and columns, and the cost of a move depends only on the row or column entered. So the minimum is the sum of rowCosts of every row passed (excluding the start row) plus colCosts of every column passed.",
   "frames": []
  }
 ]
};
