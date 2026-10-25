window.PROBLEM = {
 "id": "516",
 "title": "Longest Palindromic Subsequence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Return the length of the longest palindromic SUBSEQUENCE of a string — letters kept in their order but not necessarily next to each other. Example: 'bbbab' → 4 ('bbbb').",
 "why": "Find the length of the longest palindrome that can be read from the string by deleting letters (without reordering).",
 "idea": "dp[i][j] = answer for s[i..j]. If the end letters match, they wrap the answer for the inside (+2); otherwise drop one end and take the better.",
 "input": "'bbbab'",
 "output": "4",
 "notes": [],
 "best": "dp[i][j] = answer for s[i..j]. If the end letters match, they wrap the answer for the inside (+2); otherwise drop one end and take the better.",
 "variants": [
  {
   "name": "Interval DP",
   "code": "class Solution:\n    def longestPalindromeSubseq(self, s):\n        n = len(s)\n        dp = [[0] * n for _ in range(n)]\n        for i in range(n - 1, -1, -1):\n            dp[i][i] = 1\n            for j in range(i + 1, n):\n                if s[i] == s[j]: dp[i][j] = dp[i + 1][j - 1] + 2\n                else: dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n        return dp[0][n - 1]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i][j] = answer for s[i..j]. If the end letters match, they wrap the answer for the inside (+2); otherwise drop one end and take the better.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestPalindromeSubseq(self, s):\n        @lru_cache(None)\n        def f(i, j):\n            if i > j: return 0\n            if i == j: return 1\n            if s[i] == s[j]: return f(i + 1, j - 1) + 2\n            return max(f(i + 1, j), f(i, j - 1))\n        return f(0, len(s) - 1)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "The same recurrence written top-down.",
   "frames": [],
   "alt": true
  }
 ]
};
