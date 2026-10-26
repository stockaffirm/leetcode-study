window.PROBLEM = {
 "id": "510",
 "title": "Inorder Successor in BST II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "In the tree 2 with children 1 and 3, the successor of the node 1 is its parent 2.",
 "idea": "If the node has a right child, the successor is the leftmost node of that subtree. Otherwise climb up while we are a right child; the first ancestor reached from a left child is the successor (none if we reach the root).",
 "input": "node = 1 in the tree [2,1,3] (nodes know their parent)",
 "output": "2",
 "notes": [],
 "best": "If the node has a right child, the successor is the leftmost node of that subtree. Otherwise climb up while we are a right child; the first ancestor reached from a left child is the successor (none if we reach the root).",
 "variants": [
  {
   "name": "Use the parent pointers",
   "code": "class Solution:\n    def inorderSuccessor(self, node):\n        if node.right:\n            node = node.right\n            while node.left:\n                node = node.left\n            return node\n        while node.parent and node is node.parent.right:\n            node = node.parent\n        return node.parent",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "If the node has a right child, the successor is the leftmost node of that subtree. Otherwise climb up while we are a right child; the first ancestor reached from a left child is the successor (none if we reach the root).",
   "frames": []
  }
 ]
};
