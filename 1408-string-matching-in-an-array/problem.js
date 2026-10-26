window.PROBLEM = {
 "id": "1408",
 "title": "String Matching in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "['mass','as','hero','superhero'] → 'as' is in 'mass' and 'hero' is in 'superhero'.",
 "idea": "For every word check whether it occurs inside any other word.",
 "input": "words = [\"mass\",\"as\",\"hero\",\"superhero\"]",
 "output": "['as', 'hero']",
 "notes": [],
 "best": "For every word check whether it occurs inside any other word.",
 "variants": [
  {
   "name": "A word contained in another word",
   "code": "class Solution:\n    def stringMatching(self, words):\n        return [w for w in words if any(w != o and w in o for o in words)]",
   "time": "O(n²·L)",
   "space": "O(1)",
   "explain": "For every word check whether it occurs inside any other word.",
   "frames": []
  }
 ]
};
