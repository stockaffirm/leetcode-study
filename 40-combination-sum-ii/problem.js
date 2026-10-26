window.PROBLEM = {
 "id": "40",
 "title": "Combination Sum II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "From a list with duplicates, find all unique combinations (each element used at most once) that add up to the target.",
 "idea": "Sort the list. At each level try the candidates from the current position onward, skipping a value equal to the previous one at the same level (it would repeat a combination), and stop when the remainder goes negative.",
 "input": "[10,1,2,7,6,1,5], target 8",
 "output": "[[1,1,6],[1,2,5],[1,7],[2,6]]",
 "notes": [],
 "best": "Sort the list. At each level try the candidates from the current position onward, skipping a value equal to the previous one at the same level (it would repeat a combination), and stop when the remainder goes negative.",
 "variants": [
  {
   "name": "Sorted backtracking, skip repeated values",
   "code": "class Solution:\n    def combinationSum2(self, candidates, target):\n        candidates = sorted(candidates)\n        res, path = [], []\n        def go(start, rem):\n            if rem == 0:\n                res.append(path[:])\n                return\n            for i in range(start, len(candidates)):\n                if i > start and candidates[i] == candidates[i - 1]: continue\n                if candidates[i] > rem: break\n                path.append(candidates[i])\n                go(i + 1, rem - candidates[i])\n                path.pop()\n        go(0, target)\n        return res",
   "time": "O(2^n)",
   "space": "O(n)",
   "explain": "Sort the list. At each level try the candidates from the current position onward, skipping a value equal to the previous one at the same level (it would repeat a combination), and stop when the remainder goes negative.",
   "frames": []
  }
 ]
};
