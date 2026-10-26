window.PROBLEM = {
 "id": "126",
 "title": "Word Ladder II",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
