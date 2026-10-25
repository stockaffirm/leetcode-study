window.PROBLEM = {
 "id": "938",
 "title": "Range Sum of BST",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Given a binary search tree and two numbers low and high, return the sum of the values of all nodes that lie between low and high (both included). Example: tree [10,5,15,3,7,null,18], low 7, high 15 → 32 (7 + 10 + 15). (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def rangeSumBST(self, root, low, high):\n        total = 0\n        stack = [root]\n        while stack:\n            node = stack.pop()\n            if not node:\n                continue\n            if low <= node.val <= high:\n                total += node.val\n            if node.val > low:\n                stack.append(node.left)\n            if node.val < high:\n                stack.append(node.right)\n        return total",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "The same pruning with an explicit stack instead of recursion.",
   "frames": [],
   "alt": true
  }
 ]
};
