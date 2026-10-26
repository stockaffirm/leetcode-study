window.PROBLEM = {
 "id": "520",
 "title": "Detect Capital",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
