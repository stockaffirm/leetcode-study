window.PROBLEM = {
 "id": "863",
 "title": "All Nodes Distance K in Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given a binary tree (boxes called nodes with up to two children), a target node in it, and a number k. Return the values of all nodes that are exactly k steps (edges) away from the target, moving along the tree in any direction (down to children or up to the parent). The answer can be in any order. Example: tree [3,5,1,6,2,0,8,null,null,7,4], target 5, k=2 → nodes 7 and 4 (two steps down) and 1 (up to 3, then down to 1) → [7,4,1]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "List every node exactly k steps away from the target node, going up or down the tree.",
 "idea": "Trees only point down, so first record each node's parent. Then BFS outward from the target (children and parent), stopping at distance k.",
 "input": "tree [3,5,1,6,2,0,8,null,null,7,4], target 5, k=2",
 "output": "[7, 4, 1]",
 "notes": [],
 "best": "Trees only point down, so first record each node's parent. Then BFS outward from the target (children and parent), stopping at distance k.",
 "variants": [
  {
   "name": "Parent links + BFS",
   "code": "class Solution:\n    def distanceK(self, root, target, k):\n        parent = {}\n        def link(node, par):\n            if not node: return\n            parent[node] = par\n            link(node.left, node)\n            link(node.right, node)\n        link(root, None)\n        q, seen = deque([(target, 0)]), {target}\n        ans = []\n        while q:\n            node, d = q.popleft()\n            if d == k: ans.append(node.val)\n            elif d < k:\n                for nb in (node.left, node.right, parent[node]):\n                    if nb and nb not in seen:\n                        seen.add(nb)\n                        q.append((nb, d + 1))\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Trees only point down, so first record each node's parent. Then BFS outward from the target (children and parent), stopping at distance k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS returning the distance to the target",
   "tag": "Alternative",
   "code": "class Solution:\n    def distanceK(self, root, target, k):\n        ans = []\n        def collect(node, d):\n            if not node or d > k: return\n            if d == k:\n                ans.append(node.val)\n                return\n            collect(node.left, d + 1)\n            collect(node.right, d + 1)\n        def go(node):\n            if not node: return -1\n            if node is target:\n                collect(node, 0)\n                return 0\n            l, r = go(node.left), go(node.right)\n            if l != -1:\n                if l + 1 == k: ans.append(node.val)\n                else: collect(node.right, l + 2)\n                return l + 1\n            if r != -1:\n                if r + 1 == k: ans.append(node.val)\n                else: collect(node.left, r + 2)\n                return r + 1\n            return -1\n        go(root)\n        return ans",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Find the target, then on the way back up, collect nodes in the other branch at the right depth.",
   "frames": [],
   "alt": true
  }
 ]
};
