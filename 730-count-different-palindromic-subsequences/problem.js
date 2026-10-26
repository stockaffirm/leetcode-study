window.PROBLEM = {
 "id": "730",
 "title": "Count Different Palindromic Subsequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A string uses only the letters a, b, c, d. Count the DIFFERENT non-empty palindromes that can be obtained as subsequences (letters kept in order, deletions allowed); equal palindromes count once. Return the count modulo 1,000,000,007. Example: 'bccb' → 6 (b, c, bb, cc, bcb, bccb).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down by letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def countPalindromicSubsequences(self, s):\n        MOD = 10 ** 9 + 7\n        @lru_cache(None)\n        def f(i, j):\n            if i > j: return 0\n            total = 0\n            for ch in 'abcd':\n                l = s.find(ch, i, j + 1)\n                if l == -1: continue\n                r = s.rfind(ch, i, j + 1)\n                if l == r: total += 1\n                else: total += 2 + f(l + 1, r - 1)\n            return total % MOD\n        return f(0, len(s) - 1)",
   "time": "O(4·n²)",
   "space": "O(n²)",
   "explain": "For each letter x take its first and last occurrence in the range: 'x', 'xx' and x…x around the inner palindromes.",
   "frames": [],
   "alt": true
  }
 ]
};
