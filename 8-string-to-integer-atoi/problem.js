window.PROBLEM = {
 "id": "8",
 "title": "String to Integer (atoi)",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Turn text like '  -42abc' into the number -42: skip spaces, read a sign, read digits, stop at anything else.",
 "idea": "Walk left to right once with an index: spaces → optional sign → digits. Clamp to the 32-bit range at the end.",
 "input": "\"   -042\"",
 "output": "-42",
 "notes": [],
 "best": "Walk left to right once with an index: spaces → optional sign → digits. Clamp to the 32-bit range at the end.",
 "variants": [
  {
   "name": "One scan",
   "code": "class Solution:\n    def myAtoi(self, s):\n        i, n = 0, len(s)\n        while i < n and s[i] == ' ':\n            i += 1\n        sign = 1\n        if i < n and s[i] in '+-':\n            if s[i] == '-': sign = -1\n            i += 1\n        num = 0\n        while i < n and s[i].isdigit():\n            num = num * 10 + int(s[i])\n            i += 1\n        num *= sign\n        return max(-2**31, min(2**31 - 1, num))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk left to right once with an index: spaces → optional sign → digits. Clamp to the 32-bit range at the end.",
   "frames": []
  }
 ]
};
