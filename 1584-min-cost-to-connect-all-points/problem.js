window.PROBLEM = {
 "id": "1584",
 "title": "Min Cost to Connect All Points",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
