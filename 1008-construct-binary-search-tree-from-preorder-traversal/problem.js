window.PROBLEM = {
 "id": "1008",
 "title": "Construct Binary Search Tree from Preorder Traversal",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Preorder 8, 5, 1, 7, 10, 12: 8 is the root; 5, 1, 7 are smaller (left), 10, 12 larger (right).",
 "idea": "Read the preorder list once with a shared index. build(bound) makes the next number the root as long as it is below the bound; its left child uses the root's value as bound, the right child uses the parent's bound.",
 "input": "preorder = [8,5,1,7,10,12]",
 "output": "[8,5,10,1,7,null,12]",
 "notes": [],
 "best": "Read the preorder list once with a shared index. build(bound) makes the next number the root as long as it is below the bound; its left child uses the root's value as bound, the right child uses the parent's bound.",
 "variants": [
  {
   "name": "Recursion with an upper bound",
   "code": "class Solution:\n    def bstFromPreorder(self, preorder):\n        i = 0\n        def build(bound):\n            nonlocal i\n            if i == len(preorder) or preorder[i] > bound:\n                return None\n            root = TreeNode(preorder[i])\n            i += 1\n            root.left = build(root.val)\n            root.right = build(bound)\n            return root\n        return build(inf)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Read the preorder list once with a shared index. build(bound) makes the next number the root as long as it is below the bound; its left child uses the root's value as bound, the right child uses the parent's bound.",
   "frames": []
  }
 ]
};
