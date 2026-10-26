window.PROBLEM = {
 "id": "156",
 "title": "Binary Tree Upside Down",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Flip the tree: the leftmost node becomes the root, its parent becomes its right child, and the parent's old right child becomes its left child. Return the new root.",
 "idea": "Walk down the left spine. For each node, point its left at the previous node's old right child and its right at the previous node, remembering what you overwrite.",
 "input": "[1,2,3,4,5]",
 "output": "[4,5,2,null,null,3,1]",
 "notes": [],
 "best": "Walk down the left spine. For each node, point its left at the previous node's old right child and its right at the previous node, remembering what you overwrite.",
 "variants": [
  {
   "name": "Re-link along the left spine",
   "code": "class Solution:\n    def upsideDownBinaryTree(self, root):\n        prev = prev_right = None\n        while root:\n            nxt = root.left\n            root.left = prev_right\n            prev_right = root.right\n            root.right = prev\n            prev = root\n            root = nxt\n        return prev",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk down the left spine. For each node, point its left at the previous node's old right child and its right at the previous node, remembering what you overwrite.",
   "frames": []
  }
 ]
};
