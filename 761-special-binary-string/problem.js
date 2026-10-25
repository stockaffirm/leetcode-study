window.PROBLEM = {
 "id": "761",
 "title": "Special Binary String",
 "level": "Hard",
 "topic": "Array / String",
 "question": "A binary string is 'special' if it has the same number of 1s and 0s and, reading from the left, every start of the string has at least as many 1s as 0s (like balanced brackets, with 1 = '(' and 0 = ')'). A move picks two neighbouring special pieces that together make up a part of the string and swaps them. Return the lexicographically LARGEST string you can get (the one that would come last in dictionary order) after any number of moves. Example: '11011000' → '11100100'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Stack of pieces",
   "tag": "Alternative",
   "code": "class Solution:\n    def makeLargestSpecial(self, s):\n        stack = [[]]\n        for ch in s:\n            if ch == '1':\n                stack.append([])\n            else:\n                inner = ''.join(sorted(stack.pop(), reverse=True))\n                stack[-1].append('1' + inner + '0')\n        return ''.join(sorted(stack[0], reverse=True))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Each '1' opens a new level on a stack; each '0' closes it, sorts what was inside and hands the result up.",
   "frames": [],
   "alt": true
  }
 ]
};
