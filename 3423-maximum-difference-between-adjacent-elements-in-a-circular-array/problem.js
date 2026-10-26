window.PROBLEM = {
 "id": "3423",
 "title": "Maximum Difference Between Adjacent Elements in a Circular Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,2,4] → |1−2|, |2−4|, |4−1| → 3.",
 "idea": "In a circular array the last element is next to the first. Take the maximum of |nums[i] − nums[(i+1) % n]| over all i.",
 "input": "nums = [1,2,4]",
 "output": "3",
 "notes": [],
 "best": "In a circular array the last element is next to the first. Take the maximum of |nums[i] − nums[(i+1) % n]| over all i.",
 "variants": [
  {
   "name": "Check every neighbouring pair, wrapping around",
   "code": "class Solution:\n    def maxAdjacentDistance(self, nums):\n        n = len(nums)\n        return max(abs(nums[i] - nums[(i + 1) % n]) for i in range(n))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "In a circular array the last element is next to the first. Take the maximum of |nums[i] − nums[(i+1) % n]| over all i.",
   "frames": []
  }
 ]
};
