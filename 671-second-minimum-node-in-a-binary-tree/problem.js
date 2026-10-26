window.PROBLEM = {
 "id": "671",
 "title": "Second Minimum Node In a Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "In this special tree every node has 0 or 2 children and equals the smaller of its two children. Return the second smallest distinct value in the tree, or −1.",
 "idea": "The root is the minimum. The answer is the smallest value bigger than the root. Going below a node whose value is already bigger than the root is pointless (children are even bigger), so stop there.",
 "input": "[2,2,5,null,null,5,7]",
 "output": "5",
 "notes": [],
 "best": "The root is the minimum. The answer is the smallest value bigger than the root. Going below a node whose value is already bigger than the root is pointless (children are even bigger), so stop there.",
 "variants": [
  {
   "name": "DFS that stops at the first bigger value",
   "code": "class Solution:\n    def findSecondMinimumValue(self, root):\n        first = root.val\n        res = -1\n        def dfs(node):\n            nonlocal res\n            if not node: return\n            if res != -1 and node.val >= res: return\n            if node.val > first: res = node.val\n            else:\n                dfs(node.left)\n                dfs(node.right)\n        dfs(root)\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "The root is the minimum. The answer is the smallest value bigger than the root. Going below a node whose value is already bigger than the root is pointless (children are even bigger), so stop there.",
   "frames": []
  }
 ]
};
