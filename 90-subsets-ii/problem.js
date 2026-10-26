window.PROBLEM = {
 "id": "90",
 "title": "Subsets II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "The numbers of an array may repeat. Return all different subsets (any order); two subsets with the same numbers count as one. Example: [1,2,2] → [[],[1],[1,2],[1,2,2],[2],[2,2]].",
 "why": "[1,2,2] has 6 different subsets: [], [1], [1,2], [1,2,2], [2], [2,2].",
 "idea": "Sort the numbers so equal ones sit together. While choosing the next element at one depth, skip it if it equals the previous choice at the same depth — that would produce a duplicate subset.",
 "input": "nums = [1,2,2]",
 "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
 "notes": [],
 "best": "Sort the numbers so equal ones sit together. While choosing the next element at one depth, skip it if it equals the previous choice at the same depth — that would produce a duplicate subset.",
 "variants": [
  {
   "name": "Backtracking that skips duplicates",
   "code": "class Solution:\n    def subsetsWithDup(self, nums):\n        nums.sort()\n        res, path = [], []\n        def go(start):\n            res.append(path[:])\n            for i in range(start, len(nums)):\n                if i > start and nums[i] == nums[i - 1]:\n                    continue\n                path.append(nums[i])\n                go(i + 1)\n                path.pop()\n        go(0)\n        return res",
   "time": "O(n · 2ⁿ)",
   "space": "O(n)",
   "explain": "Sort the numbers so equal ones sit together. While choosing the next element at one depth, skip it if it equals the previous choice at the same depth — that would produce a duplicate subset.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Extend only the newest subsets",
   "tag": "Alternative",
   "code": "class Solution:\n    def subsetsWithDup(self, nums):\n        nums.sort()\n        res = [[]]\n        prev_size = 0\n        for i, x in enumerate(nums):\n            start = prev_size if i and x == nums[i - 1] else 0\n            prev_size = len(res)\n            res += [s + [x] for s in res[start:]]\n        return res",
   "time": "O(n · 2ⁿ)",
   "space": "O(n · 2ⁿ)",
   "explain": "For a repeated number add it only to the subsets created in the previous step.",
   "frames": [],
   "alt": true
  }
 ]
};
