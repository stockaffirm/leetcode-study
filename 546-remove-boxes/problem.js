window.PROBLEM = {
 "id": "546",
 "title": "Remove Boxes",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
