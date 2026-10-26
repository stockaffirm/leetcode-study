window.PROBLEM = {
 "id": "1150",
 "title": "Check If a Number Is Majority Element in a Sorted Array",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "",
 "why": "[2,4,5,5,5,5,5,6,6], target 5 appears 5 times out of 9 (> 4.5) → true.",
 "idea": "In a sorted array equal values sit together. Binary search the first and the last position of target; if that block is longer than n / 2 it is the majority element.",
 "input": "nums = [2,4,5,5,5,5,5,6,6], target = 5",
 "output": "true",
 "notes": [],
 "best": "In a sorted array equal values sit together. Binary search the first and the last position of target; if that block is longer than n / 2 it is the majority element.",
 "variants": [
  {
   "name": "Binary search the first and last position",
   "code": "class Solution:\n    def isMajorityElement(self, nums, target):\n        n = len(nums)\n        return bisect_right(nums, target) - bisect_left(nums, target) > n // 2",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "In a sorted array equal values sit together. Binary search the first and the last position of target; if that block is longer than n / 2 it is the majority element.",
   "frames": []
  }
 ]
};
