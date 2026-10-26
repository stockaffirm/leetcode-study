window.PROBLEM = {
 "id": "3469",
 "title": "Find Minimum Cost to Remove Array Elements",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[6,2,8,4] → remove 6 and 8 (cost 8), then 2 and 4 (cost 4) → 12.",
 "idea": "Each step removes two of the first three elements, so at most one older element survives at the front (the 'carry'). State: the index of the carry and the next unread index. Remove the next two (carry stays), or the carry with one of the next two (the other becomes the new carry). When fewer than three elements remain, pay the maximum of them.",
 "input": "nums = [6,2,8,4]",
 "output": "12",
 "notes": [],
 "best": "Each step removes two of the first three elements, so at most one older element survives at the front (the 'carry'). State: the index of the carry and the next unread index. Remove the next two (carry stays), or the carry with one of the next two (the other becomes the new carry). When fewer than three elements remain, pay the maximum of them.",
 "variants": [
  {
   "name": "DP with one carried element",
   "code": "class Solution:\n    def minCost(self, nums):\n        n = len(nums)\n        if n < 3:\n            return max(nums)\n        @lru_cache(None)\n        def go(c, i):\n            if n - i + 1 < 3:\n                return max([nums[c]] + nums[i:])\n            a, b = nums[i], nums[i + 1]\n            return min(max(a, b) + go(c, i + 2),\n                       max(nums[c], a) + go(i + 1, i + 2),\n                       max(nums[c], b) + go(i, i + 2))\n        return min(max(nums[0], nums[1]) + go(2, 3),\n                   max(nums[0], nums[2]) + go(1, 3),\n                   max(nums[1], nums[2]) + go(0, 3))",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Each step removes two of the first three elements, so at most one older element survives at the front (the 'carry'). State: the index of the carry and the next unread index. Remove the next two (carry stays), or the carry with one of the next two (the other becomes the new carry). When fewer than three elements remain, pay the maximum of them.",
   "frames": []
  }
 ]
};
