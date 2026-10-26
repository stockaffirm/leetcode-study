window.PROBLEM = {
 "id": "1816",
 "title": "Truncate Sentence",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return the sentence made of its first k words. Example: 'Hello how are you Contestant', k=4 → 'Hello how are you'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Cut at the k-th space",
   "tag": "Alternative",
   "code": "class Solution:\n    def truncateSentence(self, s, k):\n        seen = 0\n        for i, c in enumerate(s):\n            if c == ' ':\n                seen += 1\n                if seen == k:\n                    return s[:i]\n        return s",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Find the k-th space and slice.",
   "frames": [],
   "alt": true
  }
 ]
};
