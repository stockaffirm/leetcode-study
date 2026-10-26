window.PROBLEM = {
 "id": "1309",
 "title": "Decrypt String from Alphabet to Integer Mapping",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Letters a–i are written as digits '1'–'9'; letters j–z are written as '10#'–'26#'. Decode the given string. Example: '10#11#12' → 'jkab'.",
 "why": "'10#11#12' → '10#' = j, '11#' = k, '1' = a, '2' = b → 'jkab'.",
 "idea": "Digits 1-9 are single letters a-i; two digits followed by '#' are 10-26 (j-z). Scan from the right: a '#' means the previous two digits form one letter, otherwise a single digit does.",
 "input": "s = \"10#11#12\"",
 "output": "\"jkab\"",
 "notes": [],
 "best": "Digits 1-9 are single letters a-i; two digits followed by '#' are 10-26 (j-z). Scan from the right: a '#' means the previous two digits form one letter, otherwise a single digit does.",
 "variants": [
  {
   "name": "Read from the right, '#' means two digits",
   "code": "class Solution:\n    def freqAlphabets(self, s):\n        res = []\n        i = len(s) - 1\n        while i >= 0:\n            if s[i] == '#':\n                res.append(chr(96 + int(s[i - 2:i])))\n                i -= 3\n            else:\n                res.append(chr(96 + int(s[i])))\n                i -= 1\n        return ''.join(reversed(res))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Digits 1-9 are single letters a-i; two digits followed by '#' are 10-26 (j-z). Scan from the right: a '#' means the previous two digits form one letter, otherwise a single digit does.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Left to right with a lookahead",
   "tag": "Alternative",
   "code": "class Solution:\n    def freqAlphabets(self, s):\n        res = []\n        i = 0\n        while i < len(s):\n            if i + 2 < len(s) and s[i + 2] == '#':\n                res.append(chr(96 + int(s[i:i + 2])))\n                i += 3\n            else:\n                res.append(chr(96 + int(s[i])))\n                i += 1\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "At each position, if two characters ahead is a '#', read two digits; otherwise read one.",
   "frames": [],
   "alt": true
  }
 ]
};
