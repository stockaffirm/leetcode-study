window.PROBLEM = {
 "id": "1609",
 "title": "Even Odd Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "A binary tree is Even-Odd if level 0 (the root) holds odd values in strictly increasing order from left to right, level 1 holds even values in strictly decreasing order, level 2 odd increasing again, and so on. Return true if the tree is Even-Odd. Example: [1,10,4,3,null,7,9,12,8,6,null,null,2] → true. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "[1,10,4,3,null,7,9,12,8,6,null,null,2] is an even-odd tree → true.",
 "idea": "Level 0 (even) must hold odd values in strictly increasing order; level 1 must hold even values in strictly decreasing order; and so on. Check each level during a BFS (Breadth-First Search).",
 "input": "root = [1,10,4,3,null,7,9,12,8,6,null,null,2]",
 "output": "true",
 "notes": [],
 "best": "Level 0 (even) must hold odd values in strictly increasing order; level 1 must hold even values in strictly decreasing order; and so on. Check each level during a BFS (Breadth-First Search).",
 "variants": [
  {
   "name": "BFS checking each level's parity and order",
   "code": "class Solution:\n    def isEvenOddTree(self, root):\n        q = deque([root])\n        level = 0\n        while q:\n            prev = None\n            for _ in range(len(q)):\n                node = q.popleft()\n                v = node.val\n                if level % 2 == 0:\n                    if v % 2 == 0 or (prev is not None and v <= prev):\n                        return False\n                else:\n                    if v % 2 == 1 or (prev is not None and v >= prev):\n                        return False\n                prev = v\n                if node.left:\n                    q.append(node.left)\n                if node.right:\n                    q.append(node.right)\n            level += 1\n        return True",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Level 0 (even) must hold odd values in strictly increasing order; level 1 must hold even values in strictly decreasing order; and so on. Check each level during a BFS (Breadth-First Search).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS storing the last value per level",
   "tag": "Alternative",
   "code": "class Solution:\n    def isEvenOddTree(self, root):\n        last = {}\n        def dfs(node, d):\n            if not node:\n                return True\n            v = node.val\n            if d % 2 == 0:\n                if v % 2 == 0:\n                    return False\n                if d in last and v <= last[d]:\n                    return False\n            else:\n                if v % 2 == 1:\n                    return False\n                if d in last and v >= last[d]:\n                    return False\n            last[d] = v\n            return dfs(node.left, d + 1) and dfs(node.right, d + 1)\n        return dfs(root, 0)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Visit left to right with a dict level → last value.",
   "frames": [],
   "alt": true
  }
 ]
};
