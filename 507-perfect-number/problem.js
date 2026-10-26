window.PROBLEM = {
 "id": "507",
 "title": "Perfect Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "28 = 1 + 2 + 4 + 7 + 14 → true.",
 "idea": "A perfect number equals the sum of its positive divisors excluding itself. Find divisor pairs (d, n/d) up to √n.",
 "input": "num = 28",
 "output": "true",
 "notes": [],
 "best": "A perfect number equals the sum of its positive divisors excluding itself. Find divisor pairs (d, n/d) up to √n.",
 "variants": [
  {
   "name": "Sum divisors up to √n",
   "code": "class Solution:\n    def checkPerfectNumber(self, num):\n        if num <= 1:\n            return False\n        total = 1\n        d = 2\n        while d * d <= num:\n            if num % d == 0:\n                total += d\n                if d != num // d:\n                    total += num // d\n            d += 1\n        return total == num",
   "time": "O(√n)",
   "space": "O(1)",
   "explain": "A perfect number equals the sum of its positive divisors excluding itself. Find divisor pairs (d, n/d) up to √n.",
   "frames": []
  }
 ]
};
