window.PROBLEM = {
 "id": "152",
 "title": "Maximum Product Subarray",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Given a list of integers, find the contiguous part (at least one number) with the biggest product and return that product. Example: [2,3,−2,4] → 6 (the part [2,3]).",
 "why": "Find the contiguous part of the list with the largest product.",
 "idea": "A negative number can turn the smallest product into the biggest. So keep both the max and the min product of subarrays ending at the current number.",
 "input": "[2,3,-2,4]",
 "output": "6",
 "notes": [],
 "best": "A negative number can turn the smallest product into the biggest. So keep both the max and the min product of subarrays ending at the current number.",
 "variants": [
  {
   "name": "Track the biggest and smallest product ending here",
   "code": "class Solution:\n    def maxProduct(self, nums):\n        best = hi = lo = nums[0]\n        for x in nums[1:]:\n            cands = (x, hi * x, lo * x)\n            hi, lo = max(cands), min(cands)\n            best = max(best, hi)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A negative number can turn the smallest product into the biggest. So keep both the max and the min product of subarrays ending at the current number.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix and suffix products",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProduct(self, nums):\n        best = max(nums)\n        pre = suf = 1\n        for i in range(len(nums)):\n            pre = (pre or 1) * nums[i]\n            suf = (suf or 1) * nums[-1 - i]\n            best = max(best, pre, suf)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The best subarray is a prefix or suffix of a zero-free stretch: run products from both ends, restarting after each zero.",
   "frames": [],
   "alt": true
  }
 ]
};
