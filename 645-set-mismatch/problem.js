window.PROBLEM = {
 "id": "645",
 "title": "Set Mismatch",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A list nums should contain each number 1..n exactly once, but one number was copied over another: so one number appears TWICE and one number is MISSING. Return [the duplicated number, the missing number]. Example: [1,2,2,4] → 2 is duplicated and 3 is missing → [2,3].",
 "why": "A list should hold 1..n once each, but one number appears twice and another is missing. Find both.",
 "idea": "The duplicate = (sum of list) − (sum of distinct values); the missing number = (1+…+n) − (sum of distinct values).",
 "input": "[1, 2, 2, 4]",
 "output": "[2, 3]",
 "notes": [],
 "best": "The duplicate = (sum of list) − (sum of distinct values); the missing number = (1+…+n) − (sum of distinct values).",
 "variants": [
  {
   "name": "Sum arithmetic",
   "code": "class Solution:\n    def findErrorNums(self, nums):\n        n = len(nums)\n        dup = sum(nums) - sum(set(nums))\n        missing = n * (n + 1) // 2 - sum(set(nums))\n        return [dup, missing]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The duplicate = (sum of list) − (sum of distinct values); the missing number = (1+…+n) − (sum of distinct values).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Mark visited by negating",
   "tag": "Alternative",
   "code": "class Solution:\n    def findErrorNums(self, nums):\n        dup = missing = -1\n        for x in nums:\n            if nums[abs(x) - 1] < 0: dup = abs(x)\n            else: nums[abs(x) - 1] *= -1\n        for i, x in enumerate(nums):\n            if x > 0: missing = i + 1\n        return [dup, missing]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Use the sign of nums[x−1] as a 'seen x' flag.",
   "frames": [],
   "alt": true
  }
 ]
};
