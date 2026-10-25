window.PROBLEM = {
 "id": "1922",
 "title": "Count Good Numbers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A digit string of length n is 'good' if digits at even positions (0, 2, …) are even and digits at odd positions are prime (2, 3, 5 or 7). Return the number of good strings of length n, modulo 1,000,000,007. Example: n=4 → 400.",
 "why": "Length 4: even positions (0 and 2) take an even digit (5 choices), odd positions (1 and 3) take a prime digit 2, 3, 5, 7 (4 choices) → 5·4·5·4 = 400.",
 "idea": "Positions 0, 2, 4 … (there are ceil(n/2) of them) each have 5 choices, and the odd positions (floor(n/2) of them) each have 4. The answer is 5^ceil(n/2) · 4^floor(n/2) modulo 1,000,000,007 — use fast power.",
 "input": "n = 4",
 "output": "400",
 "notes": [],
 "best": "Positions 0, 2, 4 … (there are ceil(n/2) of them) each have 5 choices, and the odd positions (floor(n/2) of them) each have 4. The answer is 5^ceil(n/2) · 4^floor(n/2) modulo 1,000,000,007 — use fast power.",
 "variants": [
  {
   "name": "Fast exponentiation",
   "code": "class Solution:\n    def countGoodNumbers(self, n):\n        MOD = 10 ** 9 + 7\n        return pow(5, (n + 1) // 2, MOD) * pow(4, n // 2, MOD) % MOD",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Positions 0, 2, 4 … (there are ceil(n/2) of them) each have 5 choices, and the odd positions (floor(n/2) of them) each have 4. The answer is 5^ceil(n/2) · 4^floor(n/2) modulo 1,000,000,007 — use fast power.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Multiply position by position",
   "tag": "Brute force",
   "code": "class Solution:\n    def countGoodNumbers(self, n):\n        MOD = 10 ** 9 + 7\n        res = 1\n        for i in range(n):\n            res = res * (5 if i % 2 == 0 else 4) % MOD\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Multiply the number of choices of every position (5 for even, 4 for odd).",
   "frames": [],
   "alt": true
  }
 ]
};
