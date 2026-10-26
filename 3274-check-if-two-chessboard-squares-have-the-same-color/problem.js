window.PROBLEM = {
 "id": "3274",
 "title": "Check if Two Chessboard Squares Have the Same Color",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "'a1' and 'c3' are both dark → true.",
 "idea": "A square's colour is decided by the parity of (column index + row number). Compare the two parities.",
 "input": "coordinate1 = \"a1\", coordinate2 = \"c3\"",
 "output": "true",
 "notes": [],
 "best": "A square's colour is decided by the parity of (column index + row number). Compare the two parities.",
 "variants": [
  {
   "name": "Parity of column + row",
   "code": "class Solution:\n    def checkTwoChessboards(self, coordinate1, coordinate2):\n        def parity(c):\n            return (ord(c[0]) - ord('a') + int(c[1])) % 2\n        return parity(coordinate1) == parity(coordinate2)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "A square's colour is decided by the parity of (column index + row number). Compare the two parities.",
   "frames": []
  }
 ]
};
