window.PROBLEM = {
 "id": "1480",
 "title": "Running Sum of 1d Array",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "Return the running sum of an array: entry i is the sum of the first i + 1 numbers. Example: [1,2,3,4] → [1,3,6,10].",
 "why": "[1,2,3,4] → 1, 1+2, 1+2+3, 1+2+3+4 = [1,3,6,10].",
 "idea": "Entry i of the answer is the sum of the first i + 1 numbers: keep a running total.",
 "input": "nums = [1,2,3,4]",
 "output": "[1,3,6,10]",
 "notes": [],
 "best": "Entry i of the answer is the sum of the first i + 1 numbers: keep a running total.",
 "variants": [
  {
   "name": "Prefix sums",
   "code": "class Solution:\n    def runningSum(self, nums):\n        return list(accumulate(nums))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Entry i of the answer is the sum of the first i + 1 numbers: keep a running total.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add into the same array",
   "tag": "Alternative",
   "code": "class Solution:\n    def runningSum(self, nums):\n        for i in range(1, len(nums)):\n            nums[i] += nums[i - 1]\n        return nums",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each entry adds the previous one, in place.",
   "frames": [],
   "alt": true
  }
 ]
};
