window.PROBLEM = {
 "id": "107",
 "title": "Binary Tree Level Order Traversal II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return the values of a binary tree level by level from the bottom level to the root (each level left to right). Example: [3,9,20,null,null,15,7] → [[15,7],[9,20],[3]].",
 "why": "[3,9,20,null,null,15,7] → levels [3],[9,20],[15,7] listed bottom-up: [[15,7],[9,20],[3]].",
 "idea": "Do an ordinary level-order BFS (Breadth-First Search) and reverse the list of levels at the end.",
 "input": "root = [3,9,20,null,null,15,7]",
 "output": "[[15, 7], [9, 20], [3]]",
 "notes": [],
 "best": "Do an ordinary level-order BFS (Breadth-First Search) and reverse the list of levels at the end.",
 "variants": [
  {
   "name": "BFS levels, reversed",
   "code": "class Solution:\n    def levelOrderBottom(self, root):\n        res = []\n        q = deque([root] if root else [])\n        while q:\n            level = []\n            for _ in range(len(q)):\n                node = q.popleft()\n                level.append(node.val)\n                if node.left:\n                    q.append(node.left)\n                if node.right:\n                    q.append(node.right)\n            res.append(level)\n        return res[::-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Do an ordinary level-order BFS (Breadth-First Search) and reverse the list of levels at the end.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS filling levels",
   "tag": "Alternative",
   "code": "class Solution:\n    def levelOrderBottom(self, root):\n        levels = []\n        def dfs(node, d):\n            if not node:\n                return\n            if d == len(levels):\n                levels.append([])\n            levels[d].append(node.val)\n            dfs(node.left, d + 1)\n            dfs(node.right, d + 1)\n        dfs(root, 0)\n        return levels[::-1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Recurse with the depth and append each value to its level list; reverse at the end.",
   "frames": [],
   "alt": true
  }
 ]
};
