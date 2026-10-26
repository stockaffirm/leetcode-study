window.PROBLEM = {
 "id": "504",
 "title": "Base 7",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "100 → 202 (2·49 + 0·7 + 2).",
 "idea": "Divide by 7 repeatedly, collecting remainders; they are the digits from the least significant. Handle zero and negative numbers separately.",
 "input": "num = 100",
 "output": "\"202\"",
 "notes": [],
 "best": "Divide by 7 repeatedly, collecting remainders; they are the digits from the least significant. Handle zero and negative numbers separately.",
 "variants": [
  {
   "name": "Repeated division by 7",
   "code": "class Solution:\n    def convertToBase7(self, num):\n        if num == 0:\n            return \"0\"\n        sign = \"-\" if num < 0 else \"\"\n        num = abs(num)\n        digits = []\n        while num:\n            num, r = divmod(num, 7)\n            digits.append(str(r))\n        return sign + ''.join(reversed(digits))",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Divide by 7 repeatedly, collecting remainders; they are the digits from the least significant. Handle zero and negative numbers separately.",
   "frames": []
  }
 ]
};
