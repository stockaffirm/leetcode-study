window.PROBLEM = {
 "id": "2992",
 "title": "Number of Self-Divisible Permutations",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=3: the valid permutations of 1,2,3 where gcd(value, position)=1 everywhere are [3,1,2], [2,3,1], [1,3,2] → 3.",
 "idea": "A permutation of 1…n is self-divisible if gcd(a_i, i) = 1 for every position i. Fill positions 1, 2, 3… in order; the mask of used numbers tells how many positions are filled, so dp[mask] = ways to reach it, trying each unused value that is coprime with the next position.",
 "input": "n = 3",
 "output": "3",
 "notes": [],
 "best": "A permutation of 1…n is self-divisible if gcd(a_i, i) = 1 for every position i. Fill positions 1, 2, 3… in order; the mask of used numbers tells how many positions are filled, so dp[mask] = ways to reach it, trying each unused value that is coprime with the next position.",
 "variants": [
  {
   "name": "Bitmask DP filling positions in order",
   "code": "class Solution:\n    def selfDivisiblePermutationCount(self, n):\n        dp = [0] * (1 << n)\n        dp[0] = 1\n        for mask in range(1 << n):\n            if not dp[mask]:\n                continue\n            pos = bin(mask).count('1') + 1\n            for v in range(1, n + 1):\n                if not (mask >> (v - 1)) & 1 and gcd(v, pos) == 1:\n                    dp[mask | 1 << (v - 1)] += dp[mask]\n        return dp[-1]",
   "time": "O(2ⁿ · n)",
   "space": "O(2ⁿ)",
   "explain": "A permutation of 1…n is self-divisible if gcd(a_i, i) = 1 for every position i. Fill positions 1, 2, 3… in order; the mask of used numbers tells how many positions are filled, so dp[mask] = ways to reach it, trying each unused value that is coprime with the next position.",
   "frames": []
  }
 ]
};
