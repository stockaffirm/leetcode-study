window.PROBLEM = {
 "id": "3176",
 "title": "Find the Maximum Length of a Good Subsequence I",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "A subsequence is 'good' if at most k neighbouring pairs in it are different. Find the longest good subsequence.",
 "idea": "dp[i][j] = longest good subsequence ending at index i with j 'changes' (neighbouring pairs that differ). Extend from any earlier index p: same value costs no change, a different value costs one.",
 "input": "nums [1,2,1,1,3], k=2",
 "output": "4",
 "notes": [],
 "best": "dp[i][j] = longest good subsequence ending at index i with j 'changes' (neighbouring pairs that differ). Extend from any earlier index p: same value costs no change, a different value costs one.",
 "variants": [
  {
   "name": "DP over (end index, changes used)",
   "code": "class Solution:\n    def maximumLength(self, nums, k):\n        n = len(nums)\n        dp = [[1] * (k + 1) for _ in range(n)]\n        best = 1\n        for i in range(n):\n            for j in range(k + 1):\n                for p in range(i):\n                    if nums[p] == nums[i]:\n                        dp[i][j] = max(dp[i][j], dp[p][j] + 1)\n                    elif j > 0:\n                        dp[i][j] = max(dp[i][j], dp[p][j - 1] + 1)\n                best = max(best, dp[i][j])\n        return best",
   "time": "O(n²·k)",
   "space": "O(n·k)",
   "explain": "dp[i][j] = longest good subsequence ending at index i with j 'changes' (neighbouring pairs that differ). Extend from any earlier index p: same value costs no change, a different value costs one.",
   "frames": []
  }
 ]
};
