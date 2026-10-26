window.PROBLEM = {
 "id": "863",
 "title": "All Nodes Distance K in Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
