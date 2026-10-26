window.PROBLEM = {
 "id": "647",
 "title": "Palindromic Substrings",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Given a string s, return how many of its substrings (pieces made of letters sitting next to each other) are palindromes — they read the same forwards and backwards. Pieces at different positions count separately even if they look alike. Example: 'abc' → 'a', 'b', 'c' → 3; 'aaa' → 6.",
 "why": "Count the pieces of a string that read the same backwards (each position counts separately). 'aaa' has 6.",
 "idea": "Every palindrome has a centre (a letter, or the gap between two). From each of the 2n−1 centres expand outwards while the letters match, counting each step.",
 "input": "\"abc\"",
 "output": "3",
 "notes": [],
 "best": "Every palindrome has a centre (a letter, or the gap between two). From each of the 2n−1 centres expand outwards while the letters match, counting each step.",
 "variants": [
  {
   "name": "Expand around every centre",
   "code": "class Solution:\n    def countSubstrings(self, s):\n        count = 0\n        for center in range(2 * len(s) - 1):\n            l, r = center // 2, center // 2 + center % 2\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                count += 1\n                l -= 1\n                r += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Every palindrome has a centre (a letter, or the gap between two). From each of the 2n−1 centres expand outwards while the letters match, counting each step.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP table",
   "tag": "Alternative",
   "code": "class Solution:\n    def countSubstrings(self, s):\n        n = len(s)\n        dp = [[False] * n for _ in range(n)]\n        count = 0\n        for i in range(n - 1, -1, -1):\n            for j in range(i, n):\n                if s[i] == s[j] and (j - i < 2 or dp[i + 1][j - 1]):\n                    dp[i][j] = True\n                    count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i][j] says whether s[i..j] is a palindrome, built from shorter ones.",
   "frames": [],
   "alt": true
  }
 ]
};
