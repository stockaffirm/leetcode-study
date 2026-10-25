window.PROBLEM = {
 "id": "540",
 "title": "Single Element in a Sorted Array",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "You are given a list nums sorted from smallest to largest in which every number appears exactly twice, next to its twin, EXCEPT one number that appears only once. Return that single number, using O(log n) (very fast: the work is halved at every step) time and O(1) extra memory. Example: [1,1,2,3,3,4,4,8,8] → 2.",
 "why": "Every number appears twice (neighbours) except one. Find it in O(log n).",
 "idea": "Before the lonely number, pairs start at even positions; after it, pairs start at odd positions. Binary search on whether the pair at an even position is still 'in sync'.",
 "input": "[1, 1, 2, 3, 3, 4, 4, 8, 8]",
 "output": "2",
 "notes": [],
 "best": "Before the lonely number, pairs start at even positions; after it, pairs start at odd positions. Binary search on whether the pair at an even position is still 'in sync'.",
 "variants": [
  {
   "name": "Binary search on pairs",
   "code": "class Solution:\n    def singleNonDuplicate(self, nums):\n        lo, hi = 0, len(nums) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if mid % 2: mid -= 1\n            if nums[mid] == nums[mid + 1]: lo = mid + 2\n            else: hi = mid\n        return nums[lo]",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Before the lonely number, pairs start at even positions; after it, pairs start at odd positions. Binary search on whether the pair at an even position is still 'in sync'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "XOR everything",
   "tag": "Alternative",
   "code": "class Solution:\n    def singleNonDuplicate(self, nums):\n        x = 0\n        for v in nums: x ^= v\n        return x",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Equal numbers cancel under XOR, leaving the single one (ignores that the list is sorted).",
   "frames": [],
   "alt": true
  }
 ]
};
