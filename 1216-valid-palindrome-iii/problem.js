window.PROBLEM = {
 "id": "1216",
 "title": "Valid Palindrome III",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You may delete at most k characters from a string. Return true if the remaining string can be a palindrome. Example: 'abcdeca', k=2 → true (delete 'b' and 'e').",
 "why": "'abcdeca': the longest palindromic subsequence is 'acdca' (length 5), so only 7 − 5 = 2 letters must go (b and e); 2 ≤ k = 2 → true.",
 "idea": "The fewest characters to delete to get a palindrome is length − (longest palindromic subsequence). Compute that subsequence with an interval DP and compare with k.",
 "input": "s = \"abcdeca\", k = 2",
 "output": "true",
 "notes": [],
 "best": "The fewest characters to delete to get a palindrome is length − (longest palindromic subsequence). Compute that subsequence with an interval DP and compare with k.",
 "variants": [
  {
   "name": "Longest palindromic subsequence",
   "code": "class Solution:\n    def isValidPalindrome(self, s, k):\n        n = len(s)\n        dp = [[0] * n for _ in range(n)]\n        for i in range(n - 1, -1, -1):\n            dp[i][i] = 1\n            for j in range(i + 1, n):\n                if s[i] == s[j]:\n                    dp[i][j] = dp[i + 1][j - 1] + 2\n                else:\n                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n        return n - dp[0][n - 1] <= k",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "The fewest characters to delete to get a palindrome is length − (longest palindromic subsequence). Compute that subsequence with an interval DP and compare with k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoized minimum deletions",
   "tag": "Alternative",
   "code": "class Solution:\n    def isValidPalindrome(self, s, k):\n        n = len(s)\n        @lru_cache(None)\n        def go(i, j):\n            if i >= j:\n                return 0\n            if s[i] == s[j]:\n                return go(i + 1, j - 1)\n            return 1 + min(go(i + 1, j), go(i, j - 1))\n        return go(0, n - 1) <= k",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "go(i, j) is the number of deletions needed to make s[i..j] a palindrome.",
   "frames": [],
   "alt": true
  }
 ]
};
