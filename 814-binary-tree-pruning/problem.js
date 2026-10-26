window.PROBLEM = {
 "id": "814",
 "title": "Binary Tree Pruning",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "The right-most 0 has no 1 below it, so it is removed; the other branches contain a 1 and stay.",
 "idea": "Prune the children first. Then a node is removed (return None) if it is 0 and has no children left; otherwise it stays.",
 "input": "root = [1,null,0,0,1]",
 "output": "[1,null,0,null,1]",
 "notes": [],
 "best": "Prune the children first. Then a node is removed (return None) if it is 0 and has no children left; otherwise it stays.",
 "variants": [
  {
   "name": "Post-order cutting",
   "code": "class Solution:\n    def pruneTree(self, root):\n        if not root:\n            return None\n        root.left = self.pruneTree(root.left)\n        root.right = self.pruneTree(root.right)\n        if not root.left and not root.right and root.val == 0:\n            return None\n        return root",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Prune the children first. Then a node is removed (return None) if it is 0 and has no children left; otherwise it stays.",
   "frames": []
  }
 ]
};
