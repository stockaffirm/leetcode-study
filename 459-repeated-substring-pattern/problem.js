window.PROBLEM = {
 "id": "459",
 "title": "Repeated Substring Pattern",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'abab' = 'ab' twice → true.",
 "idea": "A string is a repetition of a block exactly when it appears inside (s + s) with the first and last character removed.",
 "input": "s = \"abab\"",
 "output": "true",
 "notes": [],
 "best": "A string is a repetition of a block exactly when it appears inside (s + s) with the first and last character removed.",
 "variants": [
  {
   "name": "Find s inside s + s without the ends",
   "code": "class Solution:\n    def repeatedSubstringPattern(self, s):\n        return s in (s + s)[1:-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A string is a repetition of a block exactly when it appears inside (s + s) with the first and last character removed.",
   "frames": []
  }
 ]
};
