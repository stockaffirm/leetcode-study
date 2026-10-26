window.PROBLEM = {
 "id": "664",
 "title": "Strange Printer",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'aba': print 'aaa', then print 'b' over the middle → 2 turns.",
 "idea": "Squeeze runs of equal letters first. dp[i][j] = turns for s[i..j]. Print s[i] alone and solve the rest (1 + dp[i+1][j]), or, if some s[k] equals s[i], let the same print stroke cover i and k: dp[i+1][k−1] + dp[k][j].",
 "input": "s = \"aba\"",
 "output": "2",
 "notes": [],
 "best": "Squeeze runs of equal letters first. dp[i][j] = turns for s[i..j]. Print s[i] alone and solve the rest (1 + dp[i+1][j]), or, if some s[k] equals s[i], let the same print stroke cover i and k: dp[i+1][k−1] + dp[k][j].",
 "variants": [
  {
   "name": "Interval DP: merge with a matching letter",
   "code": "class Solution:\n    def strangePrinter(self, s):\n        s = ''.join(c for c, _ in groupby(s))\n        n = len(s)\n        dp = [[0] * n for _ in range(n)]\n        for i in range(n - 1, -1, -1):\n            dp[i][i] = 1\n            for j in range(i + 1, n):\n                dp[i][j] = dp[i + 1][j] + 1\n                for k in range(i + 1, j + 1):\n                    if s[k] == s[i]:\n                        mid = dp[i + 1][k - 1] if k > i + 1 else 0\n                        dp[i][j] = min(dp[i][j], mid + dp[k][j])\n        return dp[0][n - 1]",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "Squeeze runs of equal letters first. dp[i][j] = turns for s[i..j]. Print s[i] alone and solve the rest (1 + dp[i+1][j]), or, if some s[k] equals s[i], let the same print stroke cover i and k: dp[i+1][k−1] + dp[k][j].",
   "frames": []
  }
 ]
};
