window.PROBLEM = {
 "id": "958",
 "title": "Check Completeness of a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
