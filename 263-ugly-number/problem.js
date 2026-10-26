window.PROBLEM = {
 "id": "263",
 "title": "Ugly Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "An ugly number is a positive whole number whose only prime factors are 2, 3 and 5 (1 counts as ugly). Given n, return true if it is ugly. Example: 6 = 2 × 3 → true; 14 = 2 × 7 → false (7 is another prime factor).",
 "why": "Is the number made only from the prime factors 2, 3 and 5? 6 yes, 14 no.",
 "idea": "Keep dividing by 2, then 3, then 5 while possible. If you end at 1 the number is 'ugly'.",
 "input": "n = 6",
 "output": "True",
 "notes": [],
 "best": "Keep dividing by 2, then 3, then 5 while possible. If you end at 1 the number is 'ugly'.",
 "variants": [
  {
   "name": "Divide out 2, 3 and 5",
   "code": "class Solution:\n    def isUgly(self, n):\n        if n <= 0: return False\n        for p in (2, 3, 5):\n            while n % p == 0: n //= p\n        return n == 1",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Keep dividing by 2, then 3, then 5 while possible. If you end at 1 the number is 'ugly'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def isUgly(self, n):\n        if n <= 0: return False\n        if n == 1: return True\n        for p in (2, 3, 5):\n            if n % p == 0: return self.isUgly(n // p)\n        return False",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Divide by the first of 2, 3, 5 that divides n and recurse.",
   "frames": [],
   "alt": true
  }
 ]
};
