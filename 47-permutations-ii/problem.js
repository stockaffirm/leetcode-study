window.PROBLEM = {
 "id": "47",
 "title": "Permutations II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Return all DISTINCT orderings of a list of numbers that may contain repeated values (list each ordering once, in any order). Example: [1,1,2] → [[1,1,2],[1,2,1],[2,1,1]].",
 "why": "List all distinct orderings of a list that may contain repeated numbers.",
 "idea": "Sort the numbers. When choosing the next number, skip a value equal to the previous one if that previous copy is not currently in use — otherwise the same ordering appears twice.",
 "input": "[1,1,2]",
 "output": "[[1,1,2],[1,2,1],[2,1,1]]",
 "notes": [],
 "best": "Sort the numbers. When choosing the next number, skip a value equal to the previous one if that previous copy is not currently in use — otherwise the same ordering appears twice.",
 "variants": [
  {
   "name": "Sorted backtracking, skip duplicates",
   "code": "class Solution:\n    def permuteUnique(self, nums):\n        nums = sorted(nums)\n        used = [False] * len(nums)\n        res, path = [], []\n        def go():\n            if len(path) == len(nums):\n                res.append(path[:])\n                return\n            for i in range(len(nums)):\n                if used[i]: continue\n                if i and nums[i] == nums[i - 1] and not used[i - 1]: continue\n                used[i] = True\n                path.append(nums[i])\n                go()\n                path.pop()\n                used[i] = False\n        go()\n        return res",
   "time": "O(n·n!)",
   "space": "O(n)",
   "explain": "Sort the numbers. When choosing the next number, skip a value equal to the previous one if that previous copy is not currently in use — otherwise the same ordering appears twice.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Counter of remaining values",
   "tag": "Alternative",
   "code": "class Solution:\n    def permuteUnique(self, nums):\n        cnt = Counter(nums)\n        res, path = [], []\n        def go():\n            if len(path) == len(nums):\n                res.append(path[:])\n                return\n            for v in sorted(cnt):\n                if cnt[v] == 0: continue\n                cnt[v] -= 1\n                path.append(v)\n                go()\n                path.pop()\n                cnt[v] += 1\n        go()\n        return res",
   "time": "O(n·n!)",
   "space": "O(n)",
   "explain": "Instead of flags, keep how many copies of each value are left and try each distinct value once.",
   "frames": [],
   "alt": true
  }
 ]
};
