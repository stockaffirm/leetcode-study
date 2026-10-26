window.PROBLEM = {
 "id": "1827",
 "title": "Minimum Operations to Make the Array Increasing",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,1,1] → [1,2,3] costs 0 + 1 + 2 = 3.",
 "idea": "Walk left to right. If nums[i] is not larger than the previous (already adjusted) value, raise it to previous + 1 and add the difference to the count.",
 "input": "nums = [1,1,1]",
 "output": "3",
 "notes": [],
 "best": "Walk left to right. If nums[i] is not larger than the previous (already adjusted) value, raise it to previous + 1 and add the difference to the count.",
 "variants": [
  {
   "name": "Raise each element above the previous",
   "code": "class Solution:\n    def minOperations(self, nums):\n        ops = 0\n        prev = nums[0]\n        for x in nums[1:]:\n            if x <= prev:\n                ops += prev + 1 - x\n                prev += 1\n            else:\n                prev = x\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk left to right. If nums[i] is not larger than the previous (already adjusted) value, raise it to previous + 1 and add the difference to the count.",
   "frames": []
  }
 ]
};
