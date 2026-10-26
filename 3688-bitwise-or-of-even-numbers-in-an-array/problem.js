window.PROBLEM = {
 "id": "3688",
 "title": "Bitwise OR of Even Numbers in an Array",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "The even numbers are 2, 4 and 6: 2 | 4 | 6 = 6.",
 "idea": "Start from 0 and OR in every even number.",
 "input": "nums = [1,2,3,4,5,6]",
 "output": "6",
 "notes": [],
 "best": "Start from 0 and OR in every even number.",
 "variants": [
  {
   "name": "OR the even numbers",
   "code": "class Solution:\n    def evenNumberBitwiseORs(self, nums):\n        res = 0\n        for x in nums:\n            if x % 2 == 0:\n                res |= x\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Start from 0 and OR in every even number.",
   "frames": []
  }
 ]
};
