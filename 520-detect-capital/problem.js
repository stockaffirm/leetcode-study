window.PROBLEM = {
 "id": "520",
 "title": "Detect Capital",
 "level": "Easy",
 "topic": "Array / String",
 "question": "The use of capitals in a word is right if all letters are capitals, none are, or only the first one is. Return true if word follows this rule. Example: 'USA' → true.",
 "why": "'USA' ✓, 'leetcode' ✓, 'Google' ✓, 'FlaG' ✗.",
 "idea": "The usage is right if the word is all uppercase, all lowercase, or only the first letter is uppercase — exactly what isupper, islower and istitle check.",
 "input": "word = \"USA\"",
 "output": "true",
 "notes": [],
 "best": "The usage is right if the word is all uppercase, all lowercase, or only the first letter is uppercase — exactly what isupper, islower and istitle check.",
 "variants": [
  {
   "name": "All caps, no caps or only the first capital",
   "code": "class Solution:\n    def detectCapitalUse(self, word):\n        return word.isupper() or word.islower() or word.istitle()",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The usage is right if the word is all uppercase, all lowercase, or only the first letter is uppercase — exactly what isupper, islower and istitle check.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count capital letters",
   "tag": "Alternative",
   "code": "class Solution:\n    def detectCapitalUse(self, word):\n        caps = sum(c.isupper() for c in word)\n        return caps == 0 or caps == len(word) or (caps == 1 and word[0].isupper())",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count the capitals: 0, all, or exactly the first letter.",
   "frames": [],
   "alt": true
  }
 ]
};
