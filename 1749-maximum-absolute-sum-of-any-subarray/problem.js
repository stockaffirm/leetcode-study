window.PROBLEM = {
 "id": "1749",
 "title": "Maximum Absolute Sum of Any Subarray",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "The absolute sum of a subarray is the absolute value of its sum. Return the maximum absolute sum of any subarray (possibly empty). Example: [1,-3,2,3,-4] → 5.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Kadane both ways",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxAbsoluteSum(self, nums):\n        hi = lo = best_hi = best_lo = 0\n        for x in nums:\n            hi = max(0, hi + x)\n            lo = min(0, lo + x)\n            best_hi = max(best_hi, hi)\n            best_lo = min(best_lo, lo)\n        return max(best_hi, -best_lo)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Run Kadane for the maximum and the minimum sum.",
   "frames": [],
   "alt": true
  }
 ]
};
