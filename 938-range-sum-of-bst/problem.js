window.PROBLEM = {
 "id": "938",
 "title": "Range Sum of BST",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "Values between 7 and 15 are 7, 10 and 15 → 32.",
 "idea": "In a binary search tree, if a node is smaller than low then its whole left side is too small; if it is bigger than high its whole right side is too big. Skip those and add the matching nodes.",
 "input": "root = [10,5,15,3,7,null,18], low = 7, high = 15",
 "output": "32",
 "notes": [],
 "best": "In a binary search tree, if a node is smaller than low then its whole left side is too small; if it is bigger than high its whole right side is too big. Skip those and add the matching nodes.",
 "variants": [
  {
   "name": "DFS that skips out-of-range branches",
   "code": "class Solution:\n    def rangeSumBST(self, root, low, high):\n        if not root:\n            return 0\n        if root.val < low:\n            return self.rangeSumBST(root.right, low, high)\n        if root.val > high:\n            return self.rangeSumBST(root.left, low, high)\n        return (root.val + self.rangeSumBST(root.left, low, high)\n                + self.rangeSumBST(root.right, low, high))",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "In a binary search tree, if a node is smaller than low then its whole left side is too small; if it is bigger than high its whole right side is too big. Skip those and add the matching nodes.",
   "frames": []
  }
 ]
};
