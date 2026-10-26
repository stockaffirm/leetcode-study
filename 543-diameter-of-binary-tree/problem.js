window.PROBLEM = {
 "id": "543",
 "title": "Diameter of Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "In a binary tree (boxes called nodes, each with up to two children) the diameter is the number of steps (edges) on the longest path between ANY two nodes; the path does not have to pass through the root. Given the root, return the diameter. Example: the tree [1,2,3,4,5] (1 on top with children 2 and 3; 2 has children 4 and 5) → the path 4 → 2 → 1 → 3 has 3 steps → 3. (A tree written as a list reads level by level, top to bottom and left to right.)",
 "why": "The diameter is the longest path (counted in edges) between any two nodes; it may not pass through the root.",
 "idea": "At every node, the longest path THROUGH it is (height of left) + (height of right). One post-order pass computes heights and keeps the best sum seen.",
 "input": "[1, 2, 3, 4, 5]",
 "output": "3",
 "notes": [],
 "best": "At every node, the longest path THROUGH it is (height of left) + (height of right). One post-order pass computes heights and keeps the best sum seen.",
 "variants": [
  {
   "name": "One DFS returning heights",
   "code": "class Solution:\n    def diameterOfBinaryTree(self, root):\n        best = 0\n        def height(node):\n            nonlocal best\n            if not node: return 0\n            l = height(node.left)\n            r = height(node.right)\n            best = max(best, l + r)\n            return 1 + max(l, r)\n        height(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "At every node, the longest path THROUGH it is (height of left) + (height of right). One post-order pass computes heights and keeps the best sum seen.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Height of both sides at every node",
   "tag": "Brute force",
   "code": "class Solution:\n    def diameterOfBinaryTree(self, root):\n        def height(node):\n            return 0 if not node else 1 + max(height(node.left), height(node.right))\n        def go(node):\n            if not node: return 0\n            return max(height(node.left) + height(node.right), go(node.left), go(node.right))\n        return go(root)",
   "time": "O(n²)",
   "space": "O(h)",
   "explain": "At each node compute left height + right height from scratch, and take the best node.",
   "frames": [],
   "alt": true
  }
 ]
};
