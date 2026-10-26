window.PROBLEM = {
 "id": "501",
 "title": "Find Mode in Binary Search Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,null,2,2] → 2 appears most often → [2].",
 "idea": "An in-order walk of a BST (Binary Search Tree) visits values in sorted order so equal values are adjacent. Count the current run, track the maximum run length and collect the values reaching it.",
 "input": "root = [1,null,2,2]",
 "output": "[2]",
 "notes": [],
 "best": "An in-order walk of a BST (Binary Search Tree) visits values in sorted order so equal values are adjacent. Count the current run, track the maximum run length and collect the values reaching it.",
 "variants": [
  {
   "name": "In-order traversal counts equal runs",
   "code": "class Solution:\n    def findMode(self, root):\n        best = 0\n        modes = []\n        prev = None\n        run = 0\n        stack = []\n        node = root\n        while stack or node:\n            while node:\n                stack.append(node)\n                node = node.left\n            node = stack.pop()\n            run = run + 1 if node.val == prev else 1\n            prev = node.val\n            if run > best:\n                best, modes = run, [node.val]\n            elif run == best:\n                modes.append(node.val)\n            node = node.right\n        return sorted(modes)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "An in-order walk of a BST (Binary Search Tree) visits values in sorted order so equal values are adjacent. Count the current run, track the maximum run length and collect the values reaching it.",
   "frames": []
  }
 ]
};
