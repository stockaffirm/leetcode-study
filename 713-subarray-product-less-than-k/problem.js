window.PROBLEM = {
 "id": "713",
 "title": "Subarray Product Less Than K",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Given a list of positive numbers nums and a number k, return the number of runs of consecutive numbers (subarrays) whose product is STRICTLY less than k. Example: [10,5,2,6], k=100 → [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6] → 8.",
 "why": "Count the runs of neighbouring numbers whose product is less than k.",
 "idea": "Grow the window to the right multiplying; while the product is ≥ k, divide out the left number and shrink. Every window ending here contributes (window length) runs.",
 "input": "[10, 5, 2, 6], k=100",
 "output": "8",
 "notes": [],
 "best": "Grow the window to the right multiplying; while the product is ≥ k, divide out the left number and shrink. Every window ending here contributes (window length) runs.",
 "variants": [
  {
   "name": "Sliding window on the product",
   "code": "class Solution:\n    def numSubarrayProductLessThanK(self, nums, k):\n        if k <= 1: return 0\n        prod, left, count = 1, 0, 0\n        for right, x in enumerate(nums):\n            prod *= x\n            while prod >= k:\n                prod //= nums[left]\n                left += 1\n            count += right - left + 1\n        return count",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Grow the window to the right multiplying; while the product is ≥ k, divide out the left number and shrink. Every window ending here contributes (window length) runs.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every start",
   "tag": "Brute force",
   "code": "class Solution:\n    def numSubarrayProductLessThanK(self, nums, k):\n        count = 0\n        for i in range(len(nums)):\n            prod = 1\n            for j in range(i, len(nums)):\n                prod *= nums[j]\n                if prod >= k: break\n                count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "From each start multiply until the product reaches k.",
   "frames": [],
   "alt": true
  }
 ]
};
