window.PROBLEM = {
 "id": "1123",
 "title": "Lowest Common Ancestor of Deepest Leaves",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return the lowest common ancestor of all the deepest leaves of a binary tree. Example: [3,5,1,6,2,0,8,null,null,7,4] → the node 2 (subtree [2,7,4]). (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "The deepest leaves 7 and 4 hang under node 2, so their lowest common ancestor is 2.",
 "idea": "The LCA of the deepest leaves is the node whose two sides are equally deep. Return (depth, node) up the tree: pick the deeper side's answer, or this node when the depths are equal.",
 "input": "root = [3,5,1,6,2,0,8,null,null,7,4]",
 "output": "[2,7,4]",
 "notes": [],
 "best": "The LCA of the deepest leaves is the node whose two sides are equally deep. Return (depth, node) up the tree: pick the deeper side's answer, or this node when the depths are equal.",
 "variants": [
  {
   "name": "DFS returning (depth, LCA)",
   "code": "class Solution:\n    def lcaDeepestLeaves(self, root):\n        def dfs(node):\n            if not node:\n                return (0, None)\n            ld, ln = dfs(node.left)\n            rd, rn = dfs(node.right)\n            if ld > rd:\n                return (ld + 1, ln)\n            if rd > ld:\n                return (rd + 1, rn)\n            return (ld + 1, node)\n        return dfs(root)[1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "The LCA of the deepest leaves is the node whose two sides are equally deep. Return (depth, node) up the tree: pick the deeper side's answer, or this node when the depths are equal.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare the depths of both sides",
   "tag": "Alternative",
   "code": "class Solution:\n    def lcaDeepestLeaves(self, root):\n        def depth(n):\n            return 0 if not n else 1 + max(depth(n.left), depth(n.right))\n        node = root\n        while True:\n            l, r = depth(node.left), depth(node.right)\n            if l == r:\n                return node\n            node = node.left if l > r else node.right",
   "time": "O(n²) worst",
   "space": "O(h)",
   "explain": "From the root go towards the deeper side; stop where both sides are equally deep.",
   "frames": [],
   "alt": true
  }
 ]
};
