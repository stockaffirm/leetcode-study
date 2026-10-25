window.PROBLEM = {
 "id": "3177",
 "title": "Find the Maximum Length of a Good Subsequence II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You are given a list nums and a number k. A subsequence (numbers picked in order, not necessarily next to each other) is 'good' if there are at most k positions where two neighbouring picked numbers are DIFFERENT. Return the length of the longest good subsequence; this version has a much longer list, so check every pair of positions is too slow. Example: nums [1,2,1,1,3], k=2 → [1,2,1,1] → 4.",
 "why": "Same as part I, but the list is much longer, so the O(n²) approach is too slow.",
 "idea": "For each value x and number of changes j keep the best length ending with x, and for each j the best over ALL values. A new element either continues a run of the same value (no change) or extends the best subsequence with j−1 changes.",
 "input": "nums [1,2,1,1,3], k=2",
 "output": "4",
 "notes": [],
 "best": "For each value x and number of changes j keep the best length ending with x, and for each j the best over ALL values. A new element either continues a run of the same value (no change) or extends the best subsequence with j−1 changes.",
 "variants": [
  {
   "name": "DP with best-per-changes table",
   "code": "class Solution:\n    def maximumLength(self, nums, k):\n        end = defaultdict(lambda: [0] * (k + 1))\n        best_at = [0] * (k + 1)\n        for x in nums:\n            for j in range(k, -1, -1):\n                cur = end[x][j] + 1\n                if j > 0: cur = max(cur, best_at[j - 1] + 1)\n                end[x][j] = max(end[x][j], cur)\n                best_at[j] = max(best_at[j], end[x][j])\n        return max(best_at)",
   "time": "O(n·k)",
   "space": "O(n·k)",
   "explain": "For each value x and number of changes j keep the best length ending with x, and for each j the best over ALL values. A new element either continues a run of the same value (no change) or extends the best subsequence with j−1 changes.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "O(n²·k) table",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumLength(self, nums, k):\n        n = len(nums)\n        dp = [[1] * (k + 1) for _ in range(n)]\n        best = 1\n        for i in range(n):\n            for j in range(k + 1):\n                for p in range(i):\n                    if nums[p] == nums[i]:\n                        dp[i][j] = max(dp[i][j], dp[p][j] + 1)\n                    elif j > 0:\n                        dp[i][j] = max(dp[i][j], dp[p][j - 1] + 1)\n                best = max(best, dp[i][j])\n        return best",
   "time": "O(n²·k)",
   "space": "O(n·k)",
   "explain": "The straightforward DP over every pair of indexes — correct but too slow for the real limits.",
   "frames": [],
   "alt": true
  }
 ]
};
