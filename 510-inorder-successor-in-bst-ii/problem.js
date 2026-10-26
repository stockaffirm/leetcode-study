window.PROBLEM = {
 "id": "510",
 "title": "Inorder Successor in BST II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Every node of a binary search tree knows its parent. Given a node, return its in-order successor (the node with the next larger value) or null. Example: tree [2,1,3], node 1 → the node 2. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Go to the root and search in order",
   "tag": "Brute force",
   "code": "class Solution:\n    def inorderSuccessor(self, node):\n        root = node\n        while root.parent:\n            root = root.parent\n        order = []\n        def inorder(n):\n            if n:\n                inorder(n.left)\n                order.append(n)\n                inorder(n.right)\n        inorder(root)\n        i = order.index(node)\n        return order[i + 1] if i + 1 < len(order) else None",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Climb to the root, list the nodes in order and take the one after the given node.",
   "frames": [],
   "alt": true
  }
 ]
};
