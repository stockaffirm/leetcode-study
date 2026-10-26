window.PROBLEM = {
 "id": "1469",
 "title": "Find All The Lonely Nodes",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,2,3,null,4] → 4 is the only child of 2 → [4].",
 "idea": "A node is lonely when its parent has exactly one child. Traverse the tree; whenever a node has only a left child or only a right child, record that child. Return the values in ascending order for a deterministic answer.",
 "input": "root = [1,2,3,null,4]",
 "output": "[4]",
 "notes": [],
 "best": "A node is lonely when its parent has exactly one child. Traverse the tree; whenever a node has only a left child or only a right child, record that child. Return the values in ascending order for a deterministic answer.",
 "variants": [
  {
   "name": "Collect children that have no sibling",
   "code": "class Solution:\n    def getLonelyNodes(self, root):\n        res = []\n        stack = [root]\n        while stack:\n            node = stack.pop()\n            if not node:\n                continue\n            if node.left and not node.right:\n                res.append(node.left.val)\n            if node.right and not node.left:\n                res.append(node.right.val)\n            stack.append(node.left)\n            stack.append(node.right)\n        return sorted(res)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "A node is lonely when its parent has exactly one child. Traverse the tree; whenever a node has only a left child or only a right child, record that child. Return the values in ascending order for a deterministic answer.",
   "frames": []
  }
 ]
};
