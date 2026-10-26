window.PROBLEM = {
 "id": "2945",
 "title": "Find Maximum Non-decreasing Array Length",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[4,3,2,6]: replace [3,2] by 5 → [4,5,6] length 3.",
 "idea": "Replacing a subarray by its sum means splitting the array into blocks whose sums are non-decreasing; maximise the number of blocks. dp[i] is the best block count for the prefix i, with last[i] the smallest possible sum of the last block. A cut at j is allowed when pre[i] − pre[j] ≥ last[j], i.e. pre[j] + last[j] ≤ pre[i]. Keep candidates j in a deque ordered by pre[j] + last[j] so the best (latest) allowed j is found at the front.",
 "input": "nums = [4,3,2,6]",
 "output": "3",
 "notes": [],
 "best": "Replacing a subarray by its sum means splitting the array into blocks whose sums are non-decreasing; maximise the number of blocks. dp[i] is the best block count for the prefix i, with last[i] the smallest possible sum of the last block. A cut at j is allowed when pre[i] − pre[j] ≥ last[j], i.e. pre[j] + last[j] ≤ pre[i]. Keep candidates j in a deque ordered by pre[j] + last[j] so the best (latest) allowed j is found at the front.",
 "variants": [
  {
   "name": "DP with a monotonic queue over prefix sums",
   "code": "class Solution:\n    def findMaximumLength(self, nums):\n        n = len(nums)\n        pre = [0]\n        for x in nums:\n            pre.append(pre[-1] + x)\n        dp = [0] * (n + 1)\n        last = [0] * (n + 1)\n        q = deque([0])\n        for i in range(1, n + 1):\n            while len(q) >= 2 and pre[q[1]] + last[q[1]] <= pre[i]:\n                q.popleft()\n            j = q[0]\n            dp[i] = dp[j] + 1\n            last[i] = pre[i] - pre[j]\n            while q and pre[q[-1]] + last[q[-1]] >= pre[i] + last[i]:\n                q.pop()\n            q.append(i)\n        return dp[n]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Replacing a subarray by its sum means splitting the array into blocks whose sums are non-decreasing; maximise the number of blocks. dp[i] is the best block count for the prefix i, with last[i] the smallest possible sum of the last block. A cut at j is allowed when pre[i] − pre[j] ≥ last[j], i.e. pre[j] + last[j] ≤ pre[i]. Keep candidates j in a deque ordered by pre[j] + last[j] so the best (latest) allowed j is found at the front.",
   "frames": []
  }
 ]
};
