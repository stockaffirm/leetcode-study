window.PROBLEM = {
 "id": "515",
 "title": "Find Largest Value in Each Tree Row",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return the largest value on each row (level) of a binary tree, from the top row down. Example: [1,3,2,5,3,null,9] → [1,3,9]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Return the largest value on each level of a binary tree.",
 "idea": "Process the tree one level at a time and take the max of each level.",
 "input": "[1,3,2,5,3,null,9]",
 "output": "[1,3,9]",
 "notes": [],
 "best": "Process the tree one level at a time and take the max of each level.",
 "variants": [
  {
   "name": "BFS level by level",
   "code": "class Solution:\n    def largestValues(self, root):\n        res = []\n        q = deque([root] if root else [])\n        while q:\n            res.append(max(node.val for node in q))\n            for _ in range(len(q)):\n                node = q.popleft()\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n        return res",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Process the tree one level at a time and take the max of each level.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with depth",
   "tag": "Alternative",
   "code": "class Solution:\n    def largestValues(self, root):\n        res = []\n        def dfs(node, d):\n            if not node: return\n            if d == len(res): res.append(node.val)\n            else: res[d] = max(res[d], node.val)\n            dfs(node.left, d + 1)\n            dfs(node.right, d + 1)\n        dfs(root, 0)\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Depth-first search keeping the best value per depth in a list.",
   "frames": [],
   "alt": true
  }
 ]
};
