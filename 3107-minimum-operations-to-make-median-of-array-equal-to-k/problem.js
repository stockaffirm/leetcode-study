window.PROBLEM = {
 "id": "3107",
 "title": "Minimum Operations to Make Median of Array Equal to K",
 "level": "Medium",
 "topic": "Sorting",
 "question": "In one operation you add or subtract 1 from an element. The median is the middle element after sorting (the larger of the two middle ones for even length). Return the minimum operations to make the median equal to k. Example: [2,5,6,8,5], k=4 → 2.",
 "why": "[2,5,6,8,5], k=4: sorted [2,5,5,6,8]; the median 5 → 4 costs 1, and the left 5 must also drop to 4 (1 more) → 2.",
 "idea": "After sorting, the median is the element at index n // 2 (the larger middle). Move it to k, then every element left of it must be ≤ k and every element right of it must be ≥ k, fixing only the violators.",
 "input": "nums = [2,5,6,8,5], k = 4",
 "output": "2",
 "notes": [],
 "best": "After sorting, the median is the element at index n // 2 (the larger middle). Move it to k, then every element left of it must be ≤ k and every element right of it must be ≥ k, fixing only the violators.",
 "variants": [
  {
   "name": "Fix the middle, then the offenders",
   "code": "class Solution:\n    def minOperationsToMakeMedianK(self, nums, k):\n        nums.sort()\n        m = len(nums) // 2\n        ops = abs(nums[m] - k)\n        for i in range(m):\n            ops += max(0, nums[i] - k)\n        for i in range(m + 1, len(nums)):\n            ops += max(0, k - nums[i])\n        return ops",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "After sorting, the median is the element at index n // 2 (the larger middle). Move it to k, then every element left of it must be ≤ k and every element right of it must be ≥ k, fixing only the violators.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Nudge the median step by step",
   "tag": "Brute force",
   "code": "class Solution:\n    def minOperationsToMakeMedianK(self, nums, k):\n        nums.sort()\n        m = len(nums) // 2\n        ops = 0\n        while nums[m] != k:\n            nums[m] += 1 if nums[m] < k else -1\n            nums.sort()\n            ops += 1\n        return ops",
   "time": "O(ops·n log n)",
   "space": "O(1)",
   "explain": "Repeatedly move the median element one step toward k and re-sort until the median equals k.",
   "frames": [],
   "alt": true
  }
 ]
};
