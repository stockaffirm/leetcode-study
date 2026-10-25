window.PROBLEM = {
 "id": "2915",
 "title": "Length of the Longest Subsequence That Sums to Target",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Return the length of the longest subsequence of nums whose elements add up to target, or −1 if no subsequence does. Example: [1,2,3,4,5], target 9 → 3.",
 "why": "[1,2,3,4,5], target 9: {2,3,4} or {1,3,5} or {4,5}… the longest has 3 elements → 3.",
 "idea": "dp[s] is the longest subsequence that adds up to exactly s (−∞ if impossible). Process each number once, updating sums from high to low so each number is used at most once: dp[s] = max(dp[s], dp[s − x] + 1).",
 "input": "nums = [1,2,3,4,5], target = 9",
 "output": "3",
 "notes": [],
 "best": "dp[s] is the longest subsequence that adds up to exactly s (−∞ if impossible). Process each number once, updating sums from high to low so each number is used at most once: dp[s] = max(dp[s], dp[s − x] + 1).",
 "variants": [
  {
   "name": "0/1 knapsack with a length",
   "code": "class Solution:\n    def lengthOfLongestSubsequence(self, nums, target):\n        NEG = float('-inf')\n        dp = [NEG] * (target + 1)\n        dp[0] = 0\n        for x in nums:\n            for s in range(target, x - 1, -1):\n                if dp[s - x] + 1 > dp[s]:\n                    dp[s] = dp[s - x] + 1\n        return dp[target] if dp[target] > 0 else -1",
   "time": "O(n·target)",
   "space": "O(target)",
   "explain": "dp[s] is the longest subsequence that adds up to exactly s (−∞ if impossible). Process each number once, updating sums from high to low so each number is used at most once: dp[s] = max(dp[s], dp[s − x] + 1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def lengthOfLongestSubsequence(self, nums, target):\n        NEG = float('-inf')\n        @lru_cache(None)\n        def best(i, rem):\n            if rem == 0:\n                return 0\n            if i == len(nums) or rem < 0:\n                return NEG\n            return max(best(i + 1, rem), 1 + best(i + 1, rem - nums[i]))\n        r = best(0, target)\n        return r if r > 0 else -1",
   "time": "O(n·target)",
   "space": "O(n·target)",
   "explain": "best(i, remaining) = longest subsequence from nums[i:] summing to remaining.",
   "frames": [],
   "alt": true
  }
 ]
};
