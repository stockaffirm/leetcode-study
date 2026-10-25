window.PROBLEM = {
 "id": "3078",
 "title": "Match Alphanumerical Pattern in Matrix I",
 "level": "Medium",
 "topic": "Matrix",
 "question": "board is a grid of digits and pattern is a grid of digits and lowercase letters. A part of the board matches the pattern if letters can be replaced by digits so that: a pattern digit equals the board digit there; every cell with the same letter has the same digit; and a letter's digit differs from the digits of every other symbol (other letters and the digits of the pattern). Return [row, col] of the top-left corner of the first matching submatrix (smallest row, then smallest column), or [−1, −1]. Example: board [[1,1,2],[3,3,4],[6,6,6]], pattern ['ab','66'] → [1,1].",
 "why": "A pattern grid contains digits and letters; each letter stands for one digit (different letters, different digits; a letter's digit differs from the pattern's own digits). Find the first position in the board where a submatrix matches.",
 "idea": "Try every top-left corner (row by row). For each cell compare: a pattern digit must equal the board digit; a letter gets (or must keep) one digit. Finally the digits assigned to letters must all be different and not appear as pattern digits.",
 "input": "board [[1,1,2],[3,3,4],[6,6,6]], pattern ['ab','66']",
 "output": "[1,1]",
 "notes": [],
 "best": "Try every top-left corner (row by row). For each cell compare: a pattern digit must equal the board digit; a letter gets (or must keep) one digit. Finally the digits assigned to letters must all be different and not appear as pattern digits.",
 "variants": [
  {
   "name": "Try every top-left corner",
   "code": "class Solution:\n    def findPattern(self, board, pattern):\n        R, C = len(pattern), len(pattern[0])\n        for i in range(len(board) - R + 1):\n            for j in range(len(board[0]) - C + 1):\n                mp, ok = {}, True\n                for a in range(R):\n                    for b in range(C):\n                        p, v = pattern[a][b], board[i + a][j + b]\n                        if p.isdigit():\n                            if int(p) != v: ok = False\n                        elif mp.setdefault(p, v) != v: ok = False\n                if ok:\n                    digits = {int(p) for row in pattern for p in row if p.isdigit()}\n                    if len(set(mp.values())) == len(mp) and not (set(mp.values()) & digits): return [i, j]\n        return [-1, -1]",
   "time": "O(m·n·r·c)",
   "space": "O(1)",
   "explain": "Try every top-left corner (row by row). For each cell compare: a pattern digit must equal the board digit; a letter gets (or must keep) one digit. Finally the digits assigned to letters must all be different and not appear as pattern digits.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two-way mapping (bijection)",
   "tag": "Alternative",
   "code": "class Solution:\n    def findPattern(self, board, pattern):\n        R, C = len(pattern), len(pattern[0])\n        for i in range(len(board) - R + 1):\n            for j in range(len(board[0]) - C + 1):\n                m, rev, ok = {}, {}, True\n                for a in range(R):\n                    for b in range(C):\n                        p, v = pattern[a][b], board[i + a][j + b]\n                        if p.isdigit() and int(p) != v: ok = False\n                        if m.setdefault(p, v) != v or rev.setdefault(v, p) != p: ok = False\n                if ok: return [i, j]\n        return [-1, -1]",
   "time": "O(m·n·r·c)",
   "space": "O(1)",
   "explain": "Treat pattern digits as symbols that map to themselves and require a one-to-one mapping between all symbols and board digits.",
   "frames": [],
   "alt": true
  }
 ]
};
