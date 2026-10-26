window.PROBLEM = {
 "id": "333",
 "title": "Largest BST Subtree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[10,5,15,1,8,null,7] → the subtree rooted at 5 is a BST of size 3.",
 "idea": "Combine the children's results from the bottom: a node roots a BST when both subtrees are BSTs and left.max < val < right.min; its size is left + right + 1. Otherwise report that the subtree is not a BST. Track the largest BST size seen.",
 "input": "root = [10,5,15,1,8,null,7]",
 "output": "3",
 "notes": [],
 "best": "Combine the children's results from the bottom: a node roots a BST when both subtrees are BSTs and left.max < val < right.min; its size is left + right + 1. Otherwise report that the subtree is not a BST. Track the largest BST size seen.",
 "variants": [
  {
   "name": "Post-order: (is BST, size, min, max)",
   "code": "class Solution:\n    def largestBSTSubtree(self, root):\n        best = 0\n        def go(node):\n            nonlocal best\n            if not node:\n                return (True, 0, float('inf'), float('-inf'))\n            lb, ls, lmin, lmax = go(node.left)\n            rb, rs, rmin, rmax = go(node.right)\n            if lb and rb and lmax < node.val < rmin:\n                size = ls + rs + 1\n                best = max(best, size)\n                return (True, size, min(lmin, node.val), max(rmax, node.val))\n            return (False, 0, 0, 0)\n        go(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Combine the children's results from the bottom: a node roots a BST when both subtrees are BSTs and left.max < val < right.min; its size is left + right + 1. Otherwise report that the subtree is not a BST. Track the largest BST size seen.",
   "frames": []
  }
 ]
};
