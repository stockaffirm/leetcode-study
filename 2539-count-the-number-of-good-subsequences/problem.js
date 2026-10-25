window.PROBLEM = {
 "id": "2539",
 "title": "Count the Number of Good Subsequences",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "A subsequence of a string is what you get by deleting some letters (possibly none) without changing the order of the rest; different sets of positions count as different subsequences. A non-empty subsequence is 'good' if every letter that appears in it appears the SAME number of times. Given a string s, return how many good subsequences it has, modulo 1,000,000,007 (i.e. the remainder after dividing by that number). Example: 'aabb' → 11.",
 "why": "A subsequence is 'good' if every letter in it appears the same number of times. Count the good subsequences (answer mod 1,000,000,007).",
 "idea": "Fix a frequency f. For each letter you either skip it or choose f of its c copies (C(c, f) ways): multiply (1 + C(c, f)) over all letters, subtract the empty choice, and add up over every f.",
 "input": "\"aabb\"",
 "output": "11",
 "notes": [],
 "best": "Fix a frequency f. For each letter you either skip it or choose f of its c copies (C(c, f) ways): multiply (1 + C(c, f)) over all letters, subtract the empty choice, and add up over every f.",
 "variants": [
  {
   "name": "Combinatorics per frequency",
   "code": "class Solution:\n    def countGoodSubsequences(self, s):\n        MOD = 10 ** 9 + 7\n        cnt = Counter(s)\n        mx = max(cnt.values())\n        total = 0\n        for f in range(1, mx + 1):\n            ways = 1\n            for c in cnt.values():\n                ways = ways * (1 + comb(c, f)) % MOD\n            total = (total + ways - 1) % MOD\n        return total",
   "time": "O(26 · n)",
   "space": "O(26)",
   "explain": "Fix a frequency f. For each letter you either skip it or choose f of its c copies (C(c, f) ways): multiply (1 + C(c, f)) over all letters, subtract the empty choice, and add up over every f.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every subsequence",
   "tag": "Brute force",
   "code": "class Solution:\n    def countGoodSubsequences(self, s):\n        MOD = 10 ** 9 + 7\n        n, total = len(s), 0\n        for mask in range(1, 1 << n):\n            cnt = Counter(s[i] for i in range(n) if mask >> i & 1)\n            if len(set(cnt.values())) == 1: total += 1\n        return total % MOD",
   "time": "O(2ⁿ·n)",
   "space": "O(26)",
   "explain": "Enumerate every non-empty subset of positions and check that all letter counts are equal (tiny inputs only).",
   "frames": [],
   "alt": true
  }
 ]
};
