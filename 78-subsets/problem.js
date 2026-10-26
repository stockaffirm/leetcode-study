window.PROBLEM = {
 "id": "78",
 "title": "Subsets",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "Return all possible subsets of a list of distinct numbers.",
 "idea": "Build subsets in a path; at each step record the current path, then try adding each later number.",
 "input": "[1,2,3]",
 "output": "[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]",
 "notes": [],
 "best": "Build subsets in a path; at each step record the current path, then try adding each later number.",
 "variants": [
  {
   "name": "Backtracking: include or skip",
   "code": "class Solution:\n    def subsets(self, nums):\n        res, path = [], []\n        def go(start):\n            res.append(path[:])\n            for i in range(start, len(nums)):\n                path.append(nums[i])\n                go(i + 1)\n                path.pop()\n        go(0)\n        return res",
   "time": "O(n·2ⁿ)",
   "space": "O(n)",
   "explain": "Build subsets in a path; at each step record the current path, then try adding each later number.",
   "frames": []
  }
 ]
};
