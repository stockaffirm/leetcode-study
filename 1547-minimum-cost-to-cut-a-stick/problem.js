window.PROBLEM = {
 "id": "1547",
 "title": "Minimum Cost to Cut a Stick",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=7, cuts [1,3,4,5] → total cost 16.",
 "idea": "A cut costs the current stick length. Sort the cuts and add the ends 0 and n. dp[i][j] = cheapest way to make all cuts strictly between positions i and j: choose the first cut k and pay (pos[j] − pos[i]) + dp[i][k] + dp[k][j].",
 "input": "n = 7, cuts = [1,3,4,5]",
 "output": "16",
 "notes": [],
 "best": "A cut costs the current stick length. Sort the cuts and add the ends 0 and n. dp[i][j] = cheapest way to make all cuts strictly between positions i and j: choose the first cut k and pay (pos[j] − pos[i]) + dp[i][k] + dp[k][j].",
 "variants": [
  {
   "name": "Interval DP over cut positions",
   "code": "class Solution:\n    def minCost(self, n, cuts):\n        pos = [0] + sorted(cuts) + [n]\n        m = len(pos)\n        dp = [[0] * m for _ in range(m)]\n        for length in range(2, m):\n            for i in range(m - length):\n                j = i + length\n                dp[i][j] = pos[j] - pos[i] + min(dp[i][k] + dp[k][j] for k in range(i + 1, j))\n        return dp[0][m - 1]",
   "time": "O(c³)",
   "space": "O(c²)",
   "explain": "A cut costs the current stick length. Sort the cuts and add the ends 0 and n. dp[i][j] = cheapest way to make all cuts strictly between positions i and j: choose the first cut k and pay (pos[j] − pos[i]) + dp[i][k] + dp[k][j].",
   "frames": []
  }
 ]
};
