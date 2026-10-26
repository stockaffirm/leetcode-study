window.PROBLEM = {
 "id": "243",
 "title": "Shortest Word Distance",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
