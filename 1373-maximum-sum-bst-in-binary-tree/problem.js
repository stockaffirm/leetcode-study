window.PROBLEM = {
 "id": "1373",
 "title": "Maximum Sum BST in Binary Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]: the BST (Binary Search Tree) rooted at 3 has sum 20.",
 "idea": "For every node compute from its children whether the subtree is a BST (left max < node < right min), its minimum, its maximum and its sum. Update the answer with the sum of every BST subtree (never negative: an empty tree counts 0).",
 "input": "root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]",
 "output": "20",
 "notes": [],
 "best": "For every node compute from its children whether the subtree is a BST (left max < node < right min), its minimum, its maximum and its sum. Update the answer with the sum of every BST subtree (never negative: an empty tree counts 0).",
 "variants": [
  {
   "name": "Post-order returning (isBST, min, max, sum)",
   "code": "class Solution:\n    def maxSumBST(self, root):\n        best = 0\n        def go(node):\n            nonlocal best\n            if not node:\n                return (True, float('inf'), float('-inf'), 0)\n            lb, lmin, lmax, ls = go(node.left)\n            rb, rmin, rmax, rs = go(node.right)\n            if lb and rb and lmax < node.val < rmin:\n                s = ls + rs + node.val\n                best = max(best, s)\n                return (True, min(lmin, node.val), max(rmax, node.val), s)\n            return (False, 0, 0, 0)\n        go(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For every node compute from its children whether the subtree is a BST (left max < node < right min), its minimum, its maximum and its sum. Update the answer with the sum of every BST subtree (never negative: an empty tree counts 0).",
   "frames": []
  }
 ]
};
