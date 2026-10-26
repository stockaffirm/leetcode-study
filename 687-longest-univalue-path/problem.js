window.PROBLEM = {
 "id": "687",
 "title": "Longest Univalue Path",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given the root of a binary tree, return the length of the longest path (counted in edges) in which every node has the SAME value. The path may or may not go through the root, and it can go down one side or bend at a top node. Example: tree [5,4,5,1,1,null,5] → the path 5 – 5 – 5 on the right has two edges → 2. (A tree written as a list reads level by level; null means there is no node in that spot.)",
 "why": "Find the longest path in a binary tree where every node has the SAME value (counted in edges).",
 "idea": "At each node, extend the chain from a child only if the child has the same value. The best path through a node = left chain + right chain; return the longer single chain to the parent.",
 "input": "tree [5,4,5,1,1,null,5]",
 "output": "2",
 "notes": [],
 "best": "At each node, extend the chain from a child only if the child has the same value. The best path through a node = left chain + right chain; return the longer single chain to the parent.",
 "variants": [
  {
   "name": "One DFS returning the best downward chain",
   "code": "class Solution:\n    def longestUnivaluePath(self, root):\n        best = 0\n        def go(node):\n            nonlocal best\n            if not node: return 0\n            l, r = go(node.left), go(node.right)\n            left = l + 1 if node.left and node.left.val == node.val else 0\n            right = r + 1 if node.right and node.right.val == node.val else 0\n            best = max(best, left + right)\n            return max(left, right)\n        go(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "At each node, extend the chain from a child only if the child has the same value. The best path through a node = left chain + right chain; return the longer single chain to the parent.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recompute chains at every node",
   "tag": "Brute force",
   "code": "class Solution:\n    def longestUnivaluePath(self, root):\n        def down(node, val):\n            if not node or node.val != val: return 0\n            return 1 + max(down(node.left, val), down(node.right, val))\n        def go(node):\n            if not node: return 0\n            through = down(node.left, node.val) + down(node.right, node.val)\n            return max(through, go(node.left), go(node.right))\n        return go(root)",
   "time": "O(n²)",
   "space": "O(h)",
   "explain": "For each node walk down both sides counting same-valued nodes — simple but repeats work.",
   "frames": [],
   "alt": true
  }
 ]
};
