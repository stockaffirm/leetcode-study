window.PROBLEM = {
 "id": "1800",
 "title": "Maximum Ascending Subarray Sum",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[10,20,30,5,10,50] → 5+10+50 = 65.",
 "idea": "Keep the sum of the current strictly ascending run; reset to the current element when the order breaks. Track the largest sum seen.",
 "input": "nums = [10,20,30,5,10,50]",
 "output": "65",
 "notes": [],
 "best": "Keep the sum of the current strictly ascending run; reset to the current element when the order breaks. Track the largest sum seen.",
 "variants": [
  {
   "name": "Running sum of the current ascending run",
   "code": "class Solution:\n    def maxAscendingSum(self, nums):\n        best = cur = nums[0]\n        for i in range(1, len(nums)):\n            cur = cur + nums[i] if nums[i] > nums[i - 1] else nums[i]\n            best = max(best, cur)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the sum of the current strictly ascending run; reset to the current element when the order breaks. Track the largest sum seen.",
   "frames": []
  }
 ]
};
