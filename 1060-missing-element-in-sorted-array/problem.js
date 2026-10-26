window.PROBLEM = {
 "id": "1060",
 "title": "Missing Element in Sorted Array",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "[4,7,9,10]: the missing numbers after 4 are 5, 6, 8, 11 …; the 1st missing is 5.",
 "idea": "At index i the numbers missing before nums[i] are nums[i] − nums[0] − i, which only grows. Binary search the first index where that reaches k, then count back from there.",
 "input": "nums = [4,7,9,10], k = 1",
 "output": "5",
 "notes": [],
 "best": "At index i the numbers missing before nums[i] are nums[i] − nums[0] − i, which only grows. Binary search the first index where that reaches k, then count back from there.",
 "variants": [
  {
   "name": "Binary search on missing count",
   "code": "class Solution:\n    def missingElement(self, nums, k):\n        lo, hi = 0, len(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if nums[mid] - nums[0] - mid < k:\n                lo = mid + 1\n            else:\n                hi = mid\n        return nums[0] + lo - 1 + k",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "At index i the numbers missing before nums[i] are nums[i] − nums[0] − i, which only grows. Binary search the first index where that reaches k, then count back from there.",
   "frames": []
  }
 ]
};
