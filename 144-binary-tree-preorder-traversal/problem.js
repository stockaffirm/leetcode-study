window.PROBLEM = {
 "id": "144",
 "title": "Binary Tree Preorder Traversal",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "Tree 1 → right child 2 → left child 3. Preorder visits node, left, right: 1, 2, 3.",
 "idea": "Pop a node from the stack, record it, then push its right child first and its left child second so the left one is processed next.",
 "input": "root = [1,null,2,3]",
 "output": "[1, 2, 3]",
 "notes": [],
 "best": "Pop a node from the stack, record it, then push its right child first and its left child second so the left one is processed next.",
 "variants": [
  {
   "name": "Iterative with a stack",
   "code": "class Solution:\n    def preorderTraversal(self, root):\n        res = []\n        stack = [root] if root else []\n        while stack:\n            node = stack.pop()\n            res.append(node.val)\n            if node.right:\n                stack.append(node.right)\n            if node.left:\n                stack.append(node.left)\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Pop a node from the stack, record it, then push its right child first and its left child second so the left one is processed next.",
   "frames": []
  }
 ]
};
