window.PROBLEM = {
 "id": "526",
 "title": "Beautiful Arrangement",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "A permutation of 1…n is beautiful if for each position i (1-indexed) perm[i] is divisible by i or i is divisible by perm[i]. Return how many beautiful permutations exist. Example: n=2 → 2.",
 "why": "n=2: [1,2] and [2,1] both satisfy 'divisible one way' at every position → 2.",
 "idea": "A permutation of 1…n is beautiful if for each position i, perm[i] is divisible by i or i is divisible by perm[i]. Fill positions 1, 2, 3… with unused numbers that satisfy the rule (a bitmask records used numbers) and count complete arrangements.",
 "input": "n = 2",
 "output": "2",
 "notes": [],
 "best": "A permutation of 1…n is beautiful if for each position i, perm[i] is divisible by i or i is divisible by perm[i]. Fill positions 1, 2, 3… with unused numbers that satisfy the rule (a bitmask records used numbers) and count complete arrangements.",
 "variants": [
  {
   "name": "Backtrack position by position",
   "code": "class Solution:\n    def countArrangement(self, n):\n        @lru_cache(None)\n        def go(pos, used):\n            if pos > n:\n                return 1\n            total = 0\n            for v in range(1, n + 1):\n                if not (used >> v) & 1 and (v % pos == 0 or pos % v == 0):\n                    total += go(pos + 1, used | (1 << v))\n            return total\n        return go(1, 0)",
   "time": "O(k)",
   "space": "O(n)",
   "explain": "A permutation of 1…n is beautiful if for each position i, perm[i] is divisible by i or i is divisible by perm[i]. Fill positions 1, 2, 3… with unused numbers that satisfy the rule (a bitmask records used numbers) and count complete arrangements.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every permutation",
   "tag": "Brute force",
   "code": "class Solution:\n    def countArrangement(self, n):\n        return sum(all(v % (i + 1) == 0 or (i + 1) % v == 0 for i, v in enumerate(p))\n                   for p in permutations(range(1, n + 1)))",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Generate all permutations and test the divisibility rule.",
   "frames": [],
   "alt": true
  }
 ]
};
