window.PROBLEM = {
 "id": "89",
 "title": "Gray Code",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
