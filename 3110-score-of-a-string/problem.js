window.PROBLEM = {
 "id": "3110",
 "title": "Score of a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'hello' → |h−e| + |e−l| + |l−l| + |l−o| = 13.",
 "idea": "Add up the absolute difference of the ASCII (American Standard Code for Information Interchange) codes of every two neighbouring characters.",
 "input": "s = \"hello\"",
 "output": "13",
 "notes": [],
 "best": "Add up the absolute difference of the ASCII (American Standard Code for Information Interchange) codes of every two neighbouring characters.",
 "variants": [
  {
   "name": "Sum of neighbouring ASCII differences",
   "code": "class Solution:\n    def scoreOfString(self, s):\n        return sum(abs(ord(a) - ord(b)) for a, b in zip(s, s[1:]))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Add up the absolute difference of the ASCII (American Standard Code for Information Interchange) codes of every two neighbouring characters.",
   "frames": []
  }
 ]
};
