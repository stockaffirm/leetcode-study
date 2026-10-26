window.PROBLEM = {
 "id": "244",
 "title": "Shortest Word Distance II",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
