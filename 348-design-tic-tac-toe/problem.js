window.PROBLEM = {
 "id": "348",
 "title": "Design Tic-Tac-Toe",
 "level": "Medium",
 "topic": "Design",
 "question": "Build a Tic-Tac-Toe game on an n × n board for two players (1 and 2). The method move(row, col, player) places the player's mark at that square (each move is legal and on an empty square) and returns 0 if nobody has won yet, or the player number if that move completed a full row, a full column, or a full diagonal for that player. Try to make each move cost much less than rescanning the whole board. Example on a 3 × 3 board: the last of seven moves completes player 1's column → returns 1.",
 "why": "After every move, say if that move just won the game. You don't want to rescan the whole board each time.",
 "idea": "Keep a running score per row, column and both diagonals (+1 for player 1, −1 for player 2). A line is won when its score reaches ±n.",
 "input": "n=3: moves (0,0,1), (0,2,2), (2,2,1), (1,1,2), (2,0,1), (1,0,2), (2,1,1)",
 "output": "[0,0,0,0,0,0,1]",
 "notes": [],
 "best": "Keep a running score per row, column and both diagonals (+1 for player 1, −1 for player 2). A line is won when its score reaches ±n.",
 "variants": [
  {
   "name": "Row / column / diagonal counters",
   "code": "class TicTacToe:\n    def __init__(self, n):\n        self.n = n\n        self.rows = [0] * n\n        self.cols = [0] * n\n        self.diag = 0\n        self.anti = 0\n    def move(self, row, col, player):\n        d = 1 if player == 1 else -1\n        self.rows[row] += d\n        self.cols[col] += d\n        if row == col: self.diag += d\n        if row + col == self.n - 1: self.anti += d\n        n = self.n\n        if abs(self.rows[row]) == n or abs(self.cols[col]) == n or abs(self.diag) == n or abs(self.anti) == n:\n            return player\n        return 0",
   "time": "O(1) per move",
   "space": "O(n)",
   "explain": "Keep a running score per row, column and both diagonals (+1 for player 1, −1 for player 2). A line is won when its score reaches ±n.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check the whole board",
   "tag": "Brute force",
   "code": "class TicTacToe:\n    def __init__(self, n):\n        self.n = n\n        self.b = [[0] * n for _ in range(n)]\n    def move(self, row, col, player):\n        n, b = self.n, self.b\n        b[row][col] = player\n        if all(b[row][j] == player for j in range(n)): return player\n        if all(b[i][col] == player for i in range(n)): return player\n        if row == col and all(b[i][i] == player for i in range(n)): return player\n        if row + col == n - 1 and all(b[i][n - 1 - i] == player for i in range(n)): return player\n        return 0",
   "time": "O(n) per move",
   "space": "O(n²)",
   "explain": "Store the board and after each move scan that row, that column and the diagonals.",
   "frames": [],
   "alt": true
  }
 ]
};
