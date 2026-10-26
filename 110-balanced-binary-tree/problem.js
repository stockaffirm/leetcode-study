window.PROBLEM = {
 "id": "110",
 "title": "Balanced Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Is a binary tree height-balanced — meaning that for every node, the heights of its left and right subtrees differ by at most 1? Example: [3,9,20,null,null,15,7] → True; [1,2,2,3,3,null,null,4,4] → False. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Is a binary tree height-balanced (the two subtrees of every node differ in height by at most 1)?",
 "idea": "Compute heights bottom-up; return −1 as soon as any subtree is unbalanced so the answer propagates upwards.",
 "input": "[3,9,20,null,null,15,7]",
 "output": "True",
 "notes": [],
 "best": "Compute heights bottom-up; return −1 as soon as any subtree is unbalanced so the answer propagates upwards.",
 "variants": [
  {
   "name": "Height with an early −1",
   "code": "class Solution:\n    def isBalanced(self, root):\n        def height(n):\n            if not n: return 0\n            l = height(n.left)\n            if l < 0: return -1\n            r = height(n.right)\n            if r < 0 or abs(l - r) > 1: return -1\n            return 1 + max(l, r)\n        return height(root) >= 0",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Compute heights bottom-up; return −1 as soon as any subtree is unbalanced so the answer propagates upwards.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down heights",
   "tag": "Alternative",
   "code": "class Solution:\n    def isBalanced(self, root):\n        def height(n):\n            return 0 if not n else 1 + max(height(n.left), height(n.right))\n        if not root: return True\n        return abs(height(root.left) - height(root.right)) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)",
   "time": "O(n log n)",
   "space": "O(h)",
   "explain": "At every node compute both heights separately and recurse into the children.",
   "frames": [],
   "alt": true
  }
 ]
};
