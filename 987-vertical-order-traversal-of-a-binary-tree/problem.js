window.PROBLEM = {
 "id": "987",
 "title": "Vertical Order Traversal of a Binary Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "Give each node coordinates (row, column); list the values column by column from left to right, top to bottom within a column (equal positions sorted by value).",
 "idea": "Traverse the tree recording (column, row, value) — column −1 for a left child, +1 for a right child, row +1 per level. Sort all triples and group by column.",
 "input": "[3,9,20,null,null,15,7]",
 "output": "[[9],[3,15],[20],[7]]",
 "notes": [],
 "best": "Traverse the tree recording (column, row, value) — column −1 for a left child, +1 for a right child, row +1 per level. Sort all triples and group by column.",
 "variants": [
  {
   "name": "Collect (column, row, value) and sort",
   "code": "class Solution:\n    def verticalTraversal(self, root):\n        nodes = []\n        q = deque([(root, 0, 0)])\n        while q:\n            node, row, col = q.popleft()\n            nodes.append((col, row, node.val))\n            if node.left: q.append((node.left, row + 1, col - 1))\n            if node.right: q.append((node.right, row + 1, col + 1))\n        nodes.sort()\n        res, last = [], None\n        for col, row, val in nodes:\n            if col != last:\n                res.append([])\n                last = col\n            res[-1].append(val)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Traverse the tree recording (column, row, value) — column −1 for a left child, +1 for a right child, row +1 per level. Sort all triples and group by column.",
   "frames": []
  }
 ]
};
