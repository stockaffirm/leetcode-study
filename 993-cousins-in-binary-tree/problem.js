window.PROBLEM = {
 "id": "993",
 "title": "Cousins in Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Two nodes of a binary tree are cousins if they are at the same depth but have different parents. Given x and y (unique values), return true if they are cousins. Example: [1,2,3,4], x=4, y=3 → false.",
 "why": "[1,2,3,4]: 4's parent is 2, 3's parent is 1 and both are not at the same depth → false.",
 "idea": "Cousins have the same depth but different parents. Walk the tree (BFS or DFS) recording depth and parent of x and y, then compare.",
 "input": "root = [1,2,3,4], x = 4, y = 3",
 "output": "false",
 "notes": [],
 "best": "Cousins have the same depth but different parents. Walk the tree (BFS or DFS) recording depth and parent of x and y, then compare.",
 "variants": [
  {
   "name": "Same depth, different parent",
   "code": "class Solution:\n    def isCousins(self, root, x, y):\n        info = {}\n        q = deque([(root, None, 0)])\n        while q:\n            node, parent, depth = q.popleft()\n            if node.val in (x, y):\n                info[node.val] = (parent, depth)\n            if node.left:\n                q.append((node.left, node, depth + 1))\n            if node.right:\n                q.append((node.right, node, depth + 1))\n        (px, dx), (py, dy) = info[x], info[y]\n        return dx == dy and px is not py",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Cousins have the same depth but different parents. Walk the tree (BFS or DFS) recording depth and parent of x and y, then compare.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS recording depth and parent",
   "tag": "Alternative",
   "code": "class Solution:\n    def isCousins(self, root, x, y):\n        info = {}\n        def dfs(node, parent, depth):\n            if not node:\n                return\n            if node.val in (x, y):\n                info[node.val] = (parent, depth)\n            dfs(node.left, node, depth + 1)\n            dfs(node.right, node, depth + 1)\n        dfs(root, None, 0)\n        (px, dx), (py, dy) = info[x], info[y]\n        return dx == dy and px is not py",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Recursive walk that remembers the parent and depth of x and y.",
   "frames": [],
   "alt": true
  }
 ]
};
