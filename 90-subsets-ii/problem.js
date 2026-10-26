window.PROBLEM = {
 "id": "90",
 "title": "Subsets II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
