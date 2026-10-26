window.PROBLEM = {
 "id": "2539",
 "title": "Count the Number of Good Subsequences",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
