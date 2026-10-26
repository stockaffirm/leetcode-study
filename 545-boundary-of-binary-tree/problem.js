window.PROBLEM = {
 "id": "545",
 "title": "Boundary of Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
