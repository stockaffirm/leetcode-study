window.PROBLEM = {
 "id": "8",
 "title": "String to Integer (atoi)",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Convert a piece of text s into a whole number, the way a simple calculator would read it. Step 1: skip any spaces at the start. Step 2: if the next character is '+' or '-', that is the sign (no sign means positive). Step 3: read digits until you hit something that is not a digit, then stop. If there were no digits, the answer is 0. If the number is outside the 32-bit range (−2,147,483,648 to 2,147,483,647), return the nearest limit. Example: '   -042' → spaces skipped, sign '-', digits 042 → -42.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Regular expression",
   "tag": "Pythonic",
   "code": "class Solution:\n    def myAtoi(self, s):\n        import re\n        m = re.match(r' *([+-]?[0-9]+)', s)\n        if not m: return 0\n        return max(-2**31, min(2**31 - 1, int(m.group(1))))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "One regex finds optional spaces, an optional sign and the digits; then clamp.",
   "frames": [],
   "alt": true
  }
 ]
};
