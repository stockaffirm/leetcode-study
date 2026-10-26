window.PROBLEM = {
 "id": "298",
 "title": "Binary Tree Longest Consecutive Sequence",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,null,3,2,4,null,null,null,5]: 3 → 4 → 5 is a run of 3.",
 "idea": "Walk down from the root passing the run length ending at the parent. A child extends the run when its value is the parent's value + 1, otherwise a new run of length 1 starts. Track the maximum over all nodes.",
 "input": "root = [1,null,3,2,4,null,null,null,5]",
 "output": "3",
 "notes": [],
 "best": "Walk down from the root passing the run length ending at the parent. A child extends the run when its value is the parent's value + 1, otherwise a new run of length 1 starts. Track the maximum over all nodes.",
 "variants": [
  {
   "name": "DFS carrying the current run length",
   "code": "class Solution:\n    def longestConsecutive(self, root):\n        best = 0\n        def dfs(node, parent_val, run):\n            nonlocal best\n            if not node:\n                return\n            run = run + 1 if node.val == parent_val + 1 else 1\n            best = max(best, run)\n            dfs(node.left, node.val, run)\n            dfs(node.right, node.val, run)\n        dfs(root, float('-inf'), 0)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Walk down from the root passing the run length ending at the parent. A child extends the run when its value is the parent's value + 1, otherwise a new run of length 1 starts. Track the maximum over all nodes.",
   "frames": []
  }
 ]
};
