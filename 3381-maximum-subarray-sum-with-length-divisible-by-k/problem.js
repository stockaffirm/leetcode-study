window.PROBLEM = {
 "id": "3381",
 "title": "Maximum Subarray Sum With Length Divisible by K",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
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
   "frames": []
  }
 ]
};
