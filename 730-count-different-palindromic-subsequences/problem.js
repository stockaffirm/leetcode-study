window.PROBLEM = {
 "id": "730",
 "title": "Count Different Palindromic Subsequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Count the DIFFERENT non-empty palindromes that can be read from a string over a, b, c, d (modulo 1,000,000,007).",
 "idea": "dp[i][j] for s[i..j]. If the end letters differ it is inclusion–exclusion. If they match letter x, look for the next and last x inside: none → the inside doubled plus 'x' and 'xx'; one → doubled plus 'xx'; several → doubled minus the ones counted twice.",
 "input": "'bccb'",
 "output": "6",
 "notes": [],
 "best": "dp[i][j] for s[i..j]. If the end letters differ it is inclusion–exclusion. If they match letter x, look for the next and last x inside: none → the inside doubled plus 'x' and 'xx'; one → doubled plus 'xx'; several → doubled minus the ones counted twice.",
 "variants": [
  {
   "name": "Interval DP with duplicate handling",
   "code": "class Solution:\n    def countPalindromicSubsequences(self, s):\n        MOD = 10 ** 9 + 7\n        n = len(s)\n        dp = [[0] * n for _ in range(n)]\n        for i in range(n): dp[i][i] = 1\n        for length in range(2, n + 1):\n            for i in range(n - length + 1):\n                j = i + length - 1\n                if s[i] != s[j]:\n                    dp[i][j] = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1]\n                else:\n                    lo, hi = i + 1, j - 1\n                    while lo <= hi and s[lo] != s[i]: lo += 1\n                    while lo <= hi and s[hi] != s[i]: hi -= 1\n                    if lo > hi: dp[i][j] = dp[i + 1][j - 1] * 2 + 2\n                    elif lo == hi: dp[i][j] = dp[i + 1][j - 1] * 2 + 1\n                    else: dp[i][j] = dp[i + 1][j - 1] * 2 - dp[lo + 1][hi - 1]\n                dp[i][j] %= MOD\n        return dp[0][n - 1]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i][j] for s[i..j]. If the end letters differ it is inclusion–exclusion. If they match letter x, look for the next and last x inside: none → the inside doubled plus 'x' and 'xx'; one → doubled plus 'xx'; several → doubled minus the ones counted twice.",
   "frames": []
  }
 ]
};
