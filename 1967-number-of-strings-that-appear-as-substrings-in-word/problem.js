window.PROBLEM = {
 "id": "1967",
 "title": "Number of Strings That Appear as Substrings in Word",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given a list of patterns and a word, return how many of the patterns appear as a substring of the word. Example: ['a','abc','bc','d'], word 'abc' → 3.",
 "why": "How many of the patterns occur inside the word?",
 "idea": "Count patterns p with p in word.",
 "input": "patterns ['a','abc','bc','d'], word 'abc'",
 "output": "3",
 "notes": [],
 "best": "Count patterns p with p in word.",
 "variants": [
  {
   "name": "Substring test",
   "code": "class Solution:\n    def numOfStrings(self, patterns, word):\n        return sum(p in word for p in patterns)",
   "time": "O(p·n)",
   "space": "O(1)",
   "explain": "Count patterns p with p in word.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Loop",
   "tag": "Alternative",
   "code": "class Solution:\n    def numOfStrings(self, patterns, word):\n        count = 0\n        for p in patterns:\n            if word.find(p) != -1: count += 1\n        return count",
   "time": "O(p·n)",
   "space": "O(1)",
   "explain": "Count with an explicit loop.",
   "frames": [],
   "alt": true
  }
 ]
};
