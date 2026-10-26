window.PROBLEM = {
 "id": "865",
 "title": "Smallest Subtree with all the Deepest Nodes",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return the smallest subtree that contains ALL the deepest nodes of a binary tree (the subtree rooted at some node). Example: [3,5,1,6,2,0,8,null,null,7,4] → the subtree rooted at 2: [2,7,4]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "The deepest nodes are 7 and 4 (both below node 2), so the smallest subtree containing them is rooted at 2.",
 "idea": "For each node compute the depth of its subtree and its best answer. If one side is deeper, the answer comes from that side; if both sides are equally deep, this node is the answer.",
 "input": "root = [3,5,1,6,2,0,8,null,null,7,4]",
 "output": "[2,7,4]",
 "notes": [],
 "best": "For each node compute the depth of its subtree and its best answer. If one side is deeper, the answer comes from that side; if both sides are equally deep, this node is the answer.",
 "variants": [
  {
   "name": "DFS returning (depth, answer node)",
   "code": "class Solution:\n    def subtreeWithAllDeepest(self, root):\n        def dfs(node):\n            if not node:\n                return (0, None)\n            ld, ln = dfs(node.left)\n            rd, rn = dfs(node.right)\n            if ld > rd:\n                return (ld + 1, ln)\n            if rd > ld:\n                return (rd + 1, rn)\n            return (ld + 1, node)\n        return dfs(root)[1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For each node compute the depth of its subtree and its best answer. If one side is deeper, the answer comes from that side; if both sides are equally deep, this node is the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare the depths of both sides",
   "tag": "Alternative",
   "code": "class Solution:\n    def subtreeWithAllDeepest(self, root):\n        def depth(n):\n            return 0 if not n else 1 + max(depth(n.left), depth(n.right))\n        node = root\n        while True:\n            l, r = depth(node.left), depth(node.right)\n            if l == r:\n                return node\n            node = node.left if l > r else node.right",
   "time": "O(n²) worst",
   "space": "O(h)",
   "explain": "From the root go towards the deeper side; stop where both sides are equally deep.",
   "frames": [],
   "alt": true
  }
 ]
};
