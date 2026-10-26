window.PROBLEM = {
 "id": "3176",
 "title": "Find the Maximum Length of a Good Subsequence I",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You are given a list nums and a number k. A subsequence (numbers picked in order, not necessarily next to each other) is 'good' if there are at most k positions where two neighbouring picked numbers are DIFFERENT. Return the length of the longest good subsequence. Example: nums [1,2,1,1,3], k=2 → the subsequence [1,2,1,1] has two changes (1→2 and 2→1) → length 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Best-per-value table",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumLength(self, nums, k):\n        end = defaultdict(lambda: [0] * (k + 1))\n        best_at = [0] * (k + 1)\n        for x in nums:\n            for j in range(k, -1, -1):\n                cur = end[x][j] + 1\n                if j > 0: cur = max(cur, best_at[j - 1] + 1)\n                end[x][j] = max(end[x][j], cur)\n                best_at[j] = max(best_at[j], end[x][j])\n        return max(best_at)",
   "time": "O(n·k)",
   "space": "O(n·k)",
   "explain": "Remember, for each value and change count, the best length ending with that value, plus the best overall for each change count.",
   "frames": [],
   "alt": true
  }
 ]
};
