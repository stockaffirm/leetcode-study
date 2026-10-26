window.PROBLEM = {
 "id": "1092",
 "title": "Shortest Common Supersequence",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'abac' and 'cab' → 'cabac' (length 5).",
 "idea": "dp[i][j] = length of the shortest string having both str1[i:] and str2[j:] as subsequences. If the letters match they share one character; otherwise take the better of using str1's or str2's letter. Walk the table from (0,0) writing characters, preferring str1's letter on a tie.",
 "input": "str1 = \"abac\", str2 = \"cab\"",
 "output": "\"cabac\"",
 "notes": [],
 "best": "dp[i][j] = length of the shortest string having both str1[i:] and str2[j:] as subsequences. If the letters match they share one character; otherwise take the better of using str1's or str2's letter. Walk the table from (0,0) writing characters, preferring str1's letter on a tie.",
 "variants": [
  {
   "name": "DP table of supersequence lengths, then rebuild",
   "code": "class Solution:\n    def shortestCommonSupersequence(self, str1, str2):\n        n, m = len(str1), len(str2)\n        dp = [[0] * (m + 1) for _ in range(n + 1)]\n        for i in range(n, -1, -1):\n            for j in range(m, -1, -1):\n                if i == n:\n                    dp[i][j] = m - j\n                elif j == m:\n                    dp[i][j] = n - i\n                elif str1[i] == str2[j]:\n                    dp[i][j] = 1 + dp[i + 1][j + 1]\n                else:\n                    dp[i][j] = 1 + min(dp[i + 1][j], dp[i][j + 1])\n        out = []\n        i = j = 0\n        while i < n and j < m:\n            if str1[i] == str2[j]:\n                out.append(str1[i])\n                i += 1\n                j += 1\n            elif dp[i + 1][j] <= dp[i][j + 1]:\n                out.append(str1[i])\n                i += 1\n            else:\n                out.append(str2[j])\n                j += 1\n        return ''.join(out) + str1[i:] + str2[j:]",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "dp[i][j] = length of the shortest string having both str1[i:] and str2[j:] as subsequences. If the letters match they share one character; otherwise take the better of using str1's or str2's letter. Walk the table from (0,0) writing characters, preferring str1's letter on a tie.",
   "frames": []
  }
 ]
};
