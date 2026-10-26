window.PROBLEM = {
 "id": "669",
 "title": "Trim a Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,0,2], keep 1..2: node 0 is too small, drop it and keep its right side → [1,null,2].",
 "idea": "If a node is below low, its whole left subtree is too small too, so the answer is the trimmed right subtree. If it is above high, take the trimmed left subtree. Otherwise keep the node and trim both children.",
 "input": "root = [1,0,2], low = 1, high = 2",
 "output": "[1, None, 2]",
 "notes": [],
 "best": "If a node is below low, its whole left subtree is too small too, so the answer is the trimmed right subtree. If it is above high, take the trimmed left subtree. Otherwise keep the node and trim both children.",
 "variants": [
  {
   "name": "Recursive trim using BST order",
   "code": "class Solution:\n    def trimBST(self, root, low, high):\n        if not root:\n            return None\n        if root.val < low:\n            return self.trimBST(root.right, low, high)\n        if root.val > high:\n            return self.trimBST(root.left, low, high)\n        root.left = self.trimBST(root.left, low, high)\n        root.right = self.trimBST(root.right, low, high)\n        return root",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "If a node is below low, its whole left subtree is too small too, so the answer is the trimmed right subtree. If it is above high, take the trimmed left subtree. Otherwise keep the node and trim both children.",
   "frames": []
  }
 ]
};
