window.PROBLEM = {
 "id": "545",
 "title": "Boundary of Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "The boundary of a binary tree (boxes called nodes with up to two children) is listed anti-clockwise as: the root; the left boundary (nodes you pass going down the left edge from the root, not including leaves); all the leaves from left to right; and the right boundary (going down the right edge, not including leaves) listed in REVERSE (bottom to top). Given the root, return the boundary values. Example: tree [1,null,2,3,4] → root 1; no left boundary; leaves 3, 4; right boundary 2 → [1,3,4,2]. (A tree written as a list reads level by level; null means there is no node in that spot.)",
 "why": "List the nodes on the outline of a binary tree going anti-clockwise: root, the left edge down, all leaves left to right, then the right edge back up.",
 "idea": "Walk the left boundary top-down (skipping leaves), collect all leaves with a DFS, walk the right boundary top-down, and reverse it when appending.",
 "input": "tree [1, null, 2, 3, 4]",
 "output": "[1, 3, 4, 2]",
 "notes": [],
 "best": "Walk the left boundary top-down (skipping leaves), collect all leaves with a DFS, walk the right boundary top-down, and reverse it when appending.",
 "variants": [
  {
   "name": "Left edge + leaves + right edge reversed",
   "code": "class Solution:\n    def boundaryOfBinaryTree(self, root):\n        if not root: return []\n        def is_leaf(n): return not n.left and not n.right\n        res = [root.val] if not is_leaf(root) else []\n        node = root.left\n        while node:\n            if not is_leaf(node): res.append(node.val)\n            node = node.left if node.left else node.right\n        def leaves(n):\n            if not n: return\n            if is_leaf(n): res.append(n.val)\n            leaves(n.left)\n            leaves(n.right)\n        leaves(root)\n        right = []\n        node = root.right\n        while node:\n            if not is_leaf(node): right.append(node.val)\n            node = node.right if node.right else node.left\n        return res + right[::-1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Walk the left boundary top-down (skipping leaves), collect all leaves with a DFS, walk the right boundary top-down, and reverse it when appending.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One DFS with edge flags",
   "tag": "Alternative",
   "code": "class Solution:\n    def boundaryOfBinaryTree(self, root):\n        if not root: return []\n        if not root.left and not root.right: return [root.val]\n        left, leaves, right = [], [], []\n        def dfs(node, on_left, on_right):\n            if not node: return\n            if not node.left and not node.right:\n                leaves.append(node.val)\n                return\n            if on_left: left.append(node.val)\n            if on_right: right.append(node.val)\n            dfs(node.left, on_left, on_right and not node.right)\n            dfs(node.right, on_left and not node.left, on_right)\n        dfs(root.left, True, False)\n        dfs(root.right, False, True)\n        return [root.val] + left + leaves + right[::-1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Carry 'am I on the left edge / right edge?' down the tree and sort nodes into three lists.",
   "frames": [],
   "alt": true
  }
 ]
};
