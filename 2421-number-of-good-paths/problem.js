window.PROBLEM = {
 "id": "2421",
 "title": "Number of Good Paths",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "vals [1,3,2,1,3], a tree → 6 good paths.",
 "idea": "A good path starts and ends at equal values and never passes a larger value. Process the edges ordered by the larger endpoint value. Union two components when joined; whenever two components with the same maximum value merge, the pairs of equal-maximum nodes become good paths: add count_a · count_b and keep the merged count. Add one path per node for single-node paths.",
 "input": "vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]]",
 "output": "6",
 "notes": [],
 "best": "A good path starts and ends at equal values and never passes a larger value. Process the edges ordered by the larger endpoint value. Union two components when joined; whenever two components with the same maximum value merge, the pairs of equal-maximum nodes become good paths: add count_a · count_b and keep the merged count. Add one path per node for single-node paths.",
 "variants": [
  {
   "name": "Union-find, adding nodes by increasing value",
   "code": "class Solution:\n    def numberOfGoodPaths(self, vals, edges):\n        n = len(vals)\n        parent = list(range(n))\n        count = [1] * n\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        res = n\n        for a, b in sorted(edges, key=lambda e: max(vals[e[0]], vals[e[1]])):\n            ra, rb = find(a), find(b)\n            va, vb = vals[ra], vals[rb]\n            if va == vb:\n                res += count[ra] * count[rb]\n                count[ra] += count[rb]\n                parent[rb] = ra\n            elif va < vb:\n                parent[ra] = rb\n            else:\n                parent[rb] = ra\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "A good path starts and ends at equal values and never passes a larger value. Process the edges ordered by the larger endpoint value. Union two components when joined; whenever two components with the same maximum value merge, the pairs of equal-maximum nodes become good paths: add count_a · count_b and keep the merged count. Add one path per node for single-node paths.",
   "frames": []
  }
 ]
};
