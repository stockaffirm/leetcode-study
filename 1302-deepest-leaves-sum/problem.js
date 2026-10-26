window.PROBLEM = {
 "id": "1302",
 "title": "Deepest Leaves Sum",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,2,3,4,5,null,6,7,null,null,null,null,8]: the deepest level holds 7 and 8 → 15.",
 "idea": "Do a level-order traversal and keep the sum of the level you just finished; the last level's sum is the answer.",
 "input": "root = [1,2,3,4,5,null,6,7,null,null,null,null,8]",
 "output": "15",
 "notes": [],
 "best": "Do a level-order traversal and keep the sum of the level you just finished; the last level's sum is the answer.",
 "variants": [
  {
   "name": "Sum the last BFS level",
   "code": "class Solution:\n    def deepestLeavesSum(self, root):\n        q = deque([root])\n        total = 0\n        while q:\n            total = 0\n            for _ in range(len(q)):\n                node = q.popleft()\n                total += node.val\n                if node.left:\n                    q.append(node.left)\n                if node.right:\n                    q.append(node.right)\n        return total",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Do a level-order traversal and keep the sum of the level you just finished; the last level's sum is the answer.",
   "frames": []
  }
 ]
};
