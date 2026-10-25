window.PROBLEM = {
 "id": "968",
 "title": "Binary Tree Cameras",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "Cameras can be placed on tree nodes; a camera watches its own node, its parent and its children. Return the minimum number of cameras so that every node is watched. Example: [0,0,null,0,0] → 1. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "[0,0,null,0,0]: one camera on the left child watches itself, its parent and its two children. The right side is empty, so 1 camera is enough.",
 "idea": "Go bottom-up and give each node a state: 0 = not watched, 1 = has a camera, 2 = watched. If a child is not watched, this node needs a camera. If a child has a camera, this node is watched. Otherwise it is not watched yet and waits for its parent.",
 "input": "root = [0,0,null,0,0]",
 "output": "1",
 "notes": [],
 "best": "Go bottom-up and give each node a state: 0 = not watched, 1 = has a camera, 2 = watched. If a child is not watched, this node needs a camera. If a child has a camera, this node is watched. Otherwise it is not watched yet and waits for its parent.",
 "variants": [
  {
   "name": "Greedy post-order with 3 states",
   "code": "class Solution:\n    def minCameraCover(self, root):\n        self.cams = 0\n        def dfs(node):\n            if not node:\n                return 2\n            l, r = dfs(node.left), dfs(node.right)\n            if l == 0 or r == 0:\n                self.cams += 1\n                return 1\n            if l == 1 or r == 1:\n                return 2\n            return 0\n        if dfs(root) == 0:\n            self.cams += 1\n        return self.cams",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Go bottom-up and give each node a state: 0 = not watched, 1 = has a camera, 2 = watched. If a child is not watched, this node needs a camera. If a child has a camera, this node is watched. Otherwise it is not watched yet and waits for its parent.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP with three states per node",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCameraCover(self, root):\n        INF = 10 ** 9\n        def dfs(node):\n            if not node:\n                return (INF, 0, 0)\n            la, lb, lc = dfs(node.left)\n            ra, rb, rc = dfs(node.right)\n            a = 1 + min(la, lb, lc) + min(ra, rb, rc)\n            b = min(la + min(ra, rb), ra + min(la, lb))\n            c = lb + rb\n            return (a, b, c)\n        a, b, c = dfs(root)\n        return min(a, b)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For each node compute the cheapest cost if it has a camera, if it is watched by a child, and if it is not yet watched.",
   "frames": [],
   "alt": true
  }
 ]
};
