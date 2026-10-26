window.PROBLEM = {
 "id": "377",
 "title": "Combination Sum IV",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,2,3], target 4 has 7 ordered ways: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 1+3, 3+1.",
 "idea": "dp[t] is the number of ordered ways to reach t. The last number can be any x ≤ t, so dp[t] = Σ dp[t − x]. dp[0] = 1.",
 "input": "nums = [1,2,3], target = 4",
 "output": "7",
 "notes": [],
 "best": "dp[t] is the number of ordered ways to reach t. The last number can be any x ≤ t, so dp[t] = Σ dp[t − x]. dp[0] = 1.",
 "variants": [
  {
   "name": "DP over the target",
   "code": "class Solution:\n    def combinationSum4(self, nums, target):\n        dp = [1] + [0] * target\n        for t in range(1, target + 1):\n            for x in nums:\n                if x <= t:\n                    dp[t] += dp[t - x]\n        return dp[target]",
   "time": "O(target · n)",
   "space": "O(target)",
   "explain": "dp[t] is the number of ordered ways to reach t. The last number can be any x ≤ t, so dp[t] = Σ dp[t − x]. dp[0] = 1.",
   "frames": []
  }
 ]
};
