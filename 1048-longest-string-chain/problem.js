window.PROBLEM = {
 "id": "1048",
 "title": "Longest String Chain",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A word a is a 'predecessor' of word b if you can make b by inserting exactly one letter anywhere in a. A word chain is a sequence of words where each is a predecessor of the next. Given a list of words, return the length of the longest chain you can form using words from the list (any order of choosing). Example: ['a','b','ba','bca','bda','bdca'] → a → ba → bda → bdca → 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestStrChain(self, words):\n        ws = set(words)\n        @lru_cache(None)\n        def go(w):\n            best = 1\n            for i in range(len(w)):\n                prev = w[:i] + w[i + 1:]\n                if prev in ws: best = max(best, go(prev) + 1)\n            return best\n        return max(go(w) for w in words)",
   "time": "O(n·L²)",
   "space": "O(n)",
   "explain": "Longest chain ending at a word = 1 + best of its one-letter-shorter words that exist.",
   "frames": [],
   "alt": true
  }
 ]
};
