window.PROBLEM = {
 "id": "993",
 "title": "Cousins in Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,2,3,4]: 4's parent is 2, 3's parent is 1 and both are not at the same depth → false.",
 "idea": "Cousins have the same depth but different parents. Walk the tree (BFS (Breadth-First Search) or DFS (Depth-First Search)) recording depth and parent of x and y, then compare.",
 "input": "root = [1,2,3,4], x = 4, y = 3",
 "output": "false",
 "notes": [],
 "best": "Cousins have the same depth but different parents. Walk the tree (BFS (Breadth-First Search) or DFS (Depth-First Search)) recording depth and parent of x and y, then compare.",
 "variants": [
  {
   "name": "Same depth, different parent",
   "code": "class Solution:\n    def isCousins(self, root, x, y):\n        info = {}\n        q = deque([(root, None, 0)])\n        while q:\n            node, parent, depth = q.popleft()\n            if node.val in (x, y):\n                info[node.val] = (parent, depth)\n            if node.left:\n                q.append((node.left, node, depth + 1))\n            if node.right:\n                q.append((node.right, node, depth + 1))\n        (px, dx), (py, dy) = info[x], info[y]\n        return dx == dy and px is not py",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Cousins have the same depth but different parents. Walk the tree (BFS (Breadth-First Search) or DFS (Depth-First Search)) recording depth and parent of x and y, then compare.",
   "frames": []
  }
 ]
};
