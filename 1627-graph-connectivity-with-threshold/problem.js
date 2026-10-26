window.PROBLEM = {
 "id": "1627",
 "title": "Graph Connectivity With A Threshold",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "Cities are labelled 1…n. Cities x and y are directly connected if they have a common divisor strictly greater than the threshold. For each query [a, b] say whether the cities are connected (directly or through a chain of cities). Example: n=6, threshold=2, queries [[1,4],[2,5],[3,6]] → [False, False, True].",
 "why": "Cities 1…n; two cities are directly connected if they share a divisor larger than the threshold. Answer queries: are cities a and b connected (directly or through other cities)?",
 "idea": "Instead of testing pairs, for every number z > threshold union all its multiples (z, 2z, 3z, …): they all share the divisor z. Then answer each query by comparing roots.",
 "input": "n=6, threshold=2, queries [[1,4],[2,5],[3,6]]",
 "output": "[False, False, True]",
 "notes": [],
 "best": "Instead of testing pairs, for every number z > threshold union all its multiples (z, 2z, 3z, …): they all share the divisor z. Then answer each query by comparing roots.",
 "variants": [
  {
   "name": "Union multiples of every divisor above the threshold",
   "code": "class Solution:\n    def areConnected(self, n, threshold, queries):\n        parent = list(range(n + 1))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for z in range(threshold + 1, n + 1):\n            for m in range(2 * z, n + 1, z):\n                parent[find(m)] = find(z)\n        return [find(a) == find(b) for a, b in queries]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Instead of testing pairs, for every number z > threshold union all its multiples (z, 2z, 3z, …): they all share the divisor z. Then answer each query by comparing roots.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Test every pair with gcd",
   "tag": "Brute force",
   "code": "class Solution:\n    def areConnected(self, n, threshold, queries):\n        parent = list(range(n + 1))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for a in range(1, n + 1):\n            for b in range(a + 1, n + 1):\n                if gcd(a, b) > threshold: parent[find(a)] = find(b)\n        return [find(a) == find(b) for a, b in queries]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Union every pair of cities whose gcd exceeds the threshold.",
   "frames": [],
   "alt": true
  }
 ]
};
