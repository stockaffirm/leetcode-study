window.PROBLEM = {
 "id": "513",
 "title": "Find Bottom Left Tree Value",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return the value of the leftmost node in the last row of a binary tree. Example: [2,1,3] → 1.",
 "why": "[2,1,3] → the bottom row's leftmost value is 1.",
 "idea": "Do a level-order traversal pushing the right child before the left child. The last node taken from the queue is the leftmost node of the last level.",
 "input": "root = [2,1,3]",
 "output": "1",
 "notes": [],
 "best": "Do a level-order traversal pushing the right child before the left child. The last node taken from the queue is the leftmost node of the last level.",
 "variants": [
  {
   "name": "BFS right-to-left; the last node is the answer",
   "code": "class Solution:\n    def findBottomLeftValue(self, root):\n        q = deque([root])\n        node = root\n        while q:\n            node = q.popleft()\n            if node.right:\n                q.append(node.right)\n            if node.left:\n                q.append(node.left)\n        return node.val",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Do a level-order traversal pushing the right child before the left child. The last node taken from the queue is the leftmost node of the last level.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS tracking depth",
   "tag": "Alternative",
   "code": "class Solution:\n    def findBottomLeftValue(self, root):\n        best = [-1, None]\n        def dfs(node, d):\n            if not node:\n                return\n            if d > best[0]:\n                best[0], best[1] = d, node.val\n            dfs(node.left, d + 1)\n            dfs(node.right, d + 1)\n        dfs(root, 0)\n        return best[1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "The first node found at the greatest depth (left first) is the answer.",
   "frames": [],
   "alt": true
  }
 ]
};
