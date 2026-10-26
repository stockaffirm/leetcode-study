window.PROBLEM = {
 "id": "623",
 "title": "Add One Row to Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[4,2,6,3,1,5], val 1, depth 2 → a new row of 1s under the root.",
 "idea": "At depth 1 make a new root whose left child is the old tree. Otherwise find the nodes at depth − 1 with BFS (Breadth-First Search); for each, insert val-nodes as its new left and right children and hang the old children below them.",
 "input": "root = [4,2,6,3,1,5], val = 1, depth = 2",
 "output": "[4, 1, 1, 2, None, None, 6, 3, 1, 5]",
 "notes": [],
 "best": "At depth 1 make a new root whose left child is the old tree. Otherwise find the nodes at depth − 1 with BFS (Breadth-First Search); for each, insert val-nodes as its new left and right children and hang the old children below them.",
 "variants": [
  {
   "name": "Insert level by level",
   "code": "class Solution:\n    def addOneRow(self, root, val, depth):\n        if depth == 1:\n            return TreeNode(val, root)\n        level = [root]\n        for _ in range(depth - 2):\n            level = [c for node in level for c in (node.left, node.right) if c]\n        for node in level:\n            node.left = TreeNode(val, node.left)\n            node.right = TreeNode(val, None, node.right)\n        return root",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "At depth 1 make a new root whose left child is the old tree. Otherwise find the nodes at depth − 1 with BFS (Breadth-First Search); for each, insert val-nodes as its new left and right children and hang the old children below them.",
   "frames": []
  }
 ]
};
