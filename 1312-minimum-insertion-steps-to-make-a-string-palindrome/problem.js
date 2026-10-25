window.PROBLEM = {
 "id": "1312",
 "title": "Minimum Insertion Steps to Make a String Palindrome",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "In one step you may insert any character anywhere in s. Return the minimum number of insertions that make s a palindrome. Example: 'mbadm' → 2.",
 "why": "'mbadm' → keep 'mam' (3) and insert the 2 others → 2 insertions.",
 "idea": "Characters of a longest palindromic subsequence already pair up; every other character needs a partner inserted. So the answer is n − LPS, and LPS is the longest common subsequence of s and its reverse.",
 "input": "s = \"mbadm\"",
 "output": "2",
 "notes": [],
 "best": "Characters of a longest palindromic subsequence already pair up; every other character needs a partner inserted. So the answer is n − LPS, and LPS is the longest common subsequence of s and its reverse.",
 "variants": [
  {
   "name": "Length minus the longest palindromic subsequence",
   "code": "class Solution:\n    def minInsertions(self, s):\n        t = s[::-1]\n        n = len(s)\n        prev = [0] * (n + 1)\n        for i in range(1, n + 1):\n            cur = [0] * (n + 1)\n            for j in range(1, n + 1):\n                if s[i - 1] == t[j - 1]:\n                    cur[j] = prev[j - 1] + 1\n                else:\n                    cur[j] = max(prev[j], cur[j - 1])\n            prev = cur\n        return n - prev[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Characters of a longest palindromic subsequence already pair up; every other character needs a partner inserted. So the answer is n − LPS, and LPS is the longest common subsequence of s and its reverse.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Interval DP on the string itself",
   "tag": "Alternative",
   "code": "class Solution:\n    def minInsertions(self, s):\n        n = len(s)\n        dp = [[0] * n for _ in range(n)]\n        for i in range(n - 2, -1, -1):\n            for j in range(i + 1, n):\n                if s[i] == s[j]:\n                    dp[i][j] = dp[i + 1][j - 1]\n                else:\n                    dp[i][j] = 1 + min(dp[i + 1][j], dp[i][j - 1])\n        return dp[0][n - 1]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i][j] = insertions to make s[i..j] a palindrome: free if the ends match, otherwise 1 + the cheaper of dropping either end.",
   "frames": [],
   "alt": true
  }
 ]
};
