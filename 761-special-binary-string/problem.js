window.PROBLEM = {
 "id": "761",
 "title": "Special Binary String",
 "level": "Hard",
 "topic": "Array / String",
 "question": "",
 "why": "A 'special' string has equally many 1s and 0s and every start of it has at least as many 1s as 0s. You may swap two neighbouring special pieces. Make the string as large as possible.",
 "idea": "Split the string into its top-level special pieces (the balance returns to zero). Make each piece's inside as large as possible (recursion), then sort the pieces from largest to smallest and join.",
 "input": "\"11011000\"",
 "output": "\"11100100\"",
 "notes": [],
 "best": "Split the string into its top-level special pieces (the balance returns to zero). Make each piece's inside as large as possible (recursion), then sort the pieces from largest to smallest and join.",
 "variants": [
  {
   "name": "Split into primitives, sort, recurse",
   "code": "class Solution:\n    def makeLargestSpecial(self, s):\n        parts, bal, start = [], 0, 0\n        for i, ch in enumerate(s):\n            bal += 1 if ch == '1' else -1\n            if bal == 0:\n                parts.append('1' + self.makeLargestSpecial(s[start + 1:i]) + '0')\n                start = i + 1\n        return ''.join(sorted(parts, reverse=True))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Split the string into its top-level special pieces (the balance returns to zero). Make each piece's inside as large as possible (recursion), then sort the pieces from largest to smallest and join.",
   "frames": []
  }
 ]
};
