window.PROBLEM = {
 "id": "312",
 "title": "Burst Balloons",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "There are balloons with numbers. Bursting balloon i earns nums[i−1]·nums[i]·nums[i+1] coins, where a missing neighbour (beyond either end) counts as 1; after it bursts its neighbours become adjacent. Return the maximum coins for bursting all balloons. Example: [3,1,5,8] → 167.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxCoins(self, nums):\n        a = [1] + nums + [1]\n        @lru_cache(None)\n        def f(l, r):\n            if r - l < 2: return 0\n            return max(f(l, k) + f(k, r) + a[l] * a[k] * a[r] for k in range(l + 1, r))\n        return f(0, len(a) - 1)",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "f(l, r) = best coins from the balloons strictly between l and r.",
   "frames": [],
   "alt": true
  }
 ]
};
