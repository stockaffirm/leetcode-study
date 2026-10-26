window.PROBLEM = {
 "id": "2828",
 "title": "Check if a String Is an Acronym of Words",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Is the string formed by the first letters of the words, in order?",
 "idea": "Build the acronym and compare.",
 "input": "['alice','bob','charlie'], 'abc'",
 "output": "True",
 "notes": [],
 "best": "Build the acronym and compare.",
 "variants": [
  {
   "name": "Join the first letters",
   "code": "class Solution:\n    def isAcronym(self, words, s):\n        return ''.join(w[0] for w in words) == s",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build the acronym and compare.",
   "frames": []
  }
 ]
};
