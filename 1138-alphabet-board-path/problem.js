window.PROBLEM = {
 "id": "1138",
 "title": "Alphabet Board Path",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Letters a–z are on a board with 6 rows: 'abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy' and 'z' (alone). You start on 'a' (top-left) and type a word by moving with U, D, L, R (one cell each, staying on the board) and pressing '!' on a letter to select it. Return any sequence of moves that types the target. Example: 'leet' → 'DDR!UURRR!!DDD!'.",
 "why": "Letters a–z are laid out in rows of 5 ('z' alone on the last row). Give the moves (U, D, L, R and '!' to select) that type a word starting from 'a'.",
 "idea": "Each letter has a row and column (index // 5, index % 5). Move to the next letter's cell and press '!'. Do LEFT and UP moves before DOWN and RIGHT so you never step off the board when leaving 'z'.",
 "input": "\"leet\"",
 "output": "\"DDR!UURRR!!DDD!\"",
 "notes": [],
 "best": "Each letter has a row and column (index // 5, index % 5). Move to the next letter's cell and press '!'. Do LEFT and UP moves before DOWN and RIGHT so you never step off the board when leaving 'z'.",
 "variants": [
  {
   "name": "Move left/up before down/right",
   "code": "class Solution:\n    def alphabetBoardPath(self, target):\n        r = c = 0\n        out = []\n        for ch in target:\n            nr, nc = divmod(ord(ch) - 97, 5)\n            if nc < c: out.append('L' * (c - nc))\n            if nr < r: out.append('U' * (r - nr))\n            if nr > r: out.append('D' * (nr - r))\n            if nc > c: out.append('R' * (nc - c))\n            out.append('!')\n            r, c = nr, nc\n        return ''.join(out)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Each letter has a row and column (index // 5, index % 5). Move to the next letter's cell and press '!'. Do LEFT and UP moves before DOWN and RIGHT so you never step off the board when leaving 'z'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build with a position table",
   "tag": "Alternative",
   "code": "class Solution:\n    def alphabetBoardPath(self, target):\n        pos = {chr(97 + i): divmod(i, 5) for i in range(26)}\n        r = c = 0\n        res = ''\n        for ch in target:\n            nr, nc = pos[ch]\n            res += 'L' * max(0, c - nc) + 'U' * max(0, r - nr) + 'D' * max(0, nr - r) + 'R' * max(0, nc - c) + '!'\n            r, c = nr, nc\n        return res",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Pre-compute every letter's cell, then join the moves with string multiplication.",
   "frames": [],
   "alt": true
  }
 ]
};
