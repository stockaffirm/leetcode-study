window.PROBLEM = {
 "id": "276",
 "title": "Paint Fence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You paint a fence of n posts using k colours. Every post gets exactly one colour, and you may NOT have three or more posts in a row with the same colour (two in a row is fine). Return the number of different ways to paint the fence. Example: n=3, k=2 → 2 colours, 3 posts: all 2³ = 8 combinations except the two with three equal posts → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def numWays(self, n, k):\n        @lru_cache(None)\n        def f(i):\n            if i == 1: return k\n            if i == 2: return k * k\n            return (k - 1) * (f(i - 1) + f(i - 2))\n        return f(n)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "f(n) = (k−1)·(f(n−1) + f(n−2)).",
   "frames": [],
   "alt": true
  }
 ]
};
