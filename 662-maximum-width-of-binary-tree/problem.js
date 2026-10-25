window.PROBLEM = {
 "id": "662",
 "title": "Maximum Width of Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "The width of a level of a binary tree is the distance between its leftmost and rightmost nodes, counting the empty slots between them as if the tree were complete. Return the maximum width over all levels. Example: [1,3,2,5,3,null,9] → 4. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "The widest level is the third one: positions 0 and 3 (counting the empty slot between) → width 4.",
 "idea": "Number the nodes like a heap (children of i are 2i and 2i+1), as if the tree were complete. The width of a level is last index − first index + 1. Subtract the first index of the level to keep numbers small.",
 "input": "root = [1,3,2,5,3,null,9]",
 "output": "4",
 "notes": [],
 "best": "Number the nodes like a heap (children of i are 2i and 2i+1), as if the tree were complete. The width of a level is last index − first index + 1. Subtract the first index of the level to keep numbers small.",
 "variants": [
  {
   "name": "BFS with heap-style indices",
   "code": "class Solution:\n    def widthOfBinaryTree(self, root):\n        best = 0\n        q = deque([(root, 0)])\n        while q:\n            first = q[0][1]\n            last = 0\n            for _ in range(len(q)):\n                node, i = q.popleft()\n                i -= first\n                last = i\n                if node.left:\n                    q.append((node.left, 2 * i))\n                if node.right:\n                    q.append((node.right, 2 * i + 1))\n            best = max(best, last + 1)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Number the nodes like a heap (children of i are 2i and 2i+1), as if the tree were complete. The width of a level is last index − first index + 1. Subtract the first index of the level to keep numbers small.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with the first index per depth",
   "tag": "Alternative",
   "code": "class Solution:\n    def widthOfBinaryTree(self, root):\n        first = {}\n        best = 0\n        def dfs(node, depth, i):\n            nonlocal best\n            if not node:\n                return\n            first.setdefault(depth, i)\n            best = max(best, i - first[depth] + 1)\n            dfs(node.left, depth + 1, 2 * i)\n            dfs(node.right, depth + 1, 2 * i + 1)\n        dfs(root, 0, 0)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Remember the index of the first node seen at every depth and compare later ones against it.",
   "frames": [],
   "alt": true
  }
 ]
};
