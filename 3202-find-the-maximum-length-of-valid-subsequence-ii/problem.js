window.PROBLEM = {
 "id": "3202",
 "title": "Find the Maximum Length of Valid Subsequence II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,2,3,4,5], k=2: every neighbouring pair sums to an odd number, i.e. the same residue 1 mod 2. The whole array is valid → 5.",
 "idea": "A subsequence is valid when all neighbouring sums have the same remainder mod k. Try each possible remainder s. Then dp[r] = longest valid subsequence ending in a number with remainder r; the number before it must have remainder (s − r) mod k.",
 "input": "nums = [1,2,3,4,5], k = 2",
 "output": "5",
 "notes": [],
 "best": "A subsequence is valid when all neighbouring sums have the same remainder mod k. Try each possible remainder s. Then dp[r] = longest valid subsequence ending in a number with remainder r; the number before it must have remainder (s − r) mod k.",
 "variants": [
  {
   "name": "DP per target pair-sum residue",
   "code": "class Solution:\n    def maximumLength(self, nums, k):\n        res = 0\n        for s in range(k):\n            dp = [0] * k\n            for x in nums:\n                r = x % k\n                dp[r] = max(dp[r], dp[(s - r) % k] + 1)\n                res = max(res, dp[r])\n        return res",
   "time": "O(k · n)",
   "space": "O(k)",
   "explain": "A subsequence is valid when all neighbouring sums have the same remainder mod k. Try each possible remainder s. Then dp[r] = longest valid subsequence ending in a number with remainder r; the number before it must have remainder (s − r) mod k.",
   "frames": []
  }
 ]
};
