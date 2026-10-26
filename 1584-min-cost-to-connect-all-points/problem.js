window.PROBLEM = {
 "id": "1584",
 "title": "Min Cost to Connect All Points",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "Points are given on a plane. The cost to connect two points is their Manhattan distance |x1−x2| + |y1−y2|. Return the minimum total cost so that all points are connected (exactly one path between any two). Example: [[0,0],[2,2],[3,10],[5,2],[7,0]] → 20.",
 "why": "Connect all points on a plane with the least total Manhattan length of cables (every pair may be joined).",
 "idea": "A minimum spanning tree: sort all pairs by distance and add a cable whenever it joins two separate groups (union-find).",
 "input": "[[0,0],[2,2],[3,10],[5,2],[7,0]]",
 "output": "20",
 "notes": [],
 "best": "A minimum spanning tree: sort all pairs by distance and add a cable whenever it joins two separate groups (union-find).",
 "variants": [
  {
   "name": "Kruskal's minimum spanning tree",
   "code": "class Solution:\n    def minCostConnectPoints(self, points):\n        n = len(points)\n        edges = sorted((abs(a[0] - b[0]) + abs(a[1] - b[1]), i, j) for i, a in enumerate(points) for j, b in enumerate(points) if i < j)\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        total = used = 0\n        for d, i, j in edges:\n            ri, rj = find(i), find(j)\n            if ri != rj:\n                parent[ri] = rj\n                total += d\n                used += 1\n                if used == n - 1: break\n        return total",
   "time": "O(n² log n)",
   "space": "O(n²)",
   "explain": "A minimum spanning tree: sort all pairs by distance and add a cable whenever it joins two separate groups (union-find).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prim's algorithm",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCostConnectPoints(self, points):\n        n = len(points)\n        d = [float('inf')] * n\n        d[0] = 0\n        done = [False] * n\n        total = 0\n        for _ in range(n):\n            u = min((i for i in range(n) if not done[i]), key=lambda i: d[i])\n            done[u] = True\n            total += d[u]\n            for v in range(n):\n                if not done[v]: d[v] = min(d[v], abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1]))\n        return total",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Grow the tree from point 0, always adding the cheapest next point.",
   "frames": [],
   "alt": true
  }
 ]
};
