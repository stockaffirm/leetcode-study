window.PROBLEM = {
 "id": "2562",
 "title": "Find the Array Concatenation Value",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "[7,52,2,4]: 74 + 522 = 596.",
 "idea": "Take the first and last numbers, glue their digits (first then last) and add the result; then move both ends inwards. A middle leftover is added as is.",
 "input": "nums = [7,52,2,4]",
 "output": "596",
 "notes": [],
 "best": "Take the first and last numbers, glue their digits (first then last) and add the result; then move both ends inwards. A middle leftover is added as is.",
 "variants": [
  {
   "name": "Concatenate first and last, move inwards",
   "code": "class Solution:\n    def findTheArrayConcVal(self, nums):\n        i, j = 0, len(nums) - 1\n        total = 0\n        while i < j:\n            total += int(str(nums[i]) + str(nums[j]))\n            i += 1\n            j -= 1\n        if i == j:\n            total += nums[i]\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Take the first and last numbers, glue their digits (first then last) and add the result; then move both ends inwards. A middle leftover is added as is.",
   "frames": []
  }
 ]
};
