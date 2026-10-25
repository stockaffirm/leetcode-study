window.PROBLEM = {
 "id": "1038",
 "title": "Binary Search Tree to Greater Sum Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given a binary search tree (left < node < right), change every node's value to its original value plus the sum of all original values greater than it. Return the tree. Example: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8] → [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Change every value of a binary search tree to (its value + the sum of all bigger values).",
 "idea": "A reverse in-order walk (right, node, left) visits values from biggest to smallest. Keep a running total and add it to each node as you pass.",
 "input": "[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]",
 "output": "[30,36,21,36,35,26,15,...]",
 "notes": [],
 "best": "A reverse in-order walk (right, node, left) visits values from biggest to smallest. Keep a running total and add it to each node as you pass.",
 "variants": [
  {
   "name": "Reverse in-order with a running sum",
   "code": "class Solution:\n    def bstToGst(self, root):\n        total = 0\n        def go(node):\n            nonlocal total\n            if not node: return\n            go(node.right)\n            total += node.val\n            node.val = total\n            go(node.left)\n        go(root)\n        return root",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "A reverse in-order walk (right, node, left) visits values from biggest to smallest. Keep a running total and add it to each node as you pass.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative reverse in-order",
   "tag": "Alternative",
   "code": "class Solution:\n    def bstToGst(self, root):\n        total = 0\n        st, node = [], root\n        while st or node:\n            while node:\n                st.append(node)\n                node = node.right\n            node = st.pop()\n            total += node.val\n            node.val = total\n            node = node.left\n        return root",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Same walk with an explicit stack.",
   "frames": [],
   "alt": true
  }
 ]
};
