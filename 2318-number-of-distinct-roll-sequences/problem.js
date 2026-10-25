window.PROBLEM = {
 "id": "2318",
 "title": "Number of Distinct Roll Sequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You roll a six-sided die n times. A sequence of rolls is valid if (1) every two neighbouring rolls are co-prime (their greatest common divisor is 1), and (2) the same number never appears twice within a distance of 2 (so rolls i and j with |i−j| ≤ 2, i ≠ j must be different). Return how many different valid sequences exist, modulo 1,000,000,007. Example: n=4 → 184 valid sequences.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def distinctSequences(self, n):\n        MOD = 10 ** 9 + 7\n        @lru_cache(None)\n        def go(left, a, b):\n            if left == 0: return 1\n            total = 0\n            for x in range(1, 7):\n                if x != a and x != b and (b == 0 or gcd(x, b) == 1):\n                    total += go(left - 1, b, x)\n            return total % MOD\n        return go(n, 0, 0)",
   "time": "O(n · 6³)",
   "space": "O(n · 36)",
   "explain": "Pick the next roll given the last two, caching each (rolls left, last two) state.",
   "frames": [],
   "alt": true
  }
 ]
};
