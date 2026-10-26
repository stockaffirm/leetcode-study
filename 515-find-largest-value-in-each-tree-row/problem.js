window.PROBLEM = {
 "id": "515",
 "title": "Find Largest Value in Each Tree Row",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
