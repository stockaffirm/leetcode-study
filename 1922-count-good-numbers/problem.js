window.PROBLEM = {
 "id": "1922",
 "title": "Count Good Numbers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
