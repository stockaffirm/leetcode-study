window.PROBLEM = {
 "id": "1408",
 "title": "String Matching in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return all words that are a substring of another word in the array. Example: ['mass','as','hero','superhero'] → ['as','hero'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Join all words and count occurrences",
   "tag": "Alternative",
   "code": "class Solution:\n    def stringMatching(self, words):\n        big = ' '.join(words)\n        return [w for w in words if big.count(w) > 1]",
   "time": "O(n·L)",
   "space": "O(n·L)",
   "explain": "A word is a substring of another if it occurs more than once in the joined string.",
   "frames": [],
   "alt": true
  }
 ]
};
