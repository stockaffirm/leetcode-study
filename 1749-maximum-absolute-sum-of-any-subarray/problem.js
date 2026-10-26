window.PROBLEM = {
 "id": "1749",
 "title": "Maximum Absolute Sum of Any Subarray",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[1,-3,2,3,-4]: best subarray [2,3] = 5 → 5.",
 "idea": "A subarray sum is prefix[j] − prefix[i]. The largest absolute value is therefore (max prefix − min prefix), including the empty prefix 0.",
 "input": "nums = [1,-3,2,3,-4]",
 "output": "5",
 "notes": [],
 "best": "A subarray sum is prefix[j] − prefix[i]. The largest absolute value is therefore (max prefix − min prefix), including the empty prefix 0.",
 "variants": [
  {
   "name": "Largest prefix sum minus smallest prefix sum",
   "code": "class Solution:\n    def maxAbsoluteSum(self, nums):\n        run = hi = lo = 0\n        for x in nums:\n            run += x\n            hi = max(hi, run)\n            lo = min(lo, run)\n        return hi - lo",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A subarray sum is prefix[j] − prefix[i]. The largest absolute value is therefore (max prefix − min prefix), including the empty prefix 0.",
   "frames": []
  }
 ]
};
