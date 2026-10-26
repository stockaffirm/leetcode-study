window.PROBLEM = {
 "id": "245",
 "title": "Shortest Word Distance III",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
