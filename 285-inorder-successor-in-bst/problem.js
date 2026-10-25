window.PROBLEM = {
 "id": "285",
 "title": "Inorder Successor in BST",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "In a binary search tree, return the in-order successor of the node p: the node with the smallest value greater than p's value (null if none). Example: tree [2,1,3], p = 1 → the node 2. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "In the tree 2 with children 1 and 3, the successor of 1 is 2.",
 "idea": "The successor of p is the smallest value larger than p. Walk down from the root: if p is smaller than the current node, this node is a candidate and we go left; otherwise go right.",
 "input": "root = [2,1,3], p = 1",
 "output": "2",
 "notes": [],
 "best": "The successor of p is the smallest value larger than p. Walk down from the root: if p is smaller than the current node, this node is a candidate and we go left; otherwise go right.",
 "variants": [
  {
   "name": "Walk down, remember the last left turn",
   "code": "class Solution:\n    def inorderSuccessor(self, root, p):\n        succ = None\n        cur = root\n        while cur:\n            if p.val < cur.val:\n                succ = cur\n                cur = cur.left\n            else:\n                cur = cur.right\n        return succ",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "The successor of p is the smallest value larger than p. Walk down from the root: if p is smaller than the current node, this node is a candidate and we go left; otherwise go right.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Search the in-order list",
   "tag": "Brute force",
   "code": "class Solution:\n    def inorderSuccessor(self, root, p):\n        order = []\n        def inorder(n):\n            if n:\n                inorder(n.left)\n                order.append(n)\n                inorder(n.right)\n        inorder(root)\n        i = order.index(p)\n        return order[i + 1] if i + 1 < len(order) else None",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Collect all nodes in order and return the one after p.",
   "frames": [],
   "alt": true
  }
 ]
};
