window.PROBLEM = {
 "id": "3405",
 "title": "Count the Number of Arrays with K Matching Adjacent Elements",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Count arrays of length n with elements in [1, m] that have exactly k indices i (1 ≤ i < n) where arr[i−1] == arr[i], modulo 1 000 000 007. Example: n=3, m=2, k=1 → 4.",
 "why": "n=3, m=2, k=1 → arrays like [1,1,2], [2,1,1] … 4.",
 "idea": "An array has k positions where a neighbour equals the previous one, so there are n−1−k positions where the value changes. Choose which of the n−1 neighbour pairs are equal: C(n−1, k). The first value has m choices and each change has m−1 choices: m · (m−1)^(n−1−k). Multiply modulo 1e9+7.",
 "input": "n = 3, m = 2, k = 1",
 "output": "4",
 "notes": [],
 "best": "An array has k positions where a neighbour equals the previous one, so there are n−1−k positions where the value changes. Choose which of the n−1 neighbour pairs are equal: C(n−1, k). The first value has m choices and each change has m−1 choices: m · (m−1)^(n−1−k). Multiply modulo 1e9+7.",
 "variants": [
  {
   "name": "Choose where equal neighbours sit, then pick values",
   "code": "class Solution:\n    def countGoodArrays(self, n, m, k):\n        MOD = 10**9 + 7\n        return comb(n - 1, k) % MOD * m % MOD * pow(m - 1, n - 1 - k, MOD) % MOD",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "An array has k positions where a neighbour equals the previous one, so there are n−1−k positions where the value changes. Choose which of the n−1 neighbour pairs are equal: C(n−1, k). The first value has m choices and each change has m−1 choices: m · (m−1)^(n−1−k). Multiply modulo 1e9+7.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over positions and equal-neighbour count",
   "tag": "Brute force",
   "code": "class Solution:\n    def countGoodArrays(self, n, m, k):\n        MOD = 10**9 + 7\n        dp = [0] * (k + 1)\n        dp[0] = m\n        for _ in range(n - 1):\n            new = [0] * (k + 1)\n            for j in range(k + 1):\n                new[j] = dp[j] * (m - 1) % MOD\n                if j:\n                    new[j] = (new[j] + dp[j - 1]) % MOD\n            dp = new\n        return dp[k] % MOD",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "dp[j] = arrays of the current length with exactly j equal neighbours.",
   "frames": [],
   "alt": true
  }
 ]
};
