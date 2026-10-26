window.PROBLEM = {
 "id": "572",
 "title": "Subtree of Another Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "The tree [3,4,5,1,2] contains the subtree [4,1,2] at its left child → true.",
 "idea": "For every node of the big tree test whether the tree starting there is identical to subRoot (same shape and values).",
 "input": "root = [3,4,5,1,2], subRoot = [4,1,2]",
 "output": "true",
 "notes": [],
 "best": "For every node of the big tree test whether the tree starting there is identical to subRoot (same shape and values).",
 "variants": [
  {
   "name": "Compare at every node",
   "code": "class Solution:\n    def isSubtree(self, root, subRoot):\n        def same(a, b):\n            if not a or not b:\n                return a is b\n            return a.val == b.val and same(a.left, b.left) and same(a.right, b.right)\n        if not root:\n            return False\n        return same(root, subRoot) or self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)",
   "time": "O(m·n)",
   "space": "O(h)",
   "explain": "For every node of the big tree test whether the tree starting there is identical to subRoot (same shape and values).",
   "frames": []
  }
 ]
};
