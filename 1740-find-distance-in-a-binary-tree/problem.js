window.PROBLEM = {
 "id": "1740",
 "title": "Find Distance in a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given the root of a binary tree with distinct values, and two values p and q that exist in it, return the distance between those two nodes — the number of edges on the path connecting them. Example: tree [3,5,1,6,2,0,8,null,null,7,4], p=5, q=0 → 3. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Return the number of edges on the path between the nodes with values p and q in a binary tree.",
 "idea": "Find their lowest common ancestor; the distance is the depth of p plus the depth of q measured from that ancestor.",
 "input": "[3,5,1,6,2,0,8,null,null,7,4], p=5, q=0",
 "output": "3",
 "notes": [],
 "best": "Find their lowest common ancestor; the distance is the depth of p plus the depth of q measured from that ancestor.",
 "variants": [
  {
   "name": "Lowest common ancestor + depths",
   "code": "class Solution:\n    def findDistance(self, root, p, q):\n        def lca(n):\n            if not n or n.val in (p, q): return n\n            l, r = lca(n.left), lca(n.right)\n            return n if l and r else l or r\n        def depth(n, target, d):\n            if not n: return -1\n            if n.val == target: return d\n            return max(depth(n.left, target, d + 1), depth(n.right, target, d + 1))\n        a = lca(root)\n        return depth(a, p, 0) + depth(a, q, 0)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Find their lowest common ancestor; the distance is the depth of p plus the depth of q measured from that ancestor.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Graph with BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDistance(self, root, p, q):\n        if p == q: return 0\n        g = defaultdict(list)\n        def build(n):\n            for c in (n.left, n.right):\n                if c:\n                    g[n.val].append(c.val)\n                    g[c.val].append(n.val)\n                    build(c)\n        build(root)\n        dist, qu = {p: 0}, deque([p])\n        while qu:\n            u = qu.popleft()\n            for v in g[u]:\n                if v not in dist:\n                    dist[v] = dist[u] + 1\n                    qu.append(v)\n        return dist[q]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Turn the tree into an undirected graph (add parent links) and breadth-first search from p to q.",
   "frames": [],
   "alt": true
  }
 ]
};
