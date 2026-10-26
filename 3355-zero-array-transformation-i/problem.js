window.PROBLEM = {
 "id": "3355",
 "title": "Zero Array Transformation I",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "nums [1,0,1], query [0,2] can reduce every index by 1 → all zero → true.",
 "idea": "Each query lets you subtract 1 (or nothing) from every index in its range. So index i can be reduced at most as many times as there are queries covering it. Count the coverage with a difference array and check coverage[i] ≥ nums[i] for all i.",
 "input": "nums = [1,0,1], queries = [[0,2]]",
 "output": "true",
 "notes": [],
 "best": "Each query lets you subtract 1 (or nothing) from every index in its range. So index i can be reduced at most as many times as there are queries covering it. Count the coverage with a difference array and check coverage[i] ≥ nums[i] for all i.",
 "variants": [
  {
   "name": "Difference array of how many times each index can be reduced",
   "code": "class Solution:\n    def isZeroArray(self, nums, queries):\n        diff = [0] * (len(nums) + 1)\n        for l, r in queries:\n            diff[l] += 1\n            diff[r + 1] -= 1\n        cover = 0\n        for i, x in enumerate(nums):\n            cover += diff[i]\n            if cover < x:\n                return False\n        return True",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "Each query lets you subtract 1 (or nothing) from every index in its range. So index i can be reduced at most as many times as there are queries covering it. Count the coverage with a difference array and check coverage[i] ≥ nums[i] for all i.",
   "frames": []
  }
 ]
};
