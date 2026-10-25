window.PROBLEM = {
 "id": "314",
 "title": "Binary Tree Vertical Order Traversal",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "For each node of a binary tree define a column: the root is column 0, a left child is one column to the left, a right child one to the right. Return the node values column by column from left to right; inside a column go top to bottom, and left to right in the same row. Example: [3,9,20,null,null,15,7] → [[9],[3,15],[20],[7]]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "List a tree's values column by column from left to right; inside a column go top to bottom, and left to right on the same row.",
 "idea": "BFS with each node's column (−1 for a left child, +1 for a right child) and append values to a dictionary by column; then output columns in order.",
 "input": "[3,9,20,null,null,15,7]",
 "output": "[[9],[3,15],[20],[7]]",
 "notes": [],
 "best": "BFS with each node's column (−1 for a left child, +1 for a right child) and append values to a dictionary by column; then output columns in order.",
 "variants": [
  {
   "name": "BFS with a column number",
   "code": "class Solution:\n    def verticalOrder(self, root):\n        if not root: return []\n        cols = defaultdict(list)\n        q = deque([(root, 0)])\n        while q:\n            node, c = q.popleft()\n            cols[c].append(node.val)\n            if node.left: q.append((node.left, c - 1))\n            if node.right: q.append((node.right, c + 1))\n        return [cols[c] for c in sorted(cols)]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "BFS with each node's column (−1 for a left child, +1 for a right child) and append values to a dictionary by column; then output columns in order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with rows, stable sort",
   "tag": "Alternative",
   "code": "class Solution:\n    def verticalOrder(self, root):\n        cols = defaultdict(list)\n        def go(node, row, col):\n            if not node: return\n            cols[col].append((row, node.val))\n            go(node.left, row + 1, col - 1)\n            go(node.right, row + 1, col + 1)\n        go(root, 0, 0)\n        return [[v for _, v in sorted(cols[c], key=lambda t: t[0])] for c in sorted(cols)]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Depth-first search collecting (row, value) per column and sorting by row.",
   "frames": [],
   "alt": true
  }
 ]
};
