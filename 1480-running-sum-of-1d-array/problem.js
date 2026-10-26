window.PROBLEM = {
 "id": "1480",
 "title": "Running Sum of 1d Array",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "",
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
   "frames": []
  }
 ]
};
