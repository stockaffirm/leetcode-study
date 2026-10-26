window.PROBLEM = {
 "id": "2996",
 "title": "Smallest Missing Integer Greater Than Sequential Prefix Sum",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,3,2,5]: the sequential prefix 1,2,3 sums to 6; 6 is missing → 6.",
 "idea": "A sequential prefix has each element equal to the previous plus 1. Take the longest one from the start and its sum s; the answer is the smallest integer ≥ s that is not in nums.",
 "input": "nums = [1,2,3,2,5]",
 "output": "6",
 "notes": [],
 "best": "A sequential prefix has each element equal to the previous plus 1. Take the longest one from the start and its sum s; the answer is the smallest integer ≥ s that is not in nums.",
 "variants": [
  {
   "name": "Sum the longest sequential prefix, then search upwards",
   "code": "class Solution:\n    def missingInteger(self, nums):\n        s = nums[0]\n        for a, b in zip(nums, nums[1:]):\n            if b != a + 1:\n                break\n            s += b\n        have = set(nums)\n        while s in have:\n            s += 1\n        return s",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A sequential prefix has each element equal to the previous plus 1. Take the longest one from the start and its sum s; the answer is the smallest integer ≥ s that is not in nums.",
   "frames": []
  }
 ]
};
