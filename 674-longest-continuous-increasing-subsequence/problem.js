window.PROBLEM = {
 "id": "674",
 "title": "Longest Continuous Increasing Subsequence",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return the length of the longest run of neighbouring numbers that is strictly increasing. Example: [1,3,5,4,7] → 3.",
 "why": "[1,3,5,4,7]: the longest strictly rising run is 1,3,5 (length 3).",
 "idea": "Extend the current run while each number is bigger than the previous one; reset to 1 otherwise. Keep the longest.",
 "input": "nums = [1,3,5,4,7]",
 "output": "3",
 "notes": [],
 "best": "Extend the current run while each number is bigger than the previous one; reset to 1 otherwise. Keep the longest.",
 "variants": [
  {
   "name": "Running streak",
   "code": "class Solution:\n    def findLengthOfLCIS(self, nums):\n        best = cur = 1\n        for i in range(1, len(nums)):\n            cur = cur + 1 if nums[i] > nums[i - 1] else 1\n            best = max(best, cur)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Extend the current run while each number is bigger than the previous one; reset to 1 otherwise. Keep the longest.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP array",
   "tag": "Alternative",
   "code": "class Solution:\n    def findLengthOfLCIS(self, nums):\n        dp = [1] * len(nums)\n        for i in range(1, len(nums)):\n            if nums[i] > nums[i - 1]:\n                dp[i] = dp[i - 1] + 1\n        return max(dp)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[i] is the length of the run ending at i.",
   "frames": [],
   "alt": true
  }
 ]
};
