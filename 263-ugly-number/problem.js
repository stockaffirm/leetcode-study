window.PROBLEM = {
 "id": "263",
 "title": "Ugly Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
