window.PROBLEM = {
 "id": "404",
 "title": "Sum of Left Leaves",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Return the sum of all LEFT leaves of a binary tree (a leaf that is the left child of its parent). Example: [3,9,20,null,null,15,7] → 24 (9 + 15). (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Left leaves are 9 and 15 → 24.",
 "idea": "Walk the tree and remember whether we came from a left child. A node with no children that was reached as a left child is a left leaf.",
 "input": "root = [3,9,20,null,null,15,7]",
 "output": "24",
 "notes": [],
 "best": "Walk the tree and remember whether we came from a left child. A node with no children that was reached as a left child is a left leaf.",
 "variants": [
  {
   "name": "DFS with a 'is left' flag",
   "code": "class Solution:\n    def sumOfLeftLeaves(self, root):\n        def dfs(node, is_left):\n            if not node:\n                return 0\n            if not node.left and not node.right:\n                return node.val if is_left else 0\n            return dfs(node.left, True) + dfs(node.right, False)\n        return dfs(root, False)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Walk the tree and remember whether we came from a left child. A node with no children that was reached as a left child is a left leaf.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative with a stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def sumOfLeftLeaves(self, root):\n        total = 0\n        stack = [root] if root else []\n        while stack:\n            node = stack.pop()\n            if node.left:\n                if not node.left.left and not node.left.right:\n                    total += node.left.val\n                else:\n                    stack.append(node.left)\n            if node.right:\n                stack.append(node.right)\n        return total",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "The same idea without recursion: look at the left child when popping a node.",
   "frames": [],
   "alt": true
  }
 ]
};
