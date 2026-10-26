window.PROBLEM = {
 "id": "2787",
 "title": "Ways to Express an Integer as Sum of Powers",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Return the number of ways to write n as a sum of distinct positive integers each raised to the power x, modulo 1 000 000 007. Example: n=10, x=2 → 1 (1² + 3²).",
 "why": "n=10, x=2: 1² + 3² = 10 is the only way → 1.",
 "idea": "Use each positive integer at most once, contributing i^x. dp[s] = number of ways to reach sum s; process each i with i^x ≤ n and update sums from high to low. Modulo 1e9+7.",
 "input": "n = 10, x = 2",
 "output": "1",
 "notes": [],
 "best": "Use each positive integer at most once, contributing i^x. dp[s] = number of ways to reach sum s; process each i with i^x ≤ n and update sums from high to low. Modulo 1e9+7.",
 "variants": [
  {
   "name": "0/1 knapsack with i^x items",
   "code": "class Solution:\n    def numberOfWays(self, n, x):\n        MOD = 10**9 + 7\n        dp = [1] + [0] * n\n        i = 1\n        while i ** x <= n:\n            p = i ** x\n            for s in range(n, p - 1, -1):\n                dp[s] = (dp[s] + dp[s - p]) % MOD\n            i += 1\n        return dp[n]",
   "time": "O(n·n^(1/x))",
   "space": "O(n)",
   "explain": "Use each positive integer at most once, contributing i^x. dp[s] = number of ways to reach sum s; process each i with i^x ≤ n and update sums from high to low. Modulo 1e9+7.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberOfWays(self, n, x):\n        MOD = 10**9 + 7\n        @lru_cache(None)\n        def go(rem, i):\n            if rem == 0:\n                return 1\n            if i ** x > rem:\n                return 0\n            return (go(rem - i ** x, i + 1) + go(rem, i + 1)) % MOD\n        return go(n, 1)",
   "time": "O(n·n^(1/x))",
   "space": "O(n)",
   "explain": "count(remaining, next base) with memoisation.",
   "frames": [],
   "alt": true
  }
 ]
};
