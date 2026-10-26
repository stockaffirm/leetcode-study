window.PROBLEM = {
 "id": "1017",
 "title": "Convert to Base -2",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Given a whole number n, return its representation in base −2 as a string of 0s and 1s (no leading zeros, except for '0' itself). In base −2 the digits stand for 1, −2, 4, −8, 16, … Example: 2 → '110' because 1·4 + 1·(−2) + 0·1 = 2; 3 → '111'.",
 "why": "Write a whole number in base −2 (digits 0/1). 2 → '110' because 1·4 + 1·(−2) + 0·1 = 2.",
 "idea": "Repeatedly divide by −2. If the remainder comes out negative, add 2 to it and add 1 to the quotient. The remainders, read backwards, are the digits.",
 "input": "n = 2",
 "output": "\"110\"",
 "notes": [],
 "best": "Repeatedly divide by −2. If the remainder comes out negative, add 2 to it and add 1 to the quotient. The remainders, read backwards, are the digits.",
 "variants": [
  {
   "name": "Divide by −2 with remainder fix",
   "code": "class Solution:\n    def baseNeg2(self, n):\n        if n == 0: return '0'\n        digits = []\n        while n:\n            n, r = divmod(n, -2)\n            if r < 0:\n                r += 2\n                n += 1\n            digits.append(str(r))\n        return ''.join(reversed(digits))",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Repeatedly divide by −2. If the remainder comes out negative, add 2 to it and add 1 to the quotient. The remainders, read backwards, are the digits.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bit trick loop",
   "tag": "Alternative",
   "code": "class Solution:\n    def baseNeg2(self, n):\n        if n == 0: return '0'\n        out = ''\n        while n:\n            out = str(n & 1) + out\n            n = -(n >> 1)\n        return out",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Take the lowest bit as the digit and replace n by −(n >> 1).",
   "frames": [],
   "alt": true
  }
 ]
};
