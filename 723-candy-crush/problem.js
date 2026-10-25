window.PROBLEM = {
 "id": "723",
 "title": "Candy Crush",
 "level": "Medium",
 "topic": "Matrix",
 "question": "A board of candies is a grid of whole numbers; 0 means an empty cell. Repeat these steps until nothing changes: (1) find every candy that is part of 3 or more equal candies in a row or in a column and crush them all at the SAME time (turn them into 0); (2) let the remaining candies fall straight down in each column so the empty spaces end up at the top. Return the final board. Example: [[3,3,3,4],[2,1,4,4],[2,1,2,4],[1,1,1,2]] → the 3s, the 1s in the bottom row and in the second column, and the 4s in the last column are crushed together, and what is left falls → [[0,0,0,0],[0,0,0,0],[2,0,4,0],[2,0,2,2]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "In-place marking with negatives",
   "tag": "Alternative",
   "code": "class Solution:\n    def candyCrush(self, board):\n        m, n = len(board), len(board[0])\n        changed = True\n        while changed:\n            changed = False\n            for i in range(m):\n                for j in range(n - 2):\n                    v = abs(board[i][j])\n                    if v and v == abs(board[i][j + 1]) == abs(board[i][j + 2]):\n                        board[i][j] = board[i][j + 1] = board[i][j + 2] = -v\n                        changed = True\n            for j in range(n):\n                for i in range(m - 2):\n                    v = abs(board[i][j])\n                    if v and v == abs(board[i + 1][j]) == abs(board[i + 2][j]):\n                        board[i][j] = board[i + 1][j] = board[i + 2][j] = -v\n                        changed = True\n            for j in range(n):\n                write = m - 1\n                for i in range(m - 1, -1, -1):\n                    if board[i][j] > 0:\n                        board[write][j] = board[i][j]\n                        write -= 1\n                for i in range(write, -1, -1): board[i][j] = 0\n        return board",
   "time": "O((m·n)²)",
   "space": "O(1)",
   "explain": "Mark candies to crush by negating them, then compact each column in place.",
   "frames": [],
   "alt": true
  }
 ]
};
