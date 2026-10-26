window.PROBLEM = {
 "id": "1281",
 "title": "Subtract the Product and Sum of Digits of an Integer",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "234: product 24 − sum 9 = 15.",
 "idea": "Walk the digits, multiplying and adding; return product − sum.",
 "input": "n = 234",
 "output": "15",
 "notes": [],
 "best": "Walk the digits, multiplying and adding; return product − sum.",
 "variants": [
  {
   "name": "Digit product minus digit sum",
   "code": "class Solution:\n    def subtractProductAndSum(self, n):\n        prod, total = 1, 0\n        for d in map(int, str(n)):\n            prod *= d\n            total += d\n        return prod - total",
   "time": "O(d)",
   "space": "O(1)",
   "explain": "Walk the digits, multiplying and adding; return product − sum.",
   "frames": []
  }
 ]
};
