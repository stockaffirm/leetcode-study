window.PROBLEM = {
 "id": "3001",
 "title": "Minimum Moves to Capture The Queen",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Rook (5,3), bishop (3,4), queen (5,2): the rook sees the queen straight up the column → 1.",
 "idea": "On an 8×8 board a rook and a bishop try to capture the queen. The answer is 1 if the rook shares a row or column with the queen without the bishop between them, or the bishop shares a diagonal with the queen without the rook between them; otherwise 2 moves always suffice.",
 "input": "a=5, b=3, c=3, d=4, e=5, f=2",
 "output": "1",
 "notes": [],
 "best": "On an 8×8 board a rook and a bishop try to capture the queen. The answer is 1 if the rook shares a row or column with the queen without the bishop between them, or the bishop shares a diagonal with the queen without the rook between them; otherwise 2 moves always suffice.",
 "variants": [
  {
   "name": "One move if a piece sees the queen, else two",
   "code": "class Solution:\n    def minMovesToCaptureTheQueen(self, a, b, c, d, e, f):\n        def between(x, lo, hi):\n            return min(lo, hi) < x < max(lo, hi)\n        if a == e and not (c == a and between(d, b, f)):\n            return 1\n        if b == f and not (d == b and between(c, a, e)):\n            return 1\n        if abs(c - e) == abs(d - f):\n            on_line = (a - c) * (f - d) == (b - d) * (e - c)\n            if not (on_line and between(a, c, e)):\n                return 1\n        return 2",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "On an 8×8 board a rook and a bishop try to capture the queen. The answer is 1 if the rook shares a row or column with the queen without the bishop between them, or the bishop shares a diagonal with the queen without the rook between them; otherwise 2 moves always suffice.",
   "frames": []
  }
 ]
};
