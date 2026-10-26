window.PROBLEM = {
 "id": "89",
 "title": "Gray Code",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Return a Gray code sequence of 2ⁿ numbers: it starts at 0, every number appears once, and neighbours (and last and first) differ in exactly one bit. Example: n=2 → [0,1,3,2].",
 "why": "n=2 → 00, 01, 11, 10 → [0,1,3,2].",
 "idea": "The i-th Gray code is i ^ (i >> 1): consecutive values differ in exactly one bit. Generate it for i = 0 … 2ⁿ − 1.",
 "input": "n = 2",
 "output": "[0, 1, 3, 2]",
 "notes": [],
 "best": "The i-th Gray code is i ^ (i >> 1): consecutive values differ in exactly one bit. Generate it for i = 0 … 2ⁿ − 1.",
 "variants": [
  {
   "name": "i XOR (i >> 1)",
   "code": "class Solution:\n    def grayCode(self, n):\n        return [i ^ (i >> 1) for i in range(1 << n)]",
   "time": "O(2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "The i-th Gray code is i ^ (i >> 1): consecutive values differ in exactly one bit. Generate it for i = 0 … 2ⁿ − 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Reflect and prefix",
   "tag": "Alternative",
   "code": "class Solution:\n    def grayCode(self, n):\n        res = [0]\n        for b in range(n):\n            res += [x | (1 << b) for x in reversed(res)]\n        return res",
   "time": "O(2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Start with [0]; for each bit append the reversed list with that bit set.",
   "frames": [],
   "alt": true
  }
 ]
};
