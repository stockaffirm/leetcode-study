window.PROBLEM = {
 "id": "1848",
 "title": "Minimum Distance to the Target Element",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,2,3,4,5], target 5, start 3 → index 4 → 1.",
 "idea": "Look at every index where nums[i] == target and take the smallest |i − start|.",
 "input": "nums = [1,2,3,4,5], target = 5, start = 3",
 "output": "1",
 "notes": [],
 "best": "Look at every index where nums[i] == target and take the smallest |i − start|.",
 "variants": [
  {
   "name": "Smallest |i − start| among matches",
   "code": "class Solution:\n    def getMinDistance(self, nums, target, start):\n        return min(abs(i - start) for i, v in enumerate(nums) if v == target)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Look at every index where nums[i] == target and take the smallest |i − start|.",
   "frames": []
  }
 ]
};
