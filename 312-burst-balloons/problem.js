window.PROBLEM = {
 "id": "312",
 "title": "Burst Balloons",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Bursting balloon i gives nums[i−1]·nums[i]·nums[i+1] coins (missing neighbours count as 1). Burst them all for the maximum coins.",
 "idea": "Think in reverse: choose the LAST balloon k to burst in a range; then its neighbours are the range borders and the two sides are independent: dp[l][r] = max over k of dp[l][k] + dp[k][r] + nums[l]·nums[k]·nums[r].",
 "input": "[3,1,5,8]",
 "output": "167",
 "notes": [],
 "best": "Think in reverse: choose the LAST balloon k to burst in a range; then its neighbours are the range borders and the two sides are independent: dp[l][r] = max over k of dp[l][k] + dp[k][r] + nums[l]·nums[k]·nums[r].",
 "variants": [
  {
   "name": "Interval DP: which balloon bursts last",
   "code": "class Solution:\n    def maxCoins(self, nums):\n        a = [1] + nums + [1]\n        n = len(a)\n        dp = [[0] * n for _ in range(n)]\n        for length in range(2, n):\n            for l in range(n - length):\n                r = l + length\n                dp[l][r] = max(dp[l][k] + dp[k][r] + a[l] * a[k] * a[r] for k in range(l + 1, r))\n        return dp[0][n - 1]",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "Think in reverse: choose the LAST balloon k to burst in a range; then its neighbours are the range borders and the two sides are independent: dp[l][r] = max over k of dp[l][k] + dp[k][r] + nums[l]·nums[k]·nums[r].",
   "frames": []
  }
 ]
};
