window.PROBLEM = {
 "id": "3040",
 "title": "Maximum Number of Operations With the Same Score II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[3,2,1,2,3,4] → score 5 three times → 3.",
 "idea": "The first operation fixes the score: it is nums[0]+nums[1], nums[-2]+nums[-1] or nums[0]+nums[-1]. For each candidate score run a memoised search on the remaining interval [l, r]: remove the first two, the last two or both ends whenever their sum equals the score, and keep the maximum count.",
 "input": "nums = [3,2,1,2,3,4]",
 "output": "3",
 "notes": [],
 "best": "The first operation fixes the score: it is nums[0]+nums[1], nums[-2]+nums[-1] or nums[0]+nums[-1]. For each candidate score run a memoised search on the remaining interval [l, r]: remove the first two, the last two or both ends whenever their sum equals the score, and keep the maximum count.",
 "variants": [
  {
   "name": "Interval DP for each possible first score",
   "code": "class Solution:\n    def maxOperations(self, nums):\n        n = len(nums)\n        def solve(score):\n            @lru_cache(None)\n            def go(l, r):\n                if r - l + 1 < 2:\n                    return 0\n                best = 0\n                if nums[l] + nums[l + 1] == score:\n                    best = max(best, 1 + go(l + 2, r))\n                if nums[r - 1] + nums[r] == score:\n                    best = max(best, 1 + go(l, r - 2))\n                if nums[l] + nums[r] == score:\n                    best = max(best, 1 + go(l + 1, r - 1))\n                return best\n            return go(0, n - 1)\n        return max(solve(nums[0] + nums[1]), solve(nums[-2] + nums[-1]), solve(nums[0] + nums[-1]))",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "The first operation fixes the score: it is nums[0]+nums[1], nums[-2]+nums[-1] or nums[0]+nums[-1]. For each candidate score run a memoised search on the remaining interval [l, r]: remove the first two, the last two or both ends whenever their sum equals the score, and keep the maximum count.",
   "frames": []
  }
 ]
};
