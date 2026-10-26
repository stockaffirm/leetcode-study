window.PROBLEM = {
 "id": "1309",
 "title": "Decrypt String from Alphabet to Integer Mapping",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
