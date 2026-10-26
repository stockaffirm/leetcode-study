window.PROBLEM = {
 "id": "213",
 "title": "House Robber II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Houses stand in a CIRCLE, and nums[i] is the money in house i. Robbing two houses that are next to each other triggers an alarm, and because it is a circle the first and the last house are also neighbours. Return the most money you can take without setting off the alarm. Example: [2,3,2] → you cannot take both 2s (they are neighbours), so the best is the single 3 → 3.",
 "why": "Houses stand in a circle, so the first and last are neighbours. [2,3,2] → you can't take both 2s, best is 3.",
 "idea": "A circle means you can't use both ends. So solve the straight-line version twice — once without the first house, once without the last — and take the better.",
 "input": "[2, 3, 2]",
 "output": "3",
 "notes": [],
 "best": "A circle means you can't use both ends. So solve the straight-line version twice — once without the first house, once without the last — and take the better.",
 "variants": [
  {
   "name": "Two linear runs",
   "code": "class Solution:\n    def rob(self, nums):\n        def line(a):\n            prev = cur = 0\n            for x in a:\n                prev, cur = cur, max(cur, prev + x)\n            return cur\n        if len(nums) == 1: return nums[0]\n        return max(line(nums[1:]), line(nums[:-1]))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A circle means you can't use both ends. So solve the straight-line version twice — once without the first house, once without the last — and take the better.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion + memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def rob(self, nums):\n        n = len(nums)\n        if n == 1: return nums[0]\n        @lru_cache(None)\n        def go(i, end):\n            if i >= end: return 0\n            return max(go(i + 1, end), nums[i] + go(i + 2, end))\n        return max(go(0, n - 1), go(1, n))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each (house, last allowed house) decide: skip it, or rob it and jump two. Two calls cover the two cases (use house 0 / don't).",
   "frames": [],
   "alt": true
  },
  {
   "name": "Table DP (two passes)",
   "tag": "Alternative",
   "code": "class Solution:\n    def rob(self, nums):\n        if len(nums) == 1: return nums[0]\n        def line(a):\n            dp = [0] * (len(a) + 1)\n            for i, x in enumerate(a):\n                dp[i + 1] = max(dp[i], (dp[i - 1] if i else 0) + x)\n            return dp[-1]\n        return max(line(nums[1:]), line(nums[:-1]))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Same two straight-line runs, but with a full table of best-so-far per house.",
   "frames": [],
   "alt": true
  }
 ]
};
