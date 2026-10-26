window.PROBLEM = {
 "id": "419",
 "title": "Battleships in a Board",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "The board has one horizontal ship (the top-left X plus its neighbour is 1 ship) and one vertical ship on the right → 2.",
 "idea": "Ships never touch, so every ship has exactly one cell with no 'X' above it and none to its left. Count those cells.",
 "input": "board = [[\"X\",\".\",\".\",\"X\"],[\".\",\".\",\".\",\"X\"],[\".\",\".\",\".\",\"X\"]]",
 "output": "2",
 "notes": [],
 "best": "Ships never touch, so every ship has exactly one cell with no 'X' above it and none to its left. Count those cells.",
 "variants": [
  {
   "name": "Count the top-left corner of each ship",
   "code": "class Solution:\n    def countBattleships(self, board):\n        count = 0\n        for i, row in enumerate(board):\n            for j, c in enumerate(row):\n                if c == \"X\" and (i == 0 or board[i - 1][j] != \"X\") and (j == 0 or board[i][j - 1] != \"X\"):\n                    count += 1\n        return count",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Ships never touch, so every ship has exactly one cell with no 'X' above it and none to its left. Count those cells.",
   "frames": []
  }
 ]
};
