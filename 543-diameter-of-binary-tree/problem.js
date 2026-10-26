window.PROBLEM = {
 "id": "543",
 "title": "Diameter of Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
