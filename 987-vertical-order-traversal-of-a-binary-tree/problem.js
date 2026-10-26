window.PROBLEM = {
 "id": "987",
 "title": "Vertical Order Traversal of a Binary Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "For each node of a binary tree give its (row, column): the root is (0,0); a left child is (row+1, column−1) and a right child (row+1, column+1). Go through the columns from left to right and list the node values of each column from top to bottom; nodes in the same row and column are ordered by value. Example: [3,9,20,null,null,15,7] → [[9],[3,15],[20],[7]]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS, then sort per column",
   "tag": "Alternative",
   "code": "class Solution:\n    def verticalTraversal(self, root):\n        cols = defaultdict(list)\n        def go(node, row, col):\n            if not node: return\n            cols[col].append((row, node.val))\n            go(node.left, row + 1, col - 1)\n            go(node.right, row + 1, col + 1)\n        go(root, 0, 0)\n        return [[v for _, v in sorted(cols[c])] for c in sorted(cols)]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Depth-first collection of (row, value) per column, sorted at the end.",
   "frames": [],
   "alt": true
  }
 ]
};
