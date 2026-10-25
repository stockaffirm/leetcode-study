window.PROBLEM = {
 "id": "2544",
 "title": "Alternating Digit Sum",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Given a positive whole number n, return the alternating sum of its digits: the leftmost digit is added, the next one subtracted, the next one added, and so on. Example: 521 → 5 − 2 + 1 = 4.",
 "why": "Add the digits of a number but alternate signs, the first (leftmost) digit being positive. 521 → 5 − 2 + 1 = 4.",
 "idea": "Turn the number into text and go left to right, adding each digit with a sign that flips every step.",
 "input": "n = 521",
 "output": "4",
 "notes": [],
 "best": "Turn the number into text and go left to right, adding each digit with a sign that flips every step.",
 "variants": [
  {
   "name": "Walk the digits with a flipping sign",
   "code": "class Solution:\n    def alternateDigitSum(self, n):\n        total, sign = 0, 1\n        for d in str(n):\n            total += sign * int(d)\n            sign = -sign\n        return total",
   "time": "O(digits)",
   "space": "O(digits)",
   "explain": "Turn the number into text and go left to right, adding each digit with a sign that flips every step.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "From the last digit",
   "tag": "Alternative",
   "code": "class Solution:\n    def alternateDigitSum(self, n):\n        total, sign = 0, 1\n        while n:\n            total += sign * (n % 10)\n            n //= 10\n            sign = -sign\n        return total if sign == -1 else -total",
   "time": "O(digits)",
   "space": "O(1)",
   "explain": "Peel digits off with % and //, then fix the overall sign at the end.",
   "frames": [],
   "alt": true
  }
 ]
};
