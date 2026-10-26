window.PROBLEM = {
 "id": "235",
 "title": "Lowest Common Ancestor of a Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "A binary search tree has smaller values on the left of every node and larger values on the right. Given its root and two of its nodes p and q, return their lowest common ancestor: the lowest node that has both of them in its subtree (a node counts as in its own subtree). Example: tree [6,2,8,0,4,7,9,null,null,3,5], p=2, q=8 → 6; p=2, q=4 → 2. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "In a binary search tree (smaller on the left, bigger on the right), find the lowest node that is an ancestor of both p and q.",
 "idea": "Start at the root. If both values are smaller go left, if both are bigger go right; otherwise this node splits them (or is one of them) and is the answer.",
 "input": "tree [6,2,8,0,4,7,9,null,null,3,5], p=2, q=8",
 "output": "6",
 "notes": [],
 "best": "Start at the root. If both values are smaller go left, if both are bigger go right; otherwise this node splits them (or is one of them) and is the answer.",
 "variants": [
  {
   "name": "Walk down using the BST order",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        node = root\n        while node:\n            if p.val < node.val and q.val < node.val: node = node.left\n            elif p.val > node.val and q.val > node.val: node = node.right\n            else: return node",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "Start at the root. If both values are smaller go left, if both are bigger go right; otherwise this node splits them (or is one of them) and is the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        if p.val < root.val and q.val < root.val: return self.lowestCommonAncestor(root.left, p, q)\n        if p.val > root.val and q.val > root.val: return self.lowestCommonAncestor(root.right, p, q)\n        return root",
   "time": "O(h)",
   "space": "O(h)",
   "explain": "The same descent written recursively.",
   "frames": [],
   "alt": true
  }
 ]
};
