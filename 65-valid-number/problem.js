window.PROBLEM = {
 "id": "65",
 "title": "Valid Number",
 "level": "Hard",
 "topic": "Array / String",
 "question": "Decide whether a string is a valid number. It is: an optional sign (+ or −), then digits with at most one decimal point (at least one digit overall), then optionally the letter e or E, an optional sign and at least one digit (no decimal point after the e). Example: '2e10' and '−9.5e+3' → True; 'e3' and '99e2.5' → False.",
 "why": "Decide whether a string is a valid decimal number: optional sign, digits with at most one dot, optionally followed by e/E, an optional sign and digits.",
 "idea": "Scan once and remember: have I seen a digit, a dot, an 'e', and (after an 'e') a digit again? A sign is only allowed at the start or right after 'e'.",
 "input": "'-9.5e+3'",
 "output": "True",
 "notes": [],
 "best": "Scan once and remember: have I seen a digit, a dot, an 'e', and (after an 'e') a digit again? A sign is only allowed at the start or right after 'e'.",
 "variants": [
  {
   "name": "One pass with flags",
   "code": "class Solution:\n    def isNumber(self, s):\n        digit = dot = exp = False\n        digit_after_e = True\n        for i, ch in enumerate(s):\n            if ch.isdigit():\n                digit = True\n                if exp: digit_after_e = True\n            elif ch in '+-':\n                if i > 0 and s[i - 1] not in 'eE': return False\n            elif ch == '.':\n                if dot or exp: return False\n                dot = True\n            elif ch in 'eE':\n                if exp or not digit: return False\n                exp = True\n                digit_after_e = False\n            else: return False\n        return digit and digit_after_e",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan once and remember: have I seen a digit, a dot, an 'e', and (after an 'e') a digit again? A sign is only allowed at the start or right after 'e'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Regular expression",
   "tag": "Pythonic",
   "code": "import re\n\nclass Solution:\n    def isNumber(self, s):\n        return re.fullmatch(r'[+-]?(\\d+\\.?\\d*|\\.\\d+)([eE][+-]?\\d+)?', s) is not None",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The whole grammar written as one pattern.",
   "frames": [],
   "alt": true
  }
 ]
};
