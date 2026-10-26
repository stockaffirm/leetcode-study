window.PROBLEM = {
 "id": "513",
 "title": "Find Bottom Left Tree Value",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
