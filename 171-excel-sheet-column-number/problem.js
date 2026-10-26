window.PROBLEM = {
 "id": "171",
 "title": "Excel Sheet Column Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
