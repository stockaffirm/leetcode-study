window.PROBLEM = {
 "id": "10",
 "title": "Regular Expression Matching",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Does the pattern match the WHOLE text? '.' matches any one letter; 'x*' matches zero or more x. 'aa' matches 'a*'.",
 "idea": "dp[i][j] = does the first i letters of the text match the first j pattern characters. A '*' can either vanish (zero copies: look two columns back) or eat one more matching letter (look one row up).",
 "input": "s=\"aa\", p=\"a*\"",
 "output": "True",
 "notes": [],
 "best": "dp[i][j] = does the first i letters of the text match the first j pattern characters. A '*' can either vanish (zero copies: look two columns back) or eat one more matching letter (look one row up).",
 "variants": [
  {
   "name": "DP table over (text, pattern)",
   "code": "class Solution:\n    def isMatch(self, s, p):\n        m, n = len(s), len(p)\n        dp = [[False] * (n + 1) for _ in range(m + 1)]\n        dp[0][0] = True\n        for j in range(2, n + 1):\n            if p[j - 1] == '*': dp[0][j] = dp[0][j - 2]\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if p[j - 1] == '*':\n                    dp[i][j] = dp[i][j - 2] or (p[j - 2] in (s[i - 1], '.') and dp[i - 1][j])\n                else:\n                    dp[i][j] = p[j - 1] in (s[i - 1], '.') and dp[i - 1][j - 1]\n        return dp[m][n]",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "dp[i][j] = does the first i letters of the text match the first j pattern characters. A '*' can either vanish (zero copies: look two columns back) or eat one more matching letter (look one row up).",
   "frames": []
  }
 ]
};
