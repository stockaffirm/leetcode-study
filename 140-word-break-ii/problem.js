window.PROBLEM = {
 "id": "140",
 "title": "Word Break II",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "Given a string s and a list of words wordDict, add spaces to s to cut it into a sentence made only of words from the dictionary (a word can be used more than once). Return ALL the different sentences you can make, in any order, or an empty list if there is none. Example: s='catsanddog', words [cat, cats, and, sand, dog] → ['cats and dog', 'cat sand dog'].",
 "why": "List every way to cut a string into dictionary words. 'catsanddog' → 'cats and dog' and 'cat sand dog'.",
 "idea": "From a start position try every word that fits, then solve the rest. Remember the answers per start position so the same suffix is never solved twice.",
 "input": "s=\"catsanddog\", words [cat, cats, and, sand, dog]",
 "output": "[\"cats and dog\", \"cat sand dog\"]",
 "notes": [],
 "best": "From a start position try every word that fits, then solve the rest. Remember the answers per start position so the same suffix is never solved twice.",
 "variants": [
  {
   "name": "DFS with memo",
   "code": "class Solution:\n    def wordBreak(self, s, wordDict):\n        words = set(wordDict)\n        @lru_cache(None)\n        def go(start):\n            if start == len(s): return ['']\n            res = []\n            for end in range(start + 1, len(s) + 1):\n                w = s[start:end]\n                if w in words:\n                    for rest in go(end):\n                        res.append(w + (' ' + rest if rest else ''))\n            return res\n        return go(0)",
   "time": "exponential in the worst case",
   "space": "O(n²)",
   "explain": "From a start position try every word that fits, then solve the rest. Remember the answers per start position so the same suffix is never solved twice.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bottom-up table of sentences",
   "tag": "Alternative",
   "code": "class Solution:\n    def wordBreak(self, s, wordDict):\n        words = set(wordDict)\n        n = len(s)\n        dp = [[] for _ in range(n + 1)]\n        dp[n] = ['']\n        for i in range(n - 1, -1, -1):\n            for j in range(i + 1, n + 1):\n                if s[i:j] in words:\n                    for rest in dp[j]:\n                        dp[i].append(s[i:j] + (' ' + rest if rest else ''))\n        return dp[0]",
   "time": "exponential in the worst case",
   "space": "O(n²)",
   "explain": "Fill dp[i] = all sentences for s[i:], from the end of the string backwards.",
   "frames": [],
   "alt": true
  }
 ]
};
