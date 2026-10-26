window.PROBLEM = {
 "id": "410",
 "title": "Split Array Largest Sum",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "Split a list of non-negative numbers into k non-empty consecutive parts so that the largest sum of a part is as small as possible; return that smallest largest sum. Example: [7,2,5,10,8], k=2 → 18 ([7,2,5] and [10,8]).",
 "why": "Split a list into k non-empty consecutive parts so that the largest part-sum is as small as possible.",
 "idea": "Guess the limit L for a part-sum and greedily cut whenever adding the next number would exceed L. If at most k parts are needed, L is feasible; binary search the smallest feasible L.",
 "input": "[7,2,5,10,8], k=2",
 "output": "18",
 "notes": [],
 "best": "Guess the limit L for a part-sum and greedily cut whenever adding the next number would exceed L. If at most k parts are needed, L is feasible; binary search the smallest feasible L.",
 "variants": [
  {
   "name": "Binary search on the answer",
   "code": "class Solution:\n    def splitArray(self, nums, k):\n        def parts(limit):\n            c, cur = 1, 0\n            for x in nums:\n                if cur + x > limit:\n                    c += 1\n                    cur = 0\n                cur += x\n            return c\n        lo, hi = max(nums), sum(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if parts(mid) <= k: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log S)",
   "space": "O(1)",
   "explain": "Guess the limit L for a part-sum and greedily cut whenever adding the next number would exceed L. If at most k parts are needed, L is feasible; binary search the smallest feasible L.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over prefix sums",
   "tag": "Alternative",
   "code": "class Solution:\n    def splitArray(self, nums, k):\n        n = len(nums)\n        pre = [0] + list(accumulate(nums))\n        INF = float('inf')\n        dp = [[INF] * (n + 1) for _ in range(k + 1)]\n        dp[0][0] = 0\n        for j in range(1, k + 1):\n            for i in range(j, n + 1):\n                for cut in range(j - 1, i):\n                    dp[j][i] = min(dp[j][i], max(dp[j - 1][cut], pre[i] - pre[cut]))\n        return dp[k][n]",
   "time": "O(k·n²)",
   "space": "O(k·n)",
   "explain": "dp[j][i] = best split of the first i numbers into j parts, trying every last cut.",
   "frames": [],
   "alt": true
  }
 ]
};
