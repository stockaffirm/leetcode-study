window.PROBLEM = {
 "id": "1752",
 "title": "Check if Array Is Sorted and Rotated",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return true if the array was originally sorted in non-decreasing order and then rotated by some positions (possibly 0). Example: [3,4,5,1,2] → true; [2,1,3,4] → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare with every rotation of the sorted array",
   "tag": "Brute force",
   "code": "class Solution:\n    def check(self, nums):\n        s = sorted(nums)\n        return any(nums[i:] + nums[:i] == s for i in range(len(nums)))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Sort a copy and check whether any rotation of the input equals it.",
   "frames": [],
   "alt": true
  }
 ]
};
