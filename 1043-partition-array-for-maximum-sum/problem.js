window.PROBLEM = {
 "id": "1043",
 "title": "Partition Array for Maximum Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Cut an array into pieces of length at most k. Each piece then becomes all its largest value. Return the largest possible sum of the array after this. Example: [1,15,7,9,2,5,10], k=3 → 84.",
 "why": "[1,15,7,9,2,5,10], k=3: blocks [1,15,7] → 15×3 = 45, [9] → 9, [2,5,10] → 10×3 = 30: total 84.",
 "idea": "Cut the array into blocks of length at most k; every block turns into its maximum repeated. dp[i] is the best sum for the first i numbers: try every last block length j ≤ k and take dp[i−j] + j × (max of that block).",
 "input": "arr = [1,15,7,9,2,5,10], k = 3",
 "output": "84",
 "notes": [],
 "best": "Cut the array into blocks of length at most k; every block turns into its maximum repeated. dp[i] is the best sum for the first i numbers: try every last block length j ≤ k and take dp[i−j] + j × (max of that block).",
 "variants": [
  {
   "name": "DP over the last block",
   "code": "class Solution:\n    def maxSumAfterPartitioning(self, arr, k):\n        n = len(arr)\n        dp = [0] * (n + 1)\n        for i in range(1, n + 1):\n            mx = 0\n            for j in range(1, min(k, i) + 1):\n                mx = max(mx, arr[i - j])\n                dp[i] = max(dp[i], dp[i - j] + mx * j)\n        return dp[n]",
   "time": "O(n·k)",
   "space": "O(n)",
   "explain": "Cut the array into blocks of length at most k; every block turns into its maximum repeated. dp[i] is the best sum for the first i numbers: try every last block length j ≤ k and take dp[i−j] + j × (max of that block).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down memoization",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxSumAfterPartitioning(self, arr, k):\n        n = len(arr)\n        @lru_cache(None)\n        def best(i):\n            if i == n:\n                return 0\n            res = mx = 0\n            for j in range(i, min(n, i + k)):\n                mx = max(mx, arr[j])\n                res = max(res, mx * (j - i + 1) + best(j + 1))\n            return res\n        return best(0)",
   "time": "O(n·k)",
   "space": "O(n)",
   "explain": "best(i) is the best sum for the numbers from position i on.",
   "frames": [],
   "alt": true
  }
 ]
};
