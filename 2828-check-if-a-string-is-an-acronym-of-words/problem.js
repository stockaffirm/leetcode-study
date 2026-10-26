window.PROBLEM = {
 "id": "2828",
 "title": "Check if a String Is an Acronym of Words",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given a list of words and a string s, return True if s is formed by taking the first letter of every word in order. Example: ['alice','bob','charlie'], 'abc' → True.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare letter by letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def isAcronym(self, words, s):\n        if len(words) != len(s): return False\n        return all(w[0] == c for w, c in zip(words, s))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Check lengths and then every first letter.",
   "frames": [],
   "alt": true
  }
 ]
};
