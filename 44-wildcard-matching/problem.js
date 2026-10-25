window.PROBLEM = {
 "id": "44",
 "title": "Wildcard Matching",
 "level": "Hard",
 "topic": "Greedy",
 "question": "Given a text s and a pattern p, return true if the pattern matches the ENTIRE text. In the pattern '?' matches any single character and '*' matches any sequence of characters (including an empty one). Example: s='adceb', p='*a*b' → the first * matches '', then 'a', then * matches 'dce', then 'b' → true; s='cb', p='?a' → false.",
 "why": "Match a pattern against the whole text; '?' matches any one character and '*' matches any sequence (including none).",
 "idea": "Walk both strings. On '*' remember its position and how much text it covers; if a later mismatch happens, go back to the last star and let it swallow one more character of the text.",
 "input": "s=\"adceb\", p=\"*a*b\"",
 "output": "True",
 "notes": [],
 "best": "Walk both strings. On '*' remember its position and how much text it covers; if a later mismatch happens, go back to the last star and let it swallow one more character of the text.",
 "variants": [
  {
   "name": "Greedy with a remembered star",
   "code": "class Solution:\n    def isMatch(self, s, p):\n        i = j = 0\n        star = match = -1\n        while i < len(s):\n            if j < len(p) and (p[j] == s[i] or p[j] == '?'):\n                i += 1\n                j += 1\n            elif j < len(p) and p[j] == '*':\n                star, match = j, i\n                j += 1\n            elif star != -1:\n                j = star + 1\n                match += 1\n                i = match\n            else:\n                return False\n        while j < len(p) and p[j] == '*': j += 1\n        return j == len(p)",
   "time": "O(n·m) worst case",
   "space": "O(1)",
   "explain": "Walk both strings. On '*' remember its position and how much text it covers; if a later mismatch happens, go back to the last star and let it swallow one more character of the text.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP table",
   "tag": "Alternative",
   "code": "class Solution:\n    def isMatch(self, s, p):\n        m, n = len(s), len(p)\n        dp = [[False] * (n + 1) for _ in range(m + 1)]\n        dp[0][0] = True\n        for j in range(1, n + 1):\n            if p[j - 1] == '*': dp[0][j] = dp[0][j - 1]\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if p[j - 1] == '*': dp[i][j] = dp[i - 1][j] or dp[i][j - 1]\n                elif p[j - 1] in ('?', s[i - 1]): dp[i][j] = dp[i - 1][j - 1]\n        return dp[m][n]",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "dp[i][j] = do the first i letters match the first j pattern symbols?",
   "frames": [],
   "alt": true
  }
 ]
};
