window.PROBLEM = {
 "id": "1827",
 "title": "Minimum Operations to Make the Array Increasing",
 "level": "Easy",
 "topic": "Array / String",
 "question": "In one operation add 1 to any element. Return the minimum operations to make the array strictly increasing. Example: [1,1,1] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Use max with the next required value",
   "tag": "Alternative",
   "code": "class Solution:\n    def minOperations(self, nums):\n        ops = 0\n        need = nums[0] + 1\n        for x in nums[1:]:\n            ops += max(0, need - x)\n            need = max(x, need) + 1\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The next element must be at least previous + 1; add the shortfall.",
   "frames": [],
   "alt": true
  }
 ]
};
