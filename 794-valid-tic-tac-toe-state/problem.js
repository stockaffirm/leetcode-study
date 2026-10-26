window.PROBLEM = {
 "id": "794",
 "title": "Valid Tic-Tac-Toe State",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "['XOX',' X ','   '] → X has 3... invalid? The state ['O  ','   ','   '] is invalid (O moved first).",
 "idea": "X moves first, so the number of X is equal to or one more than the number of O. If X has a winning line then X must have exactly one more mark than O. If O has a winning line the counts must be equal. Both cannot win.",
 "input": "board = [\"XOX\",\"O O\",\"XOX\"]",
 "output": "true",
 "notes": [],
 "best": "X moves first, so the number of X is equal to or one more than the number of O. If X has a winning line then X must have exactly one more mark than O. If O has a winning line the counts must be equal. Both cannot win.",
 "variants": [
  {
   "name": "Count marks and check who has won",
   "code": "class Solution:\n    def validTicTacToe(self, board):\n        x = sum(row.count('X') for row in board)\n        o = sum(row.count('O') for row in board)\n        def wins(p):\n            lines = [list(r) for r in board] + [list(c) for c in zip(*board)]\n            lines.append([board[i][i] for i in range(3)])\n            lines.append([board[i][2 - i] for i in range(3)])\n            return any(all(c == p for c in line) for line in lines)\n        if o > x or x > o + 1:\n            return False\n        if wins('X') and x != o + 1:\n            return False\n        if wins('O') and x != o:\n            return False\n        return True",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "X moves first, so the number of X is equal to or one more than the number of O. If X has a winning line then X must have exactly one more mark than O. If O has a winning line the counts must be equal. Both cannot win.",
   "frames": []
  }
 ]
};
