window.PROBLEM = {
 "id": "3487",
 "title": "Maximum Unique Subarray Sum After Deletion",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "[1,1,0,1,1] → keep one 1 → 1.",
 "idea": "After deleting arbitrary elements you want a subarray with distinct values and the largest sum. Because you may delete anything, take each distinct positive value once; if no positive value exists the best is the largest element.",
 "input": "nums = [1,1,0,1,1]",
 "output": "1",
 "notes": [],
 "best": "After deleting arbitrary elements you want a subarray with distinct values and the largest sum. Because you may delete anything, take each distinct positive value once; if no positive value exists the best is the largest element.",
 "variants": [
  {
   "name": "Sum of distinct positive values",
   "code": "class Solution:\n    def maxSum(self, nums):\n        pos = {x for x in nums if x > 0}\n        return sum(pos) if pos else max(nums)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "After deleting arbitrary elements you want a subarray with distinct values and the largest sum. Because you may delete anything, take each distinct positive value once; if no positive value exists the best is the largest element.",
   "frames": []
  }
 ]
};
