window.PROBLEM = {
 "id": "113",
 "title": "Path Sum II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return all root-to-leaf paths of a binary tree whose node values add up to targetSum, as lists of values. Example: tree [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum 22 → [[5,4,11,2],[5,8,4,5]]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Two root-to-leaf paths add up to 22: 5→4→11→2 and 5→8→4→5.",
 "idea": "Walk down from the root, keeping the path and the remaining sum. At a leaf with remaining sum 0, copy the path into the answer. Remove the node when going back up.",
 "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
 "output": "[[5,4,11,2],[5,8,4,5]]",
 "notes": [],
 "best": "Walk down from the root, keeping the path and the remaining sum. At a leaf with remaining sum 0, copy the path into the answer. Remove the node when going back up.",
 "variants": [
  {
   "name": "DFS keeping the current path",
   "code": "class Solution:\n    def pathSum(self, root, targetSum):\n        res, path = [], []\n        def dfs(node, left):\n            if not node:\n                return\n            path.append(node.val)\n            left -= node.val\n            if not node.left and not node.right and left == 0:\n                res.append(path[:])\n            dfs(node.left, left)\n            dfs(node.right, left)\n            path.pop()\n        dfs(root, targetSum)\n        return res",
   "time": "O(n²)",
   "space": "O(h)",
   "explain": "Walk down from the root, keeping the path and the remaining sum. At a leaf with remaining sum 0, copy the path into the answer. Remove the node when going back up.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative DFS with a stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def pathSum(self, root, targetSum):\n        res = []\n        stack = [(root, [], targetSum)] if root else []\n        while stack:\n            node, path, left = stack.pop()\n            path = path + [node.val]\n            left -= node.val\n            if not node.left and not node.right and left == 0:\n                res.append(path)\n            if node.right:\n                stack.append((node.right, path, left))\n            if node.left:\n                stack.append((node.left, path, left))\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Keep (node, path, remaining sum) on a stack instead of using recursion.",
   "frames": [],
   "alt": true
  }
 ]
};
