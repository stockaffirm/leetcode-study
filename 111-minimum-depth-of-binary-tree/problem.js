window.PROBLEM = {
 "id": "111",
 "title": "Minimum Depth of Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Return the minimum depth of a binary tree: the number of nodes on the shortest path from the root down to a LEAF. Example: [3,9,20,null,null,15,7] → 2. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "The closest leaf is 9, two nodes from the root → depth 2.",
 "idea": "Level-order search: the first leaf we meet is the closest one, so its level is the minimum depth.",
 "input": "root = [3,9,20,null,null,15,7]",
 "output": "2",
 "notes": [],
 "best": "Level-order search: the first leaf we meet is the closest one, so its level is the minimum depth.",
 "variants": [
  {
   "name": "BFS to the first leaf",
   "code": "class Solution:\n    def minDepth(self, root):\n        if not root:\n            return 0\n        q = deque([(root, 1)])\n        while q:\n            node, d = q.popleft()\n            if not node.left and not node.right:\n                return d\n            if node.left:\n                q.append((node.left, d + 1))\n            if node.right:\n                q.append((node.right, d + 1))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Level-order search: the first leaf we meet is the closest one, so its level is the minimum depth.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def minDepth(self, root):\n        if not root:\n            return 0\n        if not root.left:\n            return 1 + self.minDepth(root.right)\n        if not root.right:\n            return 1 + self.minDepth(root.left)\n        return 1 + min(self.minDepth(root.left), self.minDepth(root.right))",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "A node with one child must use that side; otherwise take the smaller depth.",
   "frames": [],
   "alt": true
  }
 ]
};
