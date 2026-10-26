window.PROBLEM = {
 "id": "1752",
 "title": "Check if Array Is Sorted and Rotated",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[3,4,5,1,2] is [1,2,3,4,5] rotated by 3 — the order drops only once (5 → 1).",
 "idea": "Looking at the array as a circle, a sorted-then-rotated array has at most one place where a number is bigger than the next one.",
 "input": "nums = [3,4,5,1,2]",
 "output": "true",
 "notes": [],
 "best": "Looking at the array as a circle, a sorted-then-rotated array has at most one place where a number is bigger than the next one.",
 "variants": [
  {
   "name": "Count the drops",
   "code": "class Solution:\n    def check(self, nums):\n        drops = sum(nums[i] > nums[(i + 1) % len(nums)] for i in range(len(nums)))\n        return drops <= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Looking at the array as a circle, a sorted-then-rotated array has at most one place where a number is bigger than the next one.",
   "frames": []
  }
 ]
};
