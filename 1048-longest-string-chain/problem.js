window.PROBLEM = {
 "id": "1048",
 "title": "Longest String Chain",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "A chain grows a word by inserting ONE letter each step (a → ba → bda → bdca). Longest chain in the list?",
 "idea": "Process words from shortest to longest. For each word try deleting each letter; if the shorter word has a chain of length L, this word has L + 1. Keep the maximum.",
 "input": "[\"a\",\"b\",\"ba\",\"bca\",\"bda\",\"bdca\"]",
 "output": "4",
 "notes": [],
 "best": "Process words from shortest to longest. For each word try deleting each letter; if the shorter word has a chain of length L, this word has L + 1. Keep the maximum.",
 "variants": [
  {
   "name": "DP over words sorted by length",
   "code": "class Solution:\n    def longestStrChain(self, words):\n        dp = {}\n        best = 1\n        for w in sorted(words, key=len):\n            dp[w] = 1\n            for i in range(len(w)):\n                prev = w[:i] + w[i + 1:]\n                if prev in dp: dp[w] = max(dp[w], dp[prev] + 1)\n            best = max(best, dp[w])\n        return best",
   "time": "O(n·L²)",
   "space": "O(n)",
   "explain": "Process words from shortest to longest. For each word try deleting each letter; if the shorter word has a chain of length L, this word has L + 1. Keep the maximum.",
   "frames": []
  }
 ]
};
