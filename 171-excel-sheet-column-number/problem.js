window.PROBLEM = {
 "id": "171",
 "title": "Excel Sheet Column Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Spreadsheet columns are named A, B, …, Z, AA, AB, … Given a column title, return its column number. Example: 'A' → 1, 'AB' → 28, 'ZY' → 701.",
 "why": "Convert a spreadsheet column title (A, B, …, Z, AA, AB, …) to its number.",
 "idea": "It is a base-26 number with digits A=1 … Z=26: result = result × 26 + digit.",
 "input": "'AB'",
 "output": "28",
 "notes": [],
 "best": "It is a base-26 number with digits A=1 … Z=26: result = result × 26 + digit.",
 "variants": [
  {
   "name": "Base-26 conversion",
   "code": "class Solution:\n    def titleToNumber(self, columnTitle):\n        n = 0\n        for ch in columnTitle: n = n * 26 + ord(ch) - 64\n        return n",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "It is a base-26 number with digits A=1 … Z=26: result = result × 26 + digit.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "reduce",
   "tag": "Pythonic",
   "code": "class Solution:\n    def titleToNumber(self, columnTitle):\n        return reduce(lambda a, ch: a * 26 + ord(ch) - 64, columnTitle, 0)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The same base-26 fold as one expression.",
   "frames": [],
   "alt": true
  }
 ]
};
