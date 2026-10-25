window.PROBLEM = {
 "id": "245",
 "title": "Shortest Word Distance III",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Given a list of words and two words (they MAY be the same word), return the smallest distance between two occurrences of them at different positions. Example: ['practice','makes','perfect','coding','makes'], 'makes' and 'coding' → 1; 'makes' and 'makes' → 3.",
 "why": "Find the smallest gap between an occurrence of word1 and an occurrence of word2 in a list (the two words may be the same word, then two different occurrences are needed).",
 "idea": "Scan once and remember the last position of each word. When both words are the same, compare with the previous occurrence of that word instead.",
 "input": "makes / coding",
 "output": "1",
 "notes": [],
 "best": "Scan once and remember the last position of each word. When both words are the same, compare with the previous occurrence of that word instead.",
 "variants": [
  {
   "name": "One pass, remember the last position",
   "code": "class Solution:\n    def shortestWordDistance(self, wordsDict, word1, word2):\n        best = len(wordsDict)\n        i1 = i2 = -1\n        same = word1 == word2\n        for i, w in enumerate(wordsDict):\n            if w == word1:\n                if same:\n                    if i1 != -1: best = min(best, i - i1)\n                    i1 = i\n                else:\n                    i1 = i\n                    if i2 != -1: best = min(best, i1 - i2)\n            elif w == word2:\n                i2 = i\n                if i1 != -1: best = min(best, i2 - i1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan once and remember the last position of each word. When both words are the same, compare with the previous occurrence of that word instead.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Position lists",
   "tag": "Brute force",
   "code": "class Solution:\n    def shortestWordDistance(self, wordsDict, word1, word2):\n        a = [i for i, w in enumerate(wordsDict) if w == word1]\n        b = [i for i, w in enumerate(wordsDict) if w == word2]\n        return min(abs(i - j) for i in a for j in b if i != j)",
   "time": "O(a·b)",
   "space": "O(n)",
   "explain": "List the positions of both words and take the smallest difference of two different positions.",
   "frames": [],
   "alt": true
  }
 ]
};
