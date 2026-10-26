window.PROBLEM = {
 "id": "2553",
 "title": "Separate the Digits in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return an array with all the digits of the numbers of nums, in the same order as the numbers and with each number's digits in order. Example: [13,25,83,77] → [1,3,2,5,8,3,7,7].",
 "why": "[13,25,83,77] → 1,3, 2,5, 8,3, 7,7.",
 "idea": "Write every number as text and append its digits one by one, keeping the original order.",
 "input": "nums = [13,25,83,77]",
 "output": "[1,3,2,5,8,3,7,7]",
 "notes": [],
 "best": "Write every number as text and append its digits one by one, keeping the original order.",
 "variants": [
  {
   "name": "Digits of each number in order",
   "code": "class Solution:\n    def separateDigits(self, nums):\n        return [int(d) for x in nums for d in str(x)]",
   "time": "O(total digits)",
   "space": "O(total digits)",
   "explain": "Write every number as text and append its digits one by one, keeping the original order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Peel digits with math",
   "tag": "Alternative",
   "code": "class Solution:\n    def separateDigits(self, nums):\n        res = []\n        for x in nums:\n            part = []\n            while x:\n                part.append(x % 10)\n                x //= 10\n            res += part[::-1]\n        return res",
   "time": "O(total digits)",
   "space": "O(total digits)",
   "explain": "Take the last digit of each number with % 10 and reverse the pieces.",
   "frames": [],
   "alt": true
  }
 ]
};
