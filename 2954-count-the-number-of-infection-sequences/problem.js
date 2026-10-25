window.PROBLEM = {
 "id": "2954",
 "title": "Count the Number of Infection Sequences",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "n children stand in a line; the positions in 'sick' (increasing) are already infected. Each second one healthy child next to an infected child becomes infected. Return the number of possible infection orders of all the healthy children, modulo 1,000,000,007. Example: n=5, sick [0,4] → 4.",
 "why": "People stand in a line; some are already sick. Each second one healthy person next to a sick one gets infected. Count the possible infection orders (modulo 10⁹+7).",
 "idea": "The healthy people form gaps between the sick ones. Orders inside different gaps can be interleaved freely (a multinomial coefficient). Inside a gap bounded by sick people on both sides there are 2^(g−1) orders (infection can start at either end each time); for a gap at the border only one order.",
 "input": "n=5, sick [0,4]",
 "output": "4",
 "notes": [],
 "best": "The healthy people form gaps between the sick ones. Orders inside different gaps can be interleaved freely (a multinomial coefficient). Inside a gap bounded by sick people on both sides there are 2^(g−1) orders (infection can start at either end each time); for a gap at the border only one order.",
 "variants": [
  {
   "name": "Combinatorics over the gaps",
   "code": "class Solution:\n    def numberOfSequence(self, n, sick):\n        MOD = 10 ** 9 + 7\n        gaps = [sick[0], n - 1 - sick[-1]]\n        mid = [sick[i + 1] - sick[i] - 1 for i in range(len(sick) - 1)]\n        m = n - len(sick)\n        ans = factorial(m) % MOD\n        for g in gaps + mid:\n            if g > 0: ans = ans * pow(factorial(g), MOD - 2, MOD) % MOD\n        for g in mid:\n            if g > 0: ans = ans * pow(2, g - 1, MOD) % MOD\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The healthy people form gaps between the sick ones. Orders inside different gaps can be interleaved freely (a multinomial coefficient). Inside a gap bounded by sick people on both sides there are 2^(g−1) orders (infection can start at either end each time); for a gap at the border only one order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count all orders by recursion",
   "tag": "Brute force",
   "code": "class Solution:\n    def numberOfSequence(self, n, sick):\n        MOD = 10 ** 9 + 7\n        start = sum(1 << s for s in sick)\n        full = (1 << n) - 1\n        @lru_cache(None)\n        def f(mask):\n            if mask == full: return 1\n            total = 0\n            for i in range(n):\n                if not mask >> i & 1 and ((i > 0 and mask >> (i - 1) & 1) or (i + 1 < n and mask >> (i + 1) & 1)):\n                    total += f(mask | 1 << i)\n            return total % MOD\n        return f(start)",
   "time": "exponential",
   "space": "O(2ⁿ)",
   "explain": "For tiny n: from each set of infected people, try every healthy neighbour.",
   "frames": [],
   "alt": true
  }
 ]
};
