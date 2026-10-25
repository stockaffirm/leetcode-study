window.PROBLEM = {
 "id": "78",
 "title": "Subsets",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Given a list of distinct numbers, return all possible subsets (the empty set and the full set included), in any order. Example: [1,2,3] → [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Doubling",
   "tag": "Alternative",
   "code": "class Solution:\n    def subsets(self, nums):\n        res = [[]]\n        for x in nums: res += [r + [x] for r in res]\n        return res",
   "time": "O(n·2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Start with [[]] and for each number add a copy of every existing subset with that number appended.",
   "frames": [],
   "alt": true
  }
 ]
};
