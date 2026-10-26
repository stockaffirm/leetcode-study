window.PROBLEM = {
 "id": "617",
 "title": "Merge Two Binary Trees",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
