window.PROBLEM = {
 "id": "3336",
 "title": "Find the Number of Subsequences With Equal GCD",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,2,3,4] → 10 pairs of disjoint non-empty subsequences with equal GCD (Greatest Common Divisor).",
 "idea": "Go through the numbers once; every number is put in seq 1, in seq 2 or in neither. State = (g1, g2), the gcd of each sequence so far (0 for empty). Adding x to seq 1 changes g1 to gcd(g1, x), likewise for seq 2. Count the states; the answer sums the counts of all states (g, g) with g > 0. Modulo 1e9+7.",
 "input": "nums = [1,2,3,4]",
 "output": "10",
 "notes": [],
 "best": "Go through the numbers once; every number is put in seq 1, in seq 2 or in neither. State = (g1, g2), the gcd of each sequence so far (0 for empty). Adding x to seq 1 changes g1 to gcd(g1, x), likewise for seq 2. Count the states; the answer sums the counts of all states (g, g) with g > 0. Modulo 1e9+7.",
 "variants": [
  {
   "name": "DP on the pair (gcd of seq 1, gcd of seq 2)",
   "code": "class Solution:\n    def subsequencePairCount(self, nums):\n        MOD = 10**9 + 7\n        dp = {(0, 0): 1}\n        for x in nums:\n            new = defaultdict(int)\n            for (a, b), c in dp.items():\n                new[(a, b)] = (new[(a, b)] + c) % MOD\n                new[(gcd(a, x), b)] = (new[(gcd(a, x), b)] + c) % MOD\n                new[(a, gcd(b, x))] = (new[(a, gcd(b, x))] + c) % MOD\n            dp = new\n        return sum(c for (a, b), c in dp.items() if a == b and a > 0) % MOD",
   "time": "O(n·M²)",
   "space": "O(M²)",
   "explain": "Go through the numbers once; every number is put in seq 1, in seq 2 or in neither. State = (g1, g2), the gcd of each sequence so far (0 for empty). Adding x to seq 1 changes g1 to gcd(g1, x), likewise for seq 2. Count the states; the answer sums the counts of all states (g, g) with g > 0. Modulo 1e9+7.",
   "frames": []
  }
 ]
};
