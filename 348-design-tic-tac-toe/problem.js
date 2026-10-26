window.PROBLEM = {
 "id": "348",
 "title": "Design Tic-Tac-Toe",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
