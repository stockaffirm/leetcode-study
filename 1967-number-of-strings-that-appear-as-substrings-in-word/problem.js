window.PROBLEM = {
 "id": "1967",
 "title": "Number of Strings That Appear as Substrings in Word",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
