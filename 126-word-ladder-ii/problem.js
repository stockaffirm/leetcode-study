window.PROBLEM = {
 "id": "126",
 "title": "Word Ladder II",
 "level": "Hard",
 "topic": "Graph",
 "question": "You turn beginWord into endWord one step at a time, changing exactly ONE letter per step, and every word you create must be in wordList (the begin word need not be). Return ALL the shortest sequences (as lists of words) from beginWord to endWord, in any order, or an empty list if there is none. Example: 'hit' → 'cog' with words [hot,dot,dog,lot,log,cog] → [['hit','hot','dot','dog','cog'], ['hit','hot','lot','log','cog']].",
 "why": "Like Word Ladder, but list EVERY shortest sequence from beginWord to endWord (one changed letter per step, all words from the list).",
 "idea": "BFS level by level, remembering for each word which words at the previous level reach it (its parents). When the end word is found, walk the parents backwards to rebuild every shortest path.",
 "input": "hit → cog with [hot,dot,dog,lot,log,cog]",
 "output": "[[hit,hot,dot,dog,cog],[hit,hot,lot,log,cog]]",
 "notes": [],
 "best": "BFS level by level, remembering for each word which words at the previous level reach it (its parents). When the end word is found, walk the parents backwards to rebuild every shortest path.",
 "variants": [
  {
   "name": "BFS levels with parents, then rebuild paths",
   "code": "class Solution:\n    def findLadders(self, beginWord, endWord, wordList):\n        words = set(wordList)\n        if endWord not in words: return []\n        parents = defaultdict(set)\n        level = {beginWord}\n        found = False\n        while level and not found:\n            words -= level\n            nxt = defaultdict(set)\n            for w in level:\n                for i in range(len(w)):\n                    for ch in 'abcdefghijklmnopqrstuvwxyz':\n                        n = w[:i] + ch + w[i + 1:]\n                        if n in words:\n                            nxt[n].add(w)\n                            if n == endWord: found = True\n            for n, ps in nxt.items(): parents[n] |= ps\n            level = set(nxt)\n        res = []\n        def back(w, path):\n            if w == beginWord:\n                res.append(path[::-1])\n                return\n            for p in parents[w]: back(p, path + [p])\n        if found: back(endWord, [endWord])\n        return res",
   "time": "O(N·L·26)",
   "space": "O(N·L)",
   "explain": "BFS level by level, remembering for each word which words at the previous level reach it (its parents). When the end word is found, walk the parents backwards to rebuild every shortest path.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS carrying whole paths",
   "tag": "Alternative",
   "code": "class Solution:\n    def findLadders(self, beginWord, endWord, wordList):\n        words = set(wordList)\n        if endWord not in words: return []\n        paths, res = [[beginWord]], []\n        while paths and not res:\n            words -= {p[-1] for p in paths}\n            nxt = []\n            for path in paths:\n                w = path[-1]\n                for i in range(len(w)):\n                    for ch in 'abcdefghijklmnopqrstuvwxyz':\n                        n = w[:i] + ch + w[i + 1:]\n                        if n in words:\n                            if n == endWord: res.append(path + [n])\n                            else: nxt.append(path + [n])\n            paths = nxt\n        return res",
   "time": "O(N·L·26 · paths)",
   "space": "O(paths)",
   "explain": "Each BFS level stores complete paths; stop at the first level that reaches the end word.",
   "frames": [],
   "alt": true
  }
 ]
};
