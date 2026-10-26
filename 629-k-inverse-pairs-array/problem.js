window.PROBLEM = {
 "id": "629",
 "title": "K Inverse Pairs Array",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=3, k=1 → 2 permutations of 1,2,3 have exactly one inverse pair.",
 "idea": "dp[n][k] = number of permutations of 1…n with k inverse pairs. Placing the largest element n at position i (counting from the right) creates i inverse pairs, i from 0 to n−1, so dp[n][k] = dp[n−1][k] + … + dp[n−1][k−n+1]. Keep that window sum while sweeping k, modulo 1e9+7.",
 "input": "n = 3, k = 1",
 "output": "2",
 "notes": [],
 "best": "dp[n][k] = number of permutations of 1…n with k inverse pairs. Placing the largest element n at position i (counting from the right) creates i inverse pairs, i from 0 to n−1, so dp[n][k] = dp[n−1][k] + … + dp[n−1][k−n+1]. Keep that window sum while sweeping k, modulo 1e9+7.",
 "variants": [
  {
   "name": "dp[n][k] with a sliding window sum",
   "code": "class Solution:\n    def kInversePairs(self, n, k):\n        MOD = 10**9 + 7\n        dp = [1] + [0] * k\n        for m in range(2, n + 1):\n            new = [0] * (k + 1)\n            window = 0\n            for j in range(k + 1):\n                window += dp[j]\n                if j >= m:\n                    window -= dp[j - m]\n                new[j] = window % MOD\n            dp = new\n        return dp[k]",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "dp[n][k] = number of permutations of 1…n with k inverse pairs. Placing the largest element n at position i (counting from the right) creates i inverse pairs, i from 0 to n−1, so dp[n][k] = dp[n−1][k] + … + dp[n−1][k−n+1]. Keep that window sum while sweeping k, modulo 1e9+7.",
   "frames": []
  }
 ]
};
