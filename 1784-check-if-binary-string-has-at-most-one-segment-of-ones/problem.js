window.PROBLEM = {
 "id": "1784",
 "title": "Check if Binary String Has at Most One Segment of Ones",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'1001' has two segments of ones → false; '110' has one → true.",
 "idea": "The string starts with '1'. A second segment of ones exists exactly when the pattern '01' appears (a zero followed by a one).",
 "input": "s = \"1001\"",
 "output": "false",
 "notes": [],
 "best": "The string starts with '1'. A second segment of ones exists exactly when the pattern '01' appears (a zero followed by a one).",
 "variants": [
  {
   "name": "No '01' after the first 1",
   "code": "class Solution:\n    def checkOnesSegment(self, s):\n        return '01' not in s",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The string starts with '1'. A second segment of ones exists exactly when the pattern '01' appears (a zero followed by a one).",
   "frames": []
  }
 ]
};
