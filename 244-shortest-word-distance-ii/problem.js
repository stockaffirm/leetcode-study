window.PROBLEM = {
 "id": "244",
 "title": "Shortest Word Distance II",
 "level": "Medium",
 "topic": "Design",
 "question": "Build a class that is given a list of words once, and then answers many queries 'shortest(word1, word2)': the smallest distance between a position of word1 and a position of word2 in the list (the words are different). Example: ['practice','makes','perfect','coding','makes'], shortest('coding','practice') → 3.",
 "why": "Store a list of words once, then answer many queries: the smallest gap between a position of word1 and a position of word2.",
 "idea": "Remember each word's sorted positions. A query walks both lists with two pointers, always advancing the smaller position.",
 "input": "coding / practice in the list",
 "output": "3",
 "notes": [],
 "best": "Remember each word's sorted positions. A query walks both lists with two pointers, always advancing the smaller position.",
 "variants": [
  {
   "name": "Position lists + two-pointer merge",
   "code": "class WordDistance:\n    def __init__(self, wordsDict):\n        self.pos = defaultdict(list)\n        for i, w in enumerate(wordsDict): self.pos[w].append(i)\n    def shortest(self, word1, word2):\n        a, b = self.pos[word1], self.pos[word2]\n        i = j = 0\n        best = float('inf')\n        while i < len(a) and j < len(b):\n            best = min(best, abs(a[i] - b[j]))\n            if a[i] < b[j]: i += 1\n            else: j += 1\n        return best",
   "time": "constructor O(n), query O(a+b)",
   "space": "O(n)",
   "explain": "Remember each word's sorted positions. A query walks both lists with two pointers, always advancing the smaller position.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan the whole list for every query",
   "tag": "Brute force",
   "code": "class WordDistance:\n    def __init__(self, wordsDict):\n        self.w = wordsDict\n    def shortest(self, word1, word2):\n        i1 = i2 = -1\n        best = len(self.w)\n        for i, x in enumerate(self.w):\n            if x == word1: i1 = i\n            if x == word2: i2 = i\n            if i1 != -1 and i2 != -1: best = min(best, abs(i1 - i2))\n        return best",
   "time": "O(n) per query",
   "space": "O(n)",
   "explain": "Keep only the list; each query walks it once remembering the last position of each word.",
   "frames": [],
   "alt": true
  }
 ]
};
