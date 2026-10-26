window.PROBLEM = {
 "id": "3110",
 "title": "Score of a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "The score of a string is the sum of the absolute differences between the ASCII (American Standard Code for Information Interchange) codes of neighbouring characters. Return it. Example: 'hello' → 13.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Index loop",
   "tag": "Alternative",
   "code": "class Solution:\n    def scoreOfString(self, s):\n        total = 0\n        for i in range(len(s) - 1):\n            total += abs(ord(s[i]) - ord(s[i + 1]))\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Loop over neighbouring positions.",
   "frames": [],
   "alt": true
  }
 ]
};
