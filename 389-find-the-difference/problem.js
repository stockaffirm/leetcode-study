window.PROBLEM = {
 "id": "389",
 "title": "Find the Difference",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "s='abcd', t='abcde' → the extra letter is 'e'.",
 "idea": "XOR (exclusive OR) all characters of both strings: every letter that appears in both cancels, leaving the added one.",
 "input": "s = \"abcd\", t = \"abcde\"",
 "output": "\"e\"",
 "notes": [],
 "best": "XOR (exclusive OR) all characters of both strings: every letter that appears in both cancels, leaving the added one.",
 "variants": [
  {
   "name": "XOR cancels the matching letters",
   "code": "class Solution:\n    def findTheDifference(self, s, t):\n        x = 0\n        for c in s + t:\n            x ^= ord(c)\n        return chr(x)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "XOR (exclusive OR) all characters of both strings: every letter that appears in both cancels, leaving the added one.",
   "frames": []
  }
 ]
};
