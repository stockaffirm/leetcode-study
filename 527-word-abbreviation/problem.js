window.PROBLEM = {
 "id": "527",
 "title": "Word Abbreviation",
 "level": "Hard",
 "topic": "Trie",
 "question": "Give each word the shortest possible abbreviation: its first k letters, then the number of omitted letters, then its last letter. If two words get the same abbreviation, increase k for them until unique; if the abbreviation is not shorter than the word keep the word. Return the abbreviations in the original order. Example: ['like','god','internal','me','internet','interval','intension','face','intrusion'] → ['l2e','god','internal','me','i6t','interval','inte4n','f2e','intr4n'].",
 "why": "'internal' vs 'interval': same start 'inter', so they keep their full spelling; 'face' → 'f2e'.",
 "idea": "An abbreviation is a prefix + count + last letter, used only if shorter than the word, and it must be unique. Only words with the same length and last letter can clash. Within such a group sort the words: the prefix needed for a word is one longer than its longest common prefix with either sorted neighbour.",
 "input": "words = [\"like\",\"god\",\"internal\",\"me\",\"internet\",\"interval\",\"intension\",\"face\",\"intrusion\"]",
 "output": "['l2e', 'god', 'internal', 'me', 'i6t', 'interval', 'inte4n', 'f2e', 'intr4n']",
 "notes": [],
 "best": "An abbreviation is a prefix + count + last letter, used only if shorter than the word, and it must be unique. Only words with the same length and last letter can clash. Within such a group sort the words: the prefix needed for a word is one longer than its longest common prefix with either sorted neighbour.",
 "variants": [
  {
   "name": "Group by length and last letter, use neighbour LCP",
   "code": "class Solution:\n    def wordsAbbreviation(self, words):\n        groups = defaultdict(list)\n        for i, w in enumerate(words):\n            groups[(len(w), w[-1])].append(i)\n        res = [None] * len(words)\n        def lcp(a, b):\n            k = 0\n            while k < min(len(a), len(b)) and a[k] == b[k]:\n                k += 1\n            return k\n        for idxs in groups.values():\n            idxs.sort(key=lambda i: words[i])\n            for t, i in enumerate(idxs):\n                w = words[i]\n                pre = 0\n                if t > 0:\n                    pre = max(pre, lcp(w, words[idxs[t - 1]]))\n                if t + 1 < len(idxs):\n                    pre = max(pre, lcp(w, words[idxs[t + 1]]))\n                pre += 1\n                abbr = w[:pre] + str(len(w) - pre - 1) + w[-1]\n                res[i] = abbr if len(abbr) < len(w) else w\n        return res",
   "time": "O(n·L log n)",
   "space": "O(n·L)",
   "explain": "An abbreviation is a prefix + count + last letter, used only if shorter than the word, and it must be unique. Only words with the same length and last letter can clash. Within such a group sort the words: the prefix needed for a word is one longer than its longest common prefix with either sorted neighbour.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Grow prefixes until all are unique",
   "tag": "Alternative",
   "code": "class Solution:\n    def wordsAbbreviation(self, words):\n        n = len(words)\n        pre = [1] * n\n        def abbr(i):\n            w = words[i]\n            a = w[:pre[i]] + str(len(w) - pre[i] - 1) + w[-1]\n            return a if len(a) < len(w) else w\n        res = [abbr(i) for i in range(n)]\n        while True:\n            groups = defaultdict(list)\n            for i, a in enumerate(res):\n                groups[a].append(i)\n            changed = False\n            for idxs in groups.values():\n                if len(idxs) > 1:\n                    for i in idxs:\n                        pre[i] += 1\n                    changed = True\n            if not changed:\n                return res\n            res = [abbr(i) for i in range(n)]",
   "time": "O(n·L·n)",
   "space": "O(n·L)",
   "explain": "Start every word with a prefix of length 1 and lengthen the prefixes of words whose abbreviation collides, repeating until no collision remains.",
   "frames": [],
   "alt": true
  }
 ]
};
