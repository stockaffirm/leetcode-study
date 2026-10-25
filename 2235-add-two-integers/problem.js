window.PROBLEM = {
 "id": "2235",
 "title": "Add Two Integers",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Return the sum of two integers. Example: 12 and 5 → 17.",
 "why": "12 + 5 = 17.",
 "idea": "Return num1 + num2.",
 "input": "num1 = 12, num2 = 5",
 "output": "17",
 "notes": [],
 "best": "Return num1 + num2.",
 "variants": [
  {
   "name": "Direct sum",
   "code": "class Solution:\n    def sum(self, num1, num2):\n        return num1 + num2",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Return num1 + num2.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add with bit tricks",
   "tag": "Bit trick",
   "code": "class Solution:\n    def sum(self, num1, num2):\n        mask = 0xFFFFFFFF\n        a, b = num1, num2\n        while b:\n            a, b = (a ^ b) & mask, ((a & b) << 1) & mask\n        return a if a <= 0x7FFFFFFF else ~(a ^ mask)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "XOR adds without carries; AND shifted left gives the carries. Repeat until no carry is left.",
   "frames": [],
   "alt": true
  }
 ]
};
