window.PROBLEM = {
 "id": "1323",
 "title": "Maximum 69 Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "You may change at most one digit of num (made of 6s and 9s) from 6 to 9 or 9 to 6. Return the maximum number you can get. Example: 9669 → 9969.",
 "why": "9669 → change the first 6: 9969.",
 "idea": "Changing a digit from 6 to 9 gains the most when done at the highest position. Replace the first '6' in the number by '9' (nothing changes if there is none).",
 "input": "num = 9669",
 "output": "9969",
 "notes": [],
 "best": "Changing a digit from 6 to 9 gains the most when done at the highest position. Replace the first '6' in the number by '9' (nothing changes if there is none).",
 "variants": [
  {
   "name": "Change the first 6 to a 9",
   "code": "class Solution:\n    def maximum69Number(self, num):\n        return int(str(num).replace('6', '9', 1))",
   "time": "O(d)",
   "space": "O(d)",
   "explain": "Changing a digit from 6 to 9 gains the most when done at the highest position. Replace the first '6' in the number by '9' (nothing changes if there is none).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Digit list",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximum69Number(self, num):\n        d = list(str(num))\n        for i, c in enumerate(d):\n            if c == '6':\n                d[i] = '9'\n                break\n        return int(''.join(d))",
   "time": "O(d)",
   "space": "O(d)",
   "explain": "Change the first 6 in the digit list.",
   "frames": [],
   "alt": true
  }
 ]
};
