window.PROBLEM = {
 "id": "37",
 "title": "Sudoku Solver",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "Fill in a partly completed 9 × 9 Sudoku board (digits '1'–'9', '.' for an empty cell) so that every row, every column and every one of the nine 3 × 3 boxes contains each digit 1–9 exactly once. Change the board itself; exactly one solution exists. Example: a board with six cells blanked out of a solved grid → the blanks get their original digits.",
 "why": "Fill the empty cells of a Sudoku so every row, column and 3×3 box contains 1–9 exactly once.",
 "idea": "Remember which digits each row, column and box already uses. For each empty cell try the digits that fit, move on, and undo the choice if you get stuck (backtracking).",
 "input": "a board with 6 empty cells",
 "output": "the completed board",
 "notes": [],
 "best": "Remember which digits each row, column and box already uses. For each empty cell try the digits that fit, move on, and undo the choice if you get stuck (backtracking).",
 "variants": [
  {
   "name": "Backtracking with row/column/box sets",
   "code": "class Solution:\n    def solveSudoku(self, board):\n        rows, cols, boxes = [set() for _ in range(9)], [set() for _ in range(9)], [set() for _ in range(9)]\n        empties = []\n        for r in range(9):\n            for c in range(9):\n                v = board[r][c]\n                if v == '.': empties.append((r, c))\n                else:\n                    rows[r].add(v)\n                    cols[c].add(v)\n                    boxes[r // 3 * 3 + c // 3].add(v)\n        def solve(k):\n            if k == len(empties): return True\n            r, c = empties[k]\n            b = r // 3 * 3 + c // 3\n            for d in '123456789':\n                if d not in rows[r] and d not in cols[c] and d not in boxes[b]:\n                    board[r][c] = d\n                    rows[r].add(d)\n                    cols[c].add(d)\n                    boxes[b].add(d)\n                    if solve(k + 1): return True\n                    rows[r].remove(d)\n                    cols[c].remove(d)\n                    boxes[b].remove(d)\n            board[r][c] = '.'\n            return False\n        solve(0)",
   "time": "exponential worst case",
   "space": "O(1)",
   "explain": "Remember which digits each row, column and box already uses. For each empty cell try the digits that fit, move on, and undo the choice if you get stuck (backtracking).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bitmask version",
   "tag": "Alternative",
   "code": "class Solution:\n    def solveSudoku(self, board):\n        rows, cols, boxes = [0] * 9, [0] * 9, [0] * 9\n        empties = []\n        for r in range(9):\n            for c in range(9):\n                if board[r][c] == '.': empties.append((r, c))\n                else:\n                    bit = 1 << int(board[r][c])\n                    rows[r] |= bit\n                    cols[c] |= bit\n                    boxes[r // 3 * 3 + c // 3] |= bit\n        def solve(k):\n            if k == len(empties): return True\n            r, c = empties[k]\n            b = r // 3 * 3 + c // 3\n            used = rows[r] | cols[c] | boxes[b]\n            for d in range(1, 10):\n                bit = 1 << d\n                if not used & bit:\n                    board[r][c] = str(d)\n                    rows[r] |= bit\n                    cols[c] |= bit\n                    boxes[b] |= bit\n                    if solve(k + 1): return True\n                    rows[r] ^= bit\n                    cols[c] ^= bit\n                    boxes[b] ^= bit\n            board[r][c] = '.'\n            return False\n        solve(0)",
   "time": "exponential worst case",
   "space": "O(1)",
   "explain": "Store used digits of each row, column and box as bits of an integer.",
   "frames": [],
   "alt": true
  }
 ]
};
