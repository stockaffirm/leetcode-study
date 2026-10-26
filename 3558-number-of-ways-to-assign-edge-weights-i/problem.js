window.PROBLEM = {
 "id": "3558",
 "title": "Number of Ways to Assign Edge Weights I",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "edges [[1,2],[1,3],[3,4],[3,5]] → the deepest path has 2 edges → 2 ways.",
 "idea": "Take a deepest node; its path from the root has d edges, each weighing 1 or 2. The total is odd exactly when the number of weight-1 edges is odd, which is half of all 2^d assignments: 2^(d−1). Find d with a BFS (Breadth-First Search) from node 1.",
 "input": "edges = [[1,2],[1,3],[3,4],[3,5]]",
 "output": "2",
 "notes": [],
 "best": "Take a deepest node; its path from the root has d edges, each weighing 1 or 2. The total is odd exactly when the number of weight-1 edges is odd, which is half of all 2^d assignments: 2^(d−1). Find d with a BFS (Breadth-First Search) from node 1.",
 "variants": [
  {
   "name": "Only the depth matters: 2^(depth − 1) ways for an odd total",
   "code": "class Solution:\n    def assignEdgeWeights(self, edges):\n        MOD = 10**9 + 7\n        adj = defaultdict(list)\n        for a, b in edges:\n            adj[a].append(b)\n            adj[b].append(a)\n        depth = {1: 0}\n        q = deque([1])\n        while q:\n            u = q.popleft()\n            for v in adj[u]:\n                if v not in depth:\n                    depth[v] = depth[u] + 1\n                    q.append(v)\n        d = max(depth.values())\n        return pow(2, d - 1, MOD)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Take a deepest node; its path from the root has d edges, each weighing 1 or 2. The total is odd exactly when the number of weight-1 edges is odd, which is half of all 2^d assignments: 2^(d−1). Find d with a BFS (Breadth-First Search) from node 1.",
   "frames": []
  }
 ]
};
