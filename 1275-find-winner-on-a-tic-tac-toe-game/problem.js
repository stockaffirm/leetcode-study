window.PROBLEM = {
 "id": "1275",
 "title": "Find Winner on a Tic-Tac-Toe Game",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Players A and B play tic-tac-toe on a 3×3 board, taking turns (A first, marking positions [row, col]). Given the moves in order, return 'A' or 'B' if that player has three in a row, column or diagonal; otherwise 'Draw' if all 9 cells are filled, or 'Pending'. Example: [[0,0],[2,0],[1,1],[2,1],[2,2]] → 'A'.",
 "why": "Players A and B alternate placing marks on a 3×3 board (A first). Given the moves, report 'A' or 'B' if someone has three in a row, otherwise 'Draw' (board full) or 'Pending'.",
 "idea": "Keep a counter per row, column and diagonal: +1 for A, −1 for B. A line is won when its counter reaches ±3.",
 "input": "[[0,0],[2,0],[1,1],[2,1],[2,2]]",
 "output": "'A'",
 "notes": [],
 "best": "Keep a counter per row, column and diagonal: +1 for A, −1 for B. A line is won when its counter reaches ±3.",
 "variants": [
  {
   "name": "Row, column and diagonal counters",
   "code": "class Solution:\n    def tictactoe(self, moves):\n        rows, cols = [0] * 3, [0] * 3\n        diag = anti = 0\n        for i, (r, c) in enumerate(moves):\n            p = 1 if i % 2 == 0 else -1\n            rows[r] += p\n            cols[c] += p\n            if r == c: diag += p\n            if r + c == 2: anti += p\n            if 3 in (abs(rows[r]), abs(cols[c]), abs(diag), abs(anti)):\n                return 'A' if p == 1 else 'B'\n        return 'Draw' if len(moves) == 9 else 'Pending'",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep a counter per row, column and diagonal: +1 for A, −1 for B. A line is won when its counter reaches ±3.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Fill the board and check lines",
   "tag": "Alternative",
   "code": "class Solution:\n    def tictactoe(self, moves):\n        g = [[''] * 3 for _ in range(3)]\n        for i, (r, c) in enumerate(moves): g[r][c] = 'A' if i % 2 == 0 else 'B'\n        lines = [[(i, j) for j in range(3)] for i in range(3)] + [[(j, i) for j in range(3)] for i in range(3)] + [[(i, i) for i in range(3)], [(i, 2 - i) for i in range(3)]]\n        for p in 'AB':\n            if any(all(g[r][c] == p for r, c in line) for line in lines): return p\n        return 'Draw' if len(moves) == 9 else 'Pending'",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Place the marks and test the eight winning lines.",
   "frames": [],
   "alt": true
  }
 ]
};
