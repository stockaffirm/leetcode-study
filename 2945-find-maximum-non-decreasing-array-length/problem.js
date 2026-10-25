window.PROBLEM = {
 "id": "2945",
 "title": "Find Maximum Non-decreasing Array Length",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "In one operation replace any subarray by the sum of its elements. Return the maximum length of a non-decreasing array you can end up with. Example: [4,3,2,6] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Quadratic DP",
   "tag": "Brute force",
   "code": "class Solution:\n    def findMaximumLength(self, nums):\n        n = len(nums)\n        pre = [0]\n        for x in nums:\n            pre.append(pre[-1] + x)\n        best = [(0, 0)] + [None] * n\n        for i in range(1, n + 1):\n            cand = None\n            for j in range(i):\n                ln, ls = best[j]\n                if pre[i] - pre[j] >= ls:\n                    c = (ln + 1, pre[i] - pre[j])\n                    if cand is None or c[0] > cand[0] or (c[0] == cand[0] and c[1] < cand[1]):\n                        cand = c\n            best[i] = cand\n        return best[n][0]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each prefix try every previous cut and keep the longest chain with the smallest last sum.",
   "frames": [],
   "alt": true
  }
 ]
};
