window.PROBLEM = {
 "id": "958",
 "title": "Check Completeness of a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "A binary tree is complete if every level is full except possibly the last, and the last level is filled from the left with no gaps. Return true if the tree is complete. Example: [1,2,3,4,5,6] → true; [1,2,3,4,5,null,7] → false. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "[1,2,3,4,5,6] fills every level left to right → complete. In [1,2,3,4,5,null,7] the missing node comes before 7 → not complete.",
 "idea": "Do a level-order walk and also queue the missing children as None. After the first None, every remaining entry must be None too; a real node after a gap means the tree is not complete.",
 "input": "root = [1,2,3,4,5,6]",
 "output": "true",
 "notes": [],
 "best": "Do a level-order walk and also queue the missing children as None. After the first None, every remaining entry must be None too; a real node after a gap means the tree is not complete.",
 "variants": [
  {
   "name": "BFS: no node after the first gap",
   "code": "class Solution:\n    def isCompleteTree(self, root):\n        q = deque([root])\n        seen_none = False\n        while q:\n            node = q.popleft()\n            if node is None:\n                seen_none = True\n            else:\n                if seen_none:\n                    return False\n                q.append(node.left)\n                q.append(node.right)\n        return True",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Do a level-order walk and also queue the missing children as None. After the first None, every remaining entry must be None too; a real node after a gap means the tree is not complete.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Heap-style positions",
   "tag": "Alternative",
   "code": "class Solution:\n    def isCompleteTree(self, root):\n        self.cnt = 0\n        self.mx = 0\n        def dfs(node, i):\n            if not node:\n                return\n            self.cnt += 1\n            self.mx = max(self.mx, i)\n            dfs(node.left, 2 * i)\n            dfs(node.right, 2 * i + 1)\n        dfs(root, 1)\n        return self.cnt == self.mx",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Number the nodes like a heap (children of i are 2i and 2i+1). A complete tree uses positions 1…n with no holes.",
   "frames": [],
   "alt": true
  }
 ]
};
