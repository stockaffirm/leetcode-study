window.PROBLEM = {
 "id": "2664",
 "title": "The Knight's Tour",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "A 1 × 1 board → [[0]].",
 "idea": "Mark the start cell 0 and try the eight knight moves in a fixed order; recurse with the next number. If the move count reaches m·n the tour is complete; otherwise undo the cell and try the next move. This solution returns the first tour found.",
 "input": "m = 3, n = 4, r = 0, c = 0",
 "output": "[[0, 3, 6, 9], [11, 8, 1, 4], [2, 5, 10, 7]]",
 "notes": [],
 "best": "Mark the start cell 0 and try the eight knight moves in a fixed order; recurse with the next number. If the move count reaches m·n the tour is complete; otherwise undo the cell and try the next move. This solution returns the first tour found.",
 "variants": [
  {
   "name": "Backtracking over the eight knight moves",
   "code": "class Solution:\n    def tourOfKnight(self, m, n, r, c):\n        board = [[-1] * n for _ in range(m)]\n        moves = [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]\n        def go(i, j, step):\n            board[i][j] = step\n            if step == m * n - 1:\n                return True\n            for di, dj in moves:\n                a, b = i + di, j + dj\n                if 0 <= a < m and 0 <= b < n and board[a][b] == -1:\n                    if go(a, b, step + 1):\n                        return True\n            board[i][j] = -1\n            return False\n        go(r, c, 0)\n        return board",
   "time": "O(8^(m·n)) worst case",
   "space": "O(m·n)",
   "explain": "Mark the start cell 0 and try the eight knight moves in a fixed order; recurse with the next number. If the move count reaches m·n the tour is complete; otherwise undo the cell and try the next move. This solution returns the first tour found.",
   "frames": []
  }
 ]
};
