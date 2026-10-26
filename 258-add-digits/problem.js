window.PROBLEM = {
 "id": "258",
 "title": "Add Digits",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Repeatedly add all the digits of a number until the result has a single digit; return it. Example: 38 → 3 + 8 = 11 → 1 + 1 = 2.",
 "why": "Add the digits of a number repeatedly until a single digit remains.",
 "idea": "The result is the digital root: 0 for 0, otherwise 1 + (n − 1) mod 9.",
 "input": "38",
 "output": "2",
 "notes": [],
 "best": "The result is the digital root: 0 for 0, otherwise 1 + (n − 1) mod 9.",
 "variants": [
  {
   "name": "Digital root formula",
   "code": "class Solution:\n    def addDigits(self, num):\n        return 0 if num == 0 else 1 + (num - 1) % 9",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The result is the digital root: 0 for 0, otherwise 1 + (n − 1) mod 9.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Repeat the digit sum",
   "tag": "Brute force",
   "code": "class Solution:\n    def addDigits(self, num):\n        while num >= 10: num = sum(int(c) for c in str(num))\n        return num",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Literally add the digits until one digit is left.",
   "frames": [],
   "alt": true
  }
 ]
};
