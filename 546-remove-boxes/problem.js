window.PROBLEM = {
 "id": "546",
 "title": "Remove Boxes",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Removing k contiguous boxes of the same colour scores k × k points. Remove all boxes in the best order and return the maximum score. Example: [1,3,2,2,2,3,4,3,1] → 23.",
 "why": "[1,3,2,2,2,3,4,3,1] → clear 2,2,2 (9 points), then 4, then merge the 3s... best score 23.",
 "idea": "Removing k same-coloured contiguous boxes scores k². dp(l, r, k) = best score for boxes[l..r] when k extra boxes equal to boxes[r] are stuck to its right. Either remove boxes[r] with its k attachments now ((k+1)² + dp(l, r−1, 0)), or find an earlier box i of the same colour and first clear the stuff between them so they join: dp(l, i, k+1) + dp(i+1, r−1, 0).",
 "input": "boxes = [1,3,2,2,2,3,4,3,1]",
 "output": "23",
 "notes": [],
 "best": "Removing k same-coloured contiguous boxes scores k². dp(l, r, k) = best score for boxes[l..r] when k extra boxes equal to boxes[r] are stuck to its right. Either remove boxes[r] with its k attachments now ((k+1)² + dp(l, r−1, 0)), or find an earlier box i of the same colour and first clear the stuff between them so they join: dp(l, i, k+1) + dp(i+1, r−1, 0).",
 "variants": [
  {
   "name": "Interval DP with extra equal boxes attached",
   "code": "class Solution:\n    def removeBoxes(self, boxes):\n        @lru_cache(None)\n        def dp(l, r, k):\n            if l > r:\n                return 0\n            while r > l and boxes[r] == boxes[r - 1]:\n                r -= 1\n                k += 1\n            res = dp(l, r - 1, 0) + (k + 1) ** 2\n            for i in range(l, r):\n                if boxes[i] == boxes[r]:\n                    res = max(res, dp(l, i, k + 1) + dp(i + 1, r - 1, 0))\n            return res\n        return dp(0, len(boxes) - 1, 0)",
   "time": "O(n⁴)",
   "space": "O(n³)",
   "explain": "Removing k same-coloured contiguous boxes scores k². dp(l, r, k) = best score for boxes[l..r] when k extra boxes equal to boxes[r] are stuck to its right. Either remove boxes[r] with its k attachments now ((k+1)² + dp(l, r−1, 0)), or find an earlier box i of the same colour and first clear the stuff between them so they join: dp(l, i, k+1) + dp(i+1, r−1, 0).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bottom-up table",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeBoxes(self, boxes):\n        n = len(boxes)\n        dp = [[[0] * n for _ in range(n)] for _ in range(n)]\n        def get(l, r, k):\n            return dp[l][r][k] if l <= r else 0\n        for length in range(1, n + 1):\n            for l in range(n - length + 1):\n                r = l + length - 1\n                for k in range(0, l + 1):\n                    res = get(l + 1, r, 0) + (k + 1) ** 2\n                    for m in range(l + 1, r + 1):\n                        if boxes[m] == boxes[l]:\n                            res = max(res, get(l + 1, m - 1, 0) + get(m, r, k + 1))\n                    dp[l][r][k] = res\n        return dp[0][n - 1][0]",
   "time": "O(n⁴)",
   "space": "O(n³)",
   "explain": "Same recurrence filled iteratively by interval length.",
   "frames": [],
   "alt": true
  }
 ]
};
