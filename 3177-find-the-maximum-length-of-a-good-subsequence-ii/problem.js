window.PROBLEM = {
 "id": "3177",
 "title": "Find the Maximum Length of a Good Subsequence II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
