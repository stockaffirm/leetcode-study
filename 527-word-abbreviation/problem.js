window.PROBLEM = {
 "id": "527",
 "title": "Word Abbreviation",
 "level": "Hard",
 "topic": "Trie",
 "question": "",
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
   "frames": []
  }
 ]
};
