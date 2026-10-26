window.PROBLEM = {
 "id": "1522",
 "title": "Diameter of N-Ary Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "Return the diameter of an N-ary tree: the number of edges on its longest path (between any two nodes, not necessarily through the root). Example: root 1 with children 3 (children 5, 6), 2, 4 → 3.",
 "why": "The longest path is 5 → 3 → 1 → 2 (or 4): 3 edges.",
 "idea": "For every node take the two deepest child subtrees. The longest path through the node is top1 + top2 edges. Return top1 + 1 to the parent, and keep the best path seen.",
 "input": "root = [1,null,3,2,4,null,5,6]",
 "output": "3",
 "notes": [],
 "best": "For every node take the two deepest child subtrees. The longest path through the node is top1 + top2 edges. Return top1 + 1 to the parent, and keep the best path seen.",
 "variants": [
  {
   "name": "Two deepest child depths",
   "code": "class Solution:\n    def diameter(self, root):\n        best = 0\n        def depth(n):\n            nonlocal best\n            top1 = top2 = 0\n            for c in n.children:\n                d = depth(c)\n                if d > top1:\n                    top1, top2 = d, top1\n                elif d > top2:\n                    top2 = d\n            best = max(best, top1 + top2)\n            return top1 + 1\n        depth(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For every node take the two deepest child subtrees. The longest path through the node is top1 + top2 edges. Return top1 + 1 to the parent, and keep the best path seen.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two BFS passes on the tree as a graph",
   "tag": "Alternative",
   "code": "class Solution:\n    def diameter(self, root):\n        g = defaultdict(list)\n        stack = [root]\n        while stack:\n            n = stack.pop()\n            for c in n.children:\n                g[id(n)].append(id(c))\n                g[id(c)].append(id(n))\n                stack.append(c)\n        def far(start):\n            dist = {start: 0}\n            q = deque([start])\n            last = start\n            while q:\n                u = q.popleft()\n                last = u\n                for v in g[u]:\n                    if v not in dist:\n                        dist[v] = dist[u] + 1\n                        q.append(v)\n            return last, dist[last]\n        a, _ = far(id(root))\n        return far(a)[1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Turn the tree into an undirected graph, find the farthest node from the root, then the farthest from that one.",
   "frames": [],
   "alt": true
  }
 ]
};
