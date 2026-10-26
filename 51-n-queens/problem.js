window.PROBLEM = {
 "id": "51",
 "title": "N-Queens",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "On a 4×4 board there are exactly 2 ways to place 4 queens that never attack each other.",
 "idea": "Place one queen per row. A square is safe if its column, its ↘ diagonal (row − col) and its ↙ diagonal (row + col) are all unused. Place, recurse to the next row, and undo.",
 "input": "n = 4",
 "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
 "notes": [],
 "best": "Place one queen per row. A square is safe if its column, its ↘ diagonal (row − col) and its ↙ diagonal (row + col) are all unused. Place, recurse to the next row, and undo.",
 "variants": [
  {
   "name": "Backtracking with column and diagonal sets",
   "code": "class Solution:\n    def solveNQueens(self, n):\n        res = []\n        cols, d1, d2 = set(), set(), set()\n        board = []\n        def go(r):\n            if r == n:\n                res.append([\".\" * c + \"Q\" + \".\" * (n - c - 1) for c in board])\n                return\n            for c in range(n):\n                if c in cols or r - c in d1 or r + c in d2:\n                    continue\n                cols.add(c)\n                d1.add(r - c)\n                d2.add(r + c)\n                board.append(c)\n                go(r + 1)\n                cols.remove(c)\n                d1.remove(r - c)\n                d2.remove(r + c)\n                board.pop()\n        go(0)\n        return res",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Place one queen per row. A square is safe if its column, its ↘ diagonal (row − col) and its ↙ diagonal (row + col) are all unused. Place, recurse to the next row, and undo.",
   "frames": []
  }
 ]
};
