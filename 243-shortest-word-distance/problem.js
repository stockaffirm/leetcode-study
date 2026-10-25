window.PROBLEM = {
 "id": "243",
 "title": "Shortest Word Distance",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given a list of words and two different words word1 and word2 that both appear in it (word1 and word2 are different words but each may appear several times in the list). Return the smallest distance between a position of word1 and a position of word2, where distance is the difference of their positions. Example: ['practice','makes','perfect','coding','makes'], 'coding' and 'practice' → positions 3 and 0 → 3.",
 "why": "Given a list of words, how close (in positions) do two particular different words come to each other?",
 "idea": "Walk the list once, remembering the latest position of each target word. Each time you see one, the distance to the other's latest position is a candidate.",
 "input": "[practice, makes, perfect, coding, makes], coding, practice",
 "output": "3",
 "notes": [],
 "best": "Walk the list once, remembering the latest position of each target word. Each time you see one, the distance to the other's latest position is a candidate.",
 "variants": [
  {
   "name": "One pass with two last positions",
   "code": "class Solution:\n    def shortestDistance(self, wordsDict, word1, word2):\n        i1 = i2 = -1\n        best = len(wordsDict)\n        for i, w in enumerate(wordsDict):\n            if w == word1: i1 = i\n            elif w == word2: i2 = i\n            if i1 != -1 and i2 != -1: best = min(best, abs(i1 - i2))\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk the list once, remembering the latest position of each target word. Each time you see one, the distance to the other's latest position is a candidate.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Position lists + two pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def shortestDistance(self, wordsDict, word1, word2):\n        a = [i for i, w in enumerate(wordsDict) if w == word1]\n        b = [i for i, w in enumerate(wordsDict) if w == word2]\n        i = j = 0\n        best = len(wordsDict)\n        while i < len(a) and j < len(b):\n            best = min(best, abs(a[i] - b[j]))\n            if a[i] < b[j]: i += 1\n            else: j += 1\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Collect all positions of each word and walk the two sorted lists together.",
   "frames": [],
   "alt": true
  }
 ]
};
