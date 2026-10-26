window.PROBLEM = {
 "id": "168",
 "title": "Excel Sheet Column Title",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Convert a column number to its Excel title: 1 → A, 26 → Z, 27 → AA, 28 → AB … Example: 701 → 'ZY'.",
 "why": "701 = 26·26 + 25: that is Z then Y → 'ZY'.",
 "idea": "It is base 26 where the digits are A…Z = 1…26 (no zero). Subtract 1 before taking the remainder so A…Z map to 0…25, write the letter and divide by 26.",
 "input": "columnNumber = 701",
 "output": "\"ZY\"",
 "notes": [],
 "best": "It is base 26 where the digits are A…Z = 1…26 (no zero). Subtract 1 before taking the remainder so A…Z map to 0…25, write the letter and divide by 26.",
 "variants": [
  {
   "name": "Base-26 with no zero digit",
   "code": "class Solution:\n    def convertToTitle(self, columnNumber):\n        res = []\n        while columnNumber:\n            columnNumber -= 1\n            res.append(chr(65 + columnNumber % 26))\n            columnNumber //= 26\n        return \"\".join(reversed(res))",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "It is base 26 where the digits are A…Z = 1…26 (no zero). Subtract 1 before taking the remainder so A…Z map to 0…25, write the letter and divide by 26.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def convertToTitle(self, columnNumber):\n        if columnNumber == 0:\n            return \"\"\n        n = columnNumber - 1\n        return self.convertToTitle(n // 26) + chr(65 + n % 26)",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "The title of n is the title of (n−1) // 26 followed by one more letter.",
   "frames": [],
   "alt": true
  }
 ]
};
