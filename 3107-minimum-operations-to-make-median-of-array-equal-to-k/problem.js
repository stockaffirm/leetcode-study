window.PROBLEM = {
 "id": "3107",
 "title": "Minimum Operations to Make Median of Array Equal to K",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
