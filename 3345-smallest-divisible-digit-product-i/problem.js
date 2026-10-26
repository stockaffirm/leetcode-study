window.PROBLEM = {
 "id": "3345",
 "title": "Smallest Divisible Digit Product I",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=15, t=3: 15 → product 5 no; 16 → 6 divisible by 3 → 16.",
 "idea": "Test n, n+1, … until the product of the digits is divisible by t. A zero digit makes the product 0 (divisible by everything), so the loop ends within a few steps.",
 "input": "n = 15, t = 3",
 "output": "16",
 "notes": [],
 "best": "Test n, n+1, … until the product of the digits is divisible by t. A zero digit makes the product 0 (divisible by everything), so the loop ends within a few steps.",
 "variants": [
  {
   "name": "Walk up from n until the digit product works",
   "code": "class Solution:\n    def smallestNumber(self, n, t):\n        x = n\n        while True:\n            p = 1\n            for d in str(x):\n                p *= int(d)\n            if p % t == 0:\n                return x\n            x += 1",
   "time": "O(small)",
   "space": "O(1)",
   "explain": "Test n, n+1, … until the product of the digits is divisible by t. A zero digit makes the product 0 (divisible by everything), so the loop ends within a few steps.",
   "frames": []
  }
 ]
};
