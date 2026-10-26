window.PROBLEM = {
 "id": "413",
 "title": "Arithmetic Slices",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Count the contiguous subarrays of length at least 3 whose consecutive differences are all equal. Example: [1,2,3,4] → 3.",
 "why": "[1,2,3,4]: slices [1,2,3], [2,3,4], [1,2,3,4] → 3.",
 "idea": "Let cur be the number of arithmetic slices ending at i. If nums[i] continues the same difference as the previous pair, cur = cur + 1 (every earlier slice extends, plus one new slice of length 3); otherwise cur = 0. Add cur each step.",
 "input": "nums = [1,2,3,4]",
 "output": "3",
 "notes": [],
 "best": "Let cur be the number of arithmetic slices ending at i. If nums[i] continues the same difference as the previous pair, cur = cur + 1 (every earlier slice extends, plus one new slice of length 3); otherwise cur = 0. Add cur each step.",
 "variants": [
  {
   "name": "Extend the previous arithmetic run",
   "code": "class Solution:\n    def numberOfArithmeticSlices(self, nums):\n        cur = total = 0\n        for i in range(2, len(nums)):\n            if nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]:\n                cur += 1\n                total += cur\n            else:\n                cur = 0\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Let cur be the number of arithmetic slices ending at i. If nums[i] continues the same difference as the previous pair, cur = cur + 1 (every earlier slice extends, plus one new slice of length 3); otherwise cur = 0. Add cur each step.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count by maximal runs",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberOfArithmeticSlices(self, nums):\n        total = 0\n        run = 2\n        for i in range(2, len(nums)):\n            if nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]:\n                run += 1\n            else:\n                total += (run - 1) * (run - 2) // 2\n                run = 2\n        return total + (run - 1) * (run - 2) // 2",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A maximal arithmetic run of length L ≥ 3 contains (L−1)(L−2)/2 slices.",
   "frames": [],
   "alt": true
  }
 ]
};
