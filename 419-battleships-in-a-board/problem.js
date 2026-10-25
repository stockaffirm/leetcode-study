window.PROBLEM = {
 "id": "419",
 "title": "Battleships in a Board",
 "level": "Medium",
 "topic": "Matrix",
 "question": "A grid has 'X' (part of a battleship) and '.' (water). Ships are horizontal or vertical lines of X's, and two ships never touch each other (not even diagonally). Return how many ships there are, ideally in one pass without changing the board. Example: [['X','.','.','X'],['.','.','.','X'],['.','.','.','X']] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Flood fill each ship",
   "tag": "Alternative",
   "code": "class Solution:\n    def countBattleships(self, board):\n        m, n = len(board), len(board[0])\n        count = 0\n        for si in range(m):\n            for sj in range(n):\n                if board[si][sj] == \"X\":\n                    count += 1\n                    stack = [(si, sj)]\n                    board[si][sj] = \".\"\n                    while stack:\n                        i, j = stack.pop()\n                        for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                            if 0 <= a < m and 0 <= b < n and board[a][b] == \"X\":\n                                board[a][b] = \".\"\n                                stack.append((a, b))\n        return count",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Count connected groups of X by sinking each one with a DFS.",
   "frames": [],
   "alt": true
  }
 ]
};
