window.PROBLEM = {
 "id": "3381",
 "title": "Maximum Subarray Sum With Length Divisible by K",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "Return the maximum sum of a subarray whose length is divisible by k. Example: [1,2], k=1 → 3.",
 "why": "[1,2], k=1 → the whole array (length 2 divisible by 1) sums to 3.",
 "idea": "A subarray (i, j] has length divisible by k exactly when i ≡ j (mod k). Keep, for each remainder, the smallest prefix sum seen so far; at each j the best subarray ending there is prefix[j] − min prefix with the same remainder.",
 "input": "nums = [1,2], k = 1",
 "output": "3",
 "notes": [],
 "best": "A subarray (i, j] has length divisible by k exactly when i ≡ j (mod k). Keep, for each remainder, the smallest prefix sum seen so far; at each j the best subarray ending there is prefix[j] − min prefix with the same remainder.",
 "variants": [
  {
   "name": "Prefix sums grouped by index mod k",
   "code": "class Solution:\n    def maxSubarraySum(self, nums, k):\n        INF = float('inf')\n        best_prefix = [INF] * k\n        best_prefix[0] = 0\n        pre = 0\n        ans = -INF\n        for j, x in enumerate(nums, 1):\n            pre += x\n            r = j % k\n            if best_prefix[r] != INF:\n                ans = max(ans, pre - best_prefix[r])\n            best_prefix[r] = min(best_prefix[r], pre)\n        return ans",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "A subarray (i, j] has length divisible by k exactly when i ≡ j (mod k). Keep, for each remainder, the smallest prefix sum seen so far; at each j the best subarray ending there is prefix[j] − min prefix with the same remainder.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every starting remainder",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxSubarraySum(self, nums, k):\n        n = len(nums)\n        pre = [0] + list(accumulate(nums))\n        best = float('-inf')\n        for i in range(n + 1):\n            for j in range(i + k, n + 1, k):\n                best = max(best, pre[j] - pre[i])\n        return best",
   "time": "O(n²/k)",
   "space": "O(n)",
   "explain": "Try all subarrays with length divisible by k.",
   "frames": [],
   "alt": true
  }
 ]
};
