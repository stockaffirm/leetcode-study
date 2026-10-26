window.PROBLEM = {
 "id": "1822",
 "title": "Sign of the Product of an Array",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[-1,-2,-3,-4,3,2,1] → 4 negatives → 1.",
 "idea": "The product is 0 if any element is 0; otherwise its sign is positive for an even number of negative numbers and negative for an odd number.",
 "input": "nums = [-1,-2,-3,-4,3,2,1]",
 "output": "1",
 "notes": [],
 "best": "The product is 0 if any element is 0; otherwise its sign is positive for an even number of negative numbers and negative for an odd number.",
 "variants": [
  {
   "name": "Count the negatives, stop at a zero",
   "code": "class Solution:\n    def arraySign(self, nums):\n        sign = 1\n        for x in nums:\n            if x == 0:\n                return 0\n            if x < 0:\n                sign = -sign\n        return sign",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The product is 0 if any element is 0; otherwise its sign is positive for an even number of negative numbers and negative for an odd number.",
   "frames": []
  }
 ]
};
