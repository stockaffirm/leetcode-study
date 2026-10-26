window.PROBLEM = {
 "id": "617",
 "title": "Merge Two Binary Trees",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "You are given two binary trees (boxes called nodes with up to two children). Lay one on top of the other to merge them: wherever BOTH have a node, the merged node holds the SUM of the two values; where only one has a node, use that node. Return the merged tree. Example: [1,3,2,5] and [2,1,3,null,4,null,7] → [3,4,5,5,4,null,7]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Lay one tree on top of another: where both have a node, add their values; otherwise keep whichever exists.",
 "idea": "Recursively: if one node is missing return the other; otherwise add the values and merge the left and right children the same way.",
 "input": "[1,3,2,5] + [2,1,3,null,4,null,7]",
 "output": "[3,4,5,5,4,null,7]",
 "notes": [],
 "best": "Recursively: if one node is missing return the other; otherwise add the values and merge the left and right children the same way.",
 "variants": [
  {
   "name": "Recursion: add overlapping nodes",
   "code": "class Solution:\n    def mergeTrees(self, root1, root2):\n        if not root1: return root2\n        if not root2: return root1\n        root1.val += root2.val\n        root1.left = self.mergeTrees(root1.left, root2.left)\n        root1.right = self.mergeTrees(root1.right, root2.right)\n        return root1",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Recursively: if one node is missing return the other; otherwise add the values and merge the left and right children the same way.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative with a stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def mergeTrees(self, root1, root2):\n        if not root1: return root2\n        st = [(root1, root2)]\n        while st:\n            a, b = st.pop()\n            if not b: continue\n            a.val += b.val\n            if not a.left: a.left = b.left\n            else: st.append((a.left, b.left))\n            if not a.right: a.right = b.right\n            else: st.append((a.right, b.right))\n        return root1",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Merge pair by pair using an explicit stack.",
   "frames": [],
   "alt": true
  }
 ]
};
