window.PROBLEM = {
 "id": "1323",
 "title": "Maximum 69 Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
