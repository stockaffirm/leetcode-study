window.PROBLEM = {
 "id": "404",
 "title": "Sum of Left Leaves",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "Left leaves are 9 and 15 → 24.",
 "idea": "Walk the tree and remember whether we came from a left child. A node with no children that was reached as a left child is a left leaf.",
 "input": "root = [3,9,20,null,null,15,7]",
 "output": "24",
 "notes": [],
 "best": "Walk the tree and remember whether we came from a left child. A node with no children that was reached as a left child is a left leaf.",
 "variants": [
  {
   "name": "DFS with a 'is left' flag",
   "code": "class Solution:\n    def sumOfLeftLeaves(self, root):\n        def dfs(node, is_left):\n            if not node:\n                return 0\n            if not node.left and not node.right:\n                return node.val if is_left else 0\n            return dfs(node.left, True) + dfs(node.right, False)\n        return dfs(root, False)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Walk the tree and remember whether we came from a left child. A node with no children that was reached as a left child is a left leaf.",
   "frames": []
  }
 ]
};
