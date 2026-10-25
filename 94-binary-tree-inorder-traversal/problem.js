window.PROBLEM = {
 "id": "94",
 "title": "Binary Tree Inorder Traversal",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Return the in-order traversal of a binary tree (left subtree, node, right subtree), preferably without recursion. Example: [1,null,2,3] → [1,3,2]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Tree 1 → right child 2 → left child 3. In-order visits left, node, right: 1, 3, 2.",
 "idea": "Go as far left as possible, pushing nodes on a stack. Pop one, record it, then continue with its right child.",
 "input": "root = [1,null,2,3]",
 "output": "[1, 3, 2]",
 "notes": [],
 "best": "Go as far left as possible, pushing nodes on a stack. Pop one, record it, then continue with its right child.",
 "variants": [
  {
   "name": "Iterative with a stack",
   "code": "class Solution:\n    def inorderTraversal(self, root):\n        res, stack = [], []\n        cur = root\n        while cur or stack:\n            while cur:\n                stack.append(cur)\n                cur = cur.left\n            cur = stack.pop()\n            res.append(cur.val)\n            cur = cur.right\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Go as far left as possible, pushing nodes on a stack. Pop one, record it, then continue with its right child.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def inorderTraversal(self, root):\n        res = []\n        def go(node):\n            if node:\n                go(node.left)\n                res.append(node.val)\n                go(node.right)\n        go(root)\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Left subtree, then the node, then the right subtree.",
   "frames": [],
   "alt": true
  }
 ]
};
