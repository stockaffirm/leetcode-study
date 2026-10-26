window.PROBLEM = {
 "id": "639",
 "title": "Decode Ways II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'1*': the star can be 1–9. As two letters: 11–19 (9 ways); as single letters 1, then * = 1…9 (9 ways) → 18.",
 "idea": "dp[i] is the number of ways to decode the first i characters. Add the single-character ways (a digit 1–9 counts once, '*' counts 9 times) times dp[i−1], and the two-character ways (like 1* = 9 values, 2* = 6 values, ** = 15 values) times dp[i−2]. Everything modulo 10⁹+7.",
 "input": "s = \"1*\"",
 "output": "18",
 "notes": [],
 "best": "dp[i] is the number of ways to decode the first i characters. Add the single-character ways (a digit 1–9 counts once, '*' counts 9 times) times dp[i−1], and the two-character ways (like 1* = 9 values, 2* = 6 values, ** = 15 values) times dp[i−2]. Everything modulo 10⁹+7.",
 "variants": [
  {
   "name": "DP with wildcard counts",
   "code": "class Solution:\n    def numDecodings(self, s):\n        MOD = 10 ** 9 + 7\n        n = len(s)\n        dp = [0] * (n + 1)\n        dp[0] = 1\n        dp[1] = 9 if s[0] == \"*\" else (0 if s[0] == \"0\" else 1)\n        for i in range(2, n + 1):\n            c, p = s[i - 1], s[i - 2]\n            if c == \"*\":\n                dp[i] += 9 * dp[i - 1]\n            elif c != \"0\":\n                dp[i] += dp[i - 1]\n            if p == \"*\":\n                if c == \"*\":\n                    dp[i] += 15 * dp[i - 2]\n                elif c <= \"6\":\n                    dp[i] += 2 * dp[i - 2]\n                else:\n                    dp[i] += dp[i - 2]\n            elif p == \"1\":\n                dp[i] += (9 if c == \"*\" else 1) * dp[i - 2]\n            elif p == \"2\":\n                if c == \"*\":\n                    dp[i] += 6 * dp[i - 2]\n                elif c <= \"6\":\n                    dp[i] += dp[i - 2]\n            dp[i] %= MOD\n        return dp[n]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[i] is the number of ways to decode the first i characters. Add the single-character ways (a digit 1–9 counts once, '*' counts 9 times) times dp[i−1], and the two-character ways (like 1* = 9 values, 2* = 6 values, ** = 15 values) times dp[i−2]. Everything modulo 10⁹+7.",
   "frames": []
  }
 ]
};
