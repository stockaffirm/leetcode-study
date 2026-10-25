window.PROBLEM = {
 "id": "132",
 "title": "Palindrome Partitioning II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Cut a string into pieces so that every piece is a palindrome; return the minimum number of cuts. Example: 'aab' → 1 ('aa' | 'b').",
 "why": "'aab' → 'aa' | 'b': one cut.",
 "idea": "cut[i] is the minimum number of cuts for the first i letters (initially i − 1). Every palindrome found by expanding around a centre s[l..r] lets the prefix ending at r be cut at l: cut[r+1] = min(cut[r+1], cut[l] + 1).",
 "input": "s = \"aab\"",
 "output": "1",
 "notes": [],
 "best": "cut[i] is the minimum number of cuts for the first i letters (initially i − 1). Every palindrome found by expanding around a centre s[l..r] lets the prefix ending at r be cut at l: cut[r+1] = min(cut[r+1], cut[l] + 1).",
 "variants": [
  {
   "name": "Expand around centres",
   "code": "class Solution:\n    def minCut(self, s):\n        n = len(s)\n        cut = list(range(-1, n))\n        for c in range(n):\n            for l, r in ((c, c), (c, c + 1)):\n                while l >= 0 and r < n and s[l] == s[r]:\n                    cut[r + 1] = min(cut[r + 1], cut[l] + 1)\n                    l -= 1\n                    r += 1\n        return cut[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "cut[i] is the minimum number of cuts for the first i letters (initially i − 1). Every palindrome found by expanding around a centre s[l..r] lets the prefix ending at r be cut at l: cut[r+1] = min(cut[r+1], cut[l] + 1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Palindrome table + DP",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCut(self, s):\n        n = len(s)\n        pal = [[False] * n for _ in range(n)]\n        for i in range(n - 1, -1, -1):\n            for j in range(i, n):\n                if s[i] == s[j] and (j - i < 2 or pal[i + 1][j - 1]):\n                    pal[i][j] = True\n        dp = [0] * n\n        for j in range(n):\n            if pal[0][j]:\n                dp[j] = 0\n            else:\n                dp[j] = min(dp[i - 1] + 1 for i in range(1, j + 1) if pal[i][j])\n        return dp[n - 1]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "First mark which substrings are palindromes, then let dp[i] be the fewest cuts for the first i letters.",
   "frames": [],
   "alt": true
  }
 ]
};
