window.PROBLEM = {
 "id": "235",
 "title": "Lowest Common Ancestor of a Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
