window.PROBLEM = {
 "id": "549",
 "title": "Binary Tree Longest Consecutive Sequence II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Find the longest path in a binary tree whose values are consecutive (…+1 each step or −1 each step); the path may go up to a parent and down again.",
 "idea": "For every node compute the longest increasing and decreasing chain going down from it. A path through the node joins an increasing chain on one side with a decreasing chain on the other: length = inc + dec − 1.",
 "input": "[2,1,3]",
 "output": "3",
 "notes": [],
 "best": "For every node compute the longest increasing and decreasing chain going down from it. A path through the node joins an increasing chain on one side with a decreasing chain on the other: length = inc + dec − 1.",
 "variants": [
  {
   "name": "Increasing and decreasing chains through each node",
   "code": "class Solution:\n    def longestConsecutive(self, root):\n        best = 0\n        def dfs(node):\n            nonlocal best\n            if not node: return 0, 0\n            inc = dec = 1\n            for child in (node.left, node.right):\n                ci, cd = dfs(child)\n                if child and child.val == node.val + 1: inc = max(inc, ci + 1)\n                if child and child.val == node.val - 1: dec = max(dec, cd + 1)\n            best = max(best, inc + dec - 1)\n            return inc, dec\n        dfs(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For every node compute the longest increasing and decreasing chain going down from it. A path through the node joins an increasing chain on one side with a decreasing chain on the other: length = inc + dec − 1.",
   "frames": []
  }
 ]
};
