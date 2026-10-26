window.PROBLEM = {
 "id": "645",
 "title": "Set Mismatch",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
