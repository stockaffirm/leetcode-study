window.PROBLEM = {
 "id": "314",
 "title": "Binary Tree Vertical Order Traversal",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
