window.PROBLEM = {
 "id": "880",
 "title": "Decoded String at Index",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'leet2code3', k=10 → 'o'.",
 "idea": "Never build the huge string. First compute the decoded length by scanning. Then go backwards: for a digit d divide the length by d and reduce k mod the length; for a letter, if k is 0 (or equals the length) it is the answer, else shrink the length by 1.",
 "input": "s = \"leet2code3\", k = 10",
 "output": "\"o\"",
 "notes": [],
 "best": "Never build the huge string. First compute the decoded length by scanning. Then go backwards: for a digit d divide the length by d and reduce k mod the length; for a letter, if k is 0 (or equals the length) it is the answer, else shrink the length by 1.",
 "variants": [
  {
   "name": "Compute the length, then unwind from the end",
   "code": "class Solution:\n    def decodeAtIndex(self, s, k):\n        size = 0\n        for c in s:\n            size = size * int(c) if c.isdigit() else size + 1\n        for c in reversed(s):\n            k %= size\n            if k == 0 and c.isalpha():\n                return c\n            if c.isdigit():\n                size //= int(c)\n            else:\n                size -= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Never build the huge string. First compute the decoded length by scanning. Then go backwards: for a digit d divide the length by d and reduce k mod the length; for a letter, if k is 0 (or equals the length) it is the answer, else shrink the length by 1.",
   "frames": []
  }
 ]
};
