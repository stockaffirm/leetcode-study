window.PROBLEM = {
 "id": "1382",
 "title": "Balance a Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given a binary search tree, return a balanced BST (the depths of the two subtrees of every node differ by at most 1) with the same values; any valid answer is accepted. Example: the chain [1,null,2,null,3,null,4] → [3,2,4,1]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "A BST that is a straight line 1→2→3→4 becomes a balanced tree rooted at the middle value.",
 "idea": "The in-order walk of a BST is sorted. Collect it, then build a new tree: the middle value becomes the root and the left and right halves become the subtrees (recursively).",
 "input": "root = [1,null,2,null,3,null,4]",
 "output": "a balanced tree such as [3,2,4,1]",
 "notes": [],
 "best": "The in-order walk of a BST is sorted. Collect it, then build a new tree: the middle value becomes the root and the left and right halves become the subtrees (recursively).",
 "variants": [
  {
   "name": "In-order list, rebuild from the middle",
   "code": "class Solution:\n    def balanceBST(self, root):\n        vals = []\n        def inorder(n):\n            if n:\n                inorder(n.left)\n                vals.append(n.val)\n                inorder(n.right)\n        inorder(root)\n        def build(l, r):\n            if l > r:\n                return None\n            mid = (l + r + 1) // 2\n            return TreeNode(vals[mid], build(l, mid - 1), build(mid + 1, r))\n        return build(0, len(vals) - 1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The in-order walk of a BST is sorted. Collect it, then build a new tree: the middle value becomes the root and the left and right halves become the subtrees (recursively).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Rebuild from slices",
   "tag": "Alternative",
   "code": "class Solution:\n    def balanceBST(self, root):\n        vals = []\n        stack, cur = [], root\n        while stack or cur:\n            while cur:\n                stack.append(cur)\n                cur = cur.left\n            cur = stack.pop()\n            vals.append(cur.val)\n            cur = cur.right\n        def build(a):\n            if not a:\n                return None\n            mid = len(a) // 2\n            return TreeNode(a[mid], build(a[:mid]), build(a[mid + 1:]))\n        return build(vals)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build the tree from the sorted list with list slicing: middle value as root.",
   "frames": [],
   "alt": true
  }
 ]
};
