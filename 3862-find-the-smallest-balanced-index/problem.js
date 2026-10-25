window.PROBLEM = {
 "id": "3862",
 "title": "Find the Smallest Balanced Index",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "An index i is balanced if the SUM of the elements left of i equals the PRODUCT of the elements right of i (empty sum = 0, empty product = 1). Return the smallest balanced index or −1. Example: [2,1,2] → 1.",
 "why": "[2,1,2]: at index 1 the left sum is 2 and the product of the right side is 2 → balanced, and it is the smallest such index.",
 "idea": "Precompute the product of every suffix. The left sum is at most the total sum, so a suffix product larger than that can never match; cap it to keep the numbers small. Sweep from the left with a running sum and return the first index where the sum equals the product of what remains.",
 "input": "nums = [2,1,2]",
 "output": "1",
 "notes": [],
 "best": "Precompute the product of every suffix. The left sum is at most the total sum, so a suffix product larger than that can never match; cap it to keep the numbers small. Sweep from the left with a running sum and return the first index where the sum equals the product of what remains.",
 "variants": [
  {
   "name": "Running sum vs. suffix products",
   "code": "class Solution:\n    def smallestBalancedIndex(self, nums):\n        n = len(nums)\n        cap = sum(nums) + 1\n        suf = [1] * (n + 1)\n        for i in range(n - 1, -1, -1):\n            suf[i] = min(cap, suf[i + 1] * nums[i])\n        left = 0\n        for i in range(n):\n            if left == suf[i + 1]:\n                return i\n            left += nums[i]\n        return -1",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Precompute the product of every suffix. The left sum is at most the total sum, so a suffix product larger than that can never match; cap it to keep the numbers small. Sweep from the left with a running sum and return the first index where the sum equals the product of what remains.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every index",
   "tag": "Brute force",
   "code": "class Solution:\n    def smallestBalancedIndex(self, nums):\n        for i in range(len(nums)):\n            if sum(nums[:i]) == prod(nums[i + 1:]):\n                return i\n        return -1",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each index compute the left sum and the right product directly.",
   "frames": [],
   "alt": true
  }
 ]
};
