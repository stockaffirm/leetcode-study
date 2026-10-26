window.PROBLEM = {
 "id": "1816",
 "title": "Truncate Sentence",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'Hello how are you Contestant', k=4 → 'Hello how are you'.",
 "idea": "Split on spaces, keep the first k words and join them again.",
 "input": "s = \"Hello how are you Contestant\", k = 4",
 "output": "\"Hello how are you\"",
 "notes": [],
 "best": "Split on spaces, keep the first k words and join them again.",
 "variants": [
  {
   "name": "Keep the first k words",
   "code": "class Solution:\n    def truncateSentence(self, s, k):\n        return ' '.join(s.split()[:k])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Split on spaces, keep the first k words and join them again.",
   "frames": []
  }
 ]
};
