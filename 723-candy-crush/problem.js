window.PROBLEM = {
 "id": "723",
 "title": "Candy Crush",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Simulate a candy game: any 3+ equal candies in a row or column vanish at the same time, the rest fall down, and this repeats until nothing more can vanish.",
 "idea": "Each round: find all candies that belong to a line of three or more (don't remove yet), set them to 0, then let each column's remaining candies fall to the bottom. Stop when a round finds nothing.",
 "input": "4×4 board (see the walkthrough)",
 "output": "the stable board",
 "notes": [],
 "best": "Each round: find all candies that belong to a line of three or more (don't remove yet), set them to 0, then let each column's remaining candies fall to the bottom. Stop when a round finds nothing.",
 "variants": [
  {
   "name": "Mark crushes, drop, repeat",
   "code": "class Solution:\n    def candyCrush(self, board):\n        m, n = len(board), len(board[0])\n        while True:\n            crush = set()\n            for i in range(m):\n                for j in range(n):\n                    v = board[i][j]\n                    if v == 0: continue\n                    if j + 2 < n and board[i][j + 1] == v and board[i][j + 2] == v:\n                        crush |= {(i, j), (i, j + 1), (i, j + 2)}\n                    if i + 2 < m and board[i + 1][j] == v and board[i + 2][j] == v:\n                        crush |= {(i, j), (i + 1, j), (i + 2, j)}\n            if not crush: return board\n            for i, j in crush: board[i][j] = 0\n            for j in range(n):\n                col = [board[i][j] for i in range(m) if board[i][j] != 0]\n                col = [0] * (m - len(col)) + col\n                for i in range(m): board[i][j] = col[i]",
   "time": "O((m·n)²) worst case",
   "space": "O(m·n)",
   "explain": "Each round: find all candies that belong to a line of three or more (don't remove yet), set them to 0, then let each column's remaining candies fall to the bottom. Stop when a round finds nothing.",
   "frames": []
  }
 ]
};
