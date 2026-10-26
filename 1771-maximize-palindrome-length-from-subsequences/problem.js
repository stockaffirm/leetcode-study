window.PROBLEM = {
 "id": "1771",
 "title": "Maximize Palindrome Length From Subsequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'cacb' and 'cbba': the best palindrome using letters from both words has length 5.",
 "idea": "Concatenate the words and compute the longest palindromic subsequence dp[i][j]. A candidate only counts if its outer letters come from different words: when s[i] == s[j] with i in word1 and j in word2, record dp[i][j] as an answer.",
 "input": "word1 = \"cacb\", word2 = \"cbba\"",
 "output": "5",
 "notes": [],
 "best": "Concatenate the words and compute the longest palindromic subsequence dp[i][j]. A candidate only counts if its outer letters come from different words: when s[i] == s[j] with i in word1 and j in word2, record dp[i][j] as an answer.",
 "variants": [
  {
   "name": "Longest palindromic subsequence of word1 + word2 that uses both",
   "code": "class Solution:\n    def longestPalindrome(self, word1, word2):\n        s = word1 + word2\n        n, a = len(s), len(word1)\n        dp = [[0] * n for _ in range(n)]\n        best = 0\n        for i in range(n - 1, -1, -1):\n            dp[i][i] = 1\n            for j in range(i + 1, n):\n                if s[i] == s[j]:\n                    dp[i][j] = dp[i + 1][j - 1] + 2\n                    if i < a <= j:\n                        best = max(best, dp[i][j])\n                else:\n                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n        return best",
   "time": "O((n+m)²)",
   "space": "O((n+m)²)",
   "explain": "Concatenate the words and compute the longest palindromic subsequence dp[i][j]. A candidate only counts if its outer letters come from different words: when s[i] == s[j] with i in word1 and j in word2, record dp[i][j] as an answer.",
   "frames": []
  }
 ]
};
