window.PROBLEM = {
 "id": "3202",
 "title": "Find the Maximum Length of Valid Subsequence II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Pick a subsequence of nums (order kept) such that all sums of neighbouring picked numbers give the same remainder when divided by k. Return the longest possible length. Example: [1,2,3,4,5], k=2 → 5.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over the last two chosen elements",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumLength(self, nums, k):\n        n = len(nums)\n        dp = [[2] * n for _ in range(n)]\n        best = 2\n        for j in range(n):\n            for i in range(j):\n                for p in range(i):\n                    if (nums[p] + nums[i]) % k == (nums[i] + nums[j]) % k:\n                        dp[i][j] = max(dp[i][j], dp[p][i] + 1)\n                best = max(best, dp[i][j])\n        return best",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "dp[i][j] is the longest valid subsequence ending with nums[i], nums[j]; extend it by an earlier element with the same pair-sum remainder.",
   "frames": [],
   "alt": true
  }
 ]
};
