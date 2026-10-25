window.PROBLEM = {
 "id": "2472",
 "title": "Maximum Number of Non-overlapping Palindrome Substrings",
 "level": "Hard",
 "topic": "Greedy",
 "question": "Choose substrings of s that do not overlap, each is a palindrome (reads the same backwards) and has length at least k. Return the maximum number you can choose. Example: 'abaccdbbd', k=3 → 2 ('aba' and 'dbbd').",
 "why": "Pick as many non-overlapping substrings as possible, each a palindrome of length at least k.",
 "idea": "Any palindrome longer than k+1 contains a palindrome of length k or k+1 in its middle that ends earlier. So only lengths k and k+1 matter: scan left to right and take a palindrome of those lengths as soon as one ends (and starts after the last pick).",
 "input": "'abaccdbbd', k=3",
 "output": "2",
 "notes": [],
 "best": "Any palindrome longer than k+1 contains a palindrome of length k or k+1 in its middle that ends earlier. So only lengths k and k+1 matter: scan left to right and take a palindrome of those lengths as soon as one ends (and starts after the last pick).",
 "variants": [
  {
   "name": "Greedy: earliest-ending short palindrome",
   "code": "class Solution:\n    def maxPalindromes(self, s, k):\n        count, last = 0, 0\n        for i in range(len(s)):\n            for L in (k, k + 1):\n                st = i - L + 1\n                if st >= last:\n                    t = s[st:i + 1]\n                    if t == t[::-1]:\n                        count += 1\n                        last = i + 1\n                        break\n        return count",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "Any palindrome longer than k+1 contains a palindrome of length k or k+1 in its middle that ends earlier. So only lengths k and k+1 matter: scan left to right and take a palindrome of those lengths as soon as one ends (and starts after the last pick).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over palindrome substrings",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxPalindromes(self, s, k):\n        n = len(s)\n        pal = [[False] * n for _ in range(n)]\n        for i in range(n - 1, -1, -1):\n            for j in range(i, n):\n                pal[i][j] = s[i] == s[j] and (j - i < 2 or pal[i + 1][j - 1])\n        dp = [0] * (n + 1)\n        for i in range(1, n + 1):\n            dp[i] = dp[i - 1]\n            for j in range(0, i - k + 1):\n                if pal[j][i - 1]: dp[i] = max(dp[i], dp[j] + 1)\n        return dp[n]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i] = best count using the first i letters; extend with any palindrome s[j:i] of length ≥ k.",
   "frames": [],
   "alt": true
  }
 ]
};
