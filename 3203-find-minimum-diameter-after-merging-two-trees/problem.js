window.PROBLEM = {
 "id": "3203",
 "title": "Find Minimum Diameter After Merging Two Trees",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Connect one node of tree 1 to one node of tree 2 with a new edge. Choose the nodes to make the longest path in the merged tree as short as possible.",
 "idea": "Join the middle (centre) of each tree. The result's diameter is max(d1, d2, ⌈d1/2⌉ + ⌈d2/2⌉ + 1), where d1 and d2 are the two diameters (found with two BFS passes each).",
 "input": "edges1 [[0,1],[0,2],[0,3]], edges2 [[0,1]]",
 "output": "3",
 "notes": [],
 "best": "Join the middle (centre) of each tree. The result's diameter is max(d1, d2, ⌈d1/2⌉ + ⌈d2/2⌉ + 1), where d1 and d2 are the two diameters (found with two BFS passes each).",
 "variants": [
  {
   "name": "Diameters, then join the two centres",
   "code": "class Solution:\n    def minimumDiameterAfterMerge(self, edges1, edges2):\n        def diameter(edges):\n            g = defaultdict(list)\n            for u, v in edges:\n                g[u].append(v)\n                g[v].append(u)\n            def far(src):\n                dist = {src: 0}\n                q = deque([src])\n                last = src\n                while q:\n                    u = q.popleft()\n                    last = u\n                    for v in g[u]:\n                        if v not in dist:\n                            dist[v] = dist[u] + 1\n                            q.append(v)\n                return last, dist[last]\n            a, _ = far(0)\n            b, d = far(a)\n            return d\n        d1, d2 = diameter(edges1), diameter(edges2)\n        return max(d1, d2, (d1 + 1) // 2 + (d2 + 1) // 2 + 1)",
   "time": "O(n + m)",
   "space": "O(n + m)",
   "explain": "Join the middle (centre) of each tree. The result's diameter is max(d1, d2, ⌈d1/2⌉ + ⌈d2/2⌉ + 1), where d1 and d2 are the two diameters (found with two BFS passes each).",
   "frames": []
  }
 ]
};
