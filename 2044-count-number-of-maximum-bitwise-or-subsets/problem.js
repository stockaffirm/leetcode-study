window.PROBLEM = {
 "id": "2044",
 "title": "Count Number of Maximum Bitwise-OR Subsets",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "[3,1] → maximum OR 3 reached by {3} and {3,1} → 2.",
 "idea": "The largest possible OR is the OR of all numbers. Count the subsets whose OR reaches it with a DFS (Depth-First Search) that either includes or skips each number.",
 "input": "nums = [3,1]",
 "output": "2",
 "notes": [],
 "best": "The largest possible OR is the OR of all numbers. Count the subsets whose OR reaches it with a DFS (Depth-First Search) that either includes or skips each number.",
 "variants": [
  {
   "name": "DFS over include / skip",
   "code": "class Solution:\n    def countMaxOrSubsets(self, nums):\n        target = 0\n        for x in nums:\n            target |= x\n        def dfs(i, cur):\n            if i == len(nums):\n                return 1 if cur == target else 0\n            return dfs(i + 1, cur) + dfs(i + 1, cur | nums[i])\n        return dfs(0, 0)",
   "time": "O(2ⁿ)",
   "space": "O(n)",
   "explain": "The largest possible OR is the OR of all numbers. Count the subsets whose OR reaches it with a DFS (Depth-First Search) that either includes or skips each number.",
   "frames": []
  }
 ]
};
