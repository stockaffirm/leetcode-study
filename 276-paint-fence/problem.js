window.PROBLEM = {
 "id": "276",
 "title": "Paint Fence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Paint n fence posts with k colours so that no THREE posts in a row have the same colour. How many ways?",
 "idea": "Track two counts for the last post: it has the same colour as the post before (only allowed if the two before differed), or a different colour (k−1 choices from any earlier state).",
 "input": "n=3, k=2",
 "output": "6",
 "notes": [],
 "best": "Track two counts for the last post: it has the same colour as the post before (only allowed if the two before differed), or a different colour (k−1 choices from any earlier state).",
 "variants": [
  {
   "name": "DP: same-as-previous vs different",
   "code": "class Solution:\n    def numWays(self, n, k):\n        if n == 1: return k\n        same, diff = k, k * (k - 1)\n        for _ in range(3, n + 1):\n            same, diff = diff, (same + diff) * (k - 1)\n        return same + diff",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track two counts for the last post: it has the same colour as the post before (only allowed if the two before differed), or a different colour (k−1 choices from any earlier state).",
   "frames": []
  }
 ]
};
