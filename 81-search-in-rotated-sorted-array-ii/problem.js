window.PROBLEM = {
 "id": "81",
 "title": "Search in Rotated Sorted Array II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "A sorted list (duplicates allowed) was rotated. Is the target in it?",
 "idea": "At each step one half is sorted: check whether the target lies inside it. If the left, middle and right values are equal we cannot tell which half is sorted, so shrink both ends by one.",
 "input": "[2,5,6,0,0,1,2], target 0",
 "output": "True",
 "notes": [],
 "best": "At each step one half is sorted: check whether the target lies inside it. If the left, middle and right values are equal we cannot tell which half is sorted, so shrink both ends by one.",
 "variants": [
  {
   "name": "Binary search, shrink on duplicates",
   "code": "class Solution:\n    def search(self, nums, target):\n        lo, hi = 0, len(nums) - 1\n        while lo <= hi:\n            mid = (lo + hi) // 2\n            if nums[mid] == target: return True\n            if nums[lo] == nums[mid] == nums[hi]:\n                lo += 1\n                hi -= 1\n            elif nums[lo] <= nums[mid]:\n                if nums[lo] <= target < nums[mid]: hi = mid - 1\n                else: lo = mid + 1\n            else:\n                if nums[mid] < target <= nums[hi]: lo = mid + 1\n                else: hi = mid - 1\n        return False",
   "time": "O(log n), O(n) worst",
   "space": "O(1)",
   "explain": "At each step one half is sorted: check whether the target lies inside it. If the left, middle and right values are equal we cannot tell which half is sorted, so shrink both ends by one.",
   "frames": []
  }
 ]
};
