window.PROBLEM = {
 "id": "156",
 "title": "Binary Tree Upside Down",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Flip a binary tree upside down: the leftmost node becomes the new root; each original parent becomes the RIGHT child of its old left child, and the parent's old right child becomes the LEFT child of that old left child. (Every right node has a sibling and no children.) Return the new root. Example: [1,2,3,4,5] → [4,5,2,null,null,3,1]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def upsideDownBinaryTree(self, root):\n        if not root or not root.left: return root\n        new_root = self.upsideDownBinaryTree(root.left)\n        root.left.left = root.right\n        root.left.right = root\n        root.left = root.right = None\n        return new_root",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Flip the left subtree first, then hang the node and its old right child under the old left child.",
   "frames": [],
   "alt": true
  }
 ]
};
