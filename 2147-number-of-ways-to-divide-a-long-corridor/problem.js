window.PROBLEM = {
 "id": "2147",
 "title": "Number of Ways to Divide a Long Corridor",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "'SSPPSPS' → 3 ways.",
 "idea": "Each section needs exactly two seats. If the seat count is 0 or odd the answer is 0. Otherwise seats pair up (1–2, 3–4, …); a divider can go in any gap between the second seat of a pair and the first of the next, so multiply (plants + 1) for each such gap, modulo 1e9+7.",
 "input": "corridor = \"SSPPSPS\"",
 "output": "3",
 "notes": [],
 "best": "Each section needs exactly two seats. If the seat count is 0 or odd the answer is 0. Otherwise seats pair up (1–2, 3–4, …); a divider can go in any gap between the second seat of a pair and the first of the next, so multiply (plants + 1) for each such gap, modulo 1e9+7.",
 "variants": [
  {
   "name": "Multiply the gaps between seat pairs",
   "code": "class Solution:\n    def numberOfWays(self, corridor):\n        MOD = 10**9 + 7\n        seats = [i for i, c in enumerate(corridor) if c == 'S']\n        if len(seats) == 0 or len(seats) % 2:\n            return 0\n        res = 1\n        for i in range(2, len(seats), 2):\n            res = res * (seats[i] - seats[i - 1]) % MOD\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each section needs exactly two seats. If the seat count is 0 or odd the answer is 0. Otherwise seats pair up (1–2, 3–4, …); a divider can go in any gap between the second seat of a pair and the first of the next, so multiply (plants + 1) for each such gap, modulo 1e9+7.",
   "frames": []
  }
 ]
};
