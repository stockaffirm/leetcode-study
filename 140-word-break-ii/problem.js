window.PROBLEM = {
 "id": "140",
 "title": "Word Break II",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
