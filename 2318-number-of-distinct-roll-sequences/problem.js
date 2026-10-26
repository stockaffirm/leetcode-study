window.PROBLEM = {
 "id": "2318",
 "title": "Number of Distinct Roll Sequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Roll a die n times. Neighbouring rolls must be co-prime (gcd 1) and the same value must not repeat within a gap of 2. How many sequences are possible?",
 "idea": "The rules only look at the last two rolls, so the state is (second-last, last). Extend each state by every legal next roll and add up the counts.",
 "input": "n = 4",
 "output": "184",
 "notes": [],
 "best": "The rules only look at the last two rolls, so the state is (second-last, last). Extend each state by every legal next roll and add up the counts.",
 "variants": [
  {
   "name": "DP over the last two rolls",
   "code": "class Solution:\n    def distinctSequences(self, n):\n        if n == 1: return 6\n        MOD = 10 ** 9 + 7\n        dp = {(a, b): 1 for a in range(1, 7) for b in range(1, 7) if a != b and gcd(a, b) == 1}\n        for _ in range(n - 2):\n            nxt = defaultdict(int)\n            for (a, b), c in dp.items():\n                for x in range(1, 7):\n                    if x != a and x != b and gcd(x, b) == 1:\n                        nxt[(b, x)] = (nxt[(b, x)] + c) % MOD\n            dp = nxt\n        return sum(dp.values()) % MOD",
   "time": "O(n · 6³)",
   "space": "O(36)",
   "explain": "The rules only look at the last two rolls, so the state is (second-last, last). Extend each state by every legal next roll and add up the counts.",
   "frames": []
  }
 ]
};
