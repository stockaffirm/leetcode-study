window.PROBLEM = {
 "id": "3313",
 "title": "Find the Last Marked Nodes in Tree",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Path 0-1-2-3: starting at 0 the last marked node is 3; starting at 2 it is 0.",
 "idea": "Marking spreads one edge per second, so the last node marked is the farthest node from the start. In a tree the farthest node from any vertex is one of the two endpoints of the diameter. Find the endpoints A and B with two BFS (Breadth-First Search) runs, then for every node answer A if it is at least as far from A as from B, otherwise B.",
 "input": "edges = [[0,1],[1,2],[2,3]]",
 "output": "[3, 3, 0, 0]",
 "notes": [],
 "best": "Marking spreads one edge per second, so the last node marked is the farthest node from the start. In a tree the farthest node from any vertex is one of the two endpoints of the diameter. Find the endpoints A and B with two BFS (Breadth-First Search) runs, then for every node answer A if it is at least as far from A as from B, otherwise B.",
 "variants": [
  {
   "name": "Farthest node is a diameter endpoint",
   "code": "class Solution:\n    def lastMarkedNodes(self, edges):\n        n = len(edges) + 1\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        def bfs(s):\n            d = [-1] * n\n            d[s] = 0\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if d[v] < 0:\n                        d[v] = d[u] + 1\n                        q.append(v)\n            return d\n        d0 = bfs(0)\n        A = d0.index(max(d0))\n        dA = bfs(A)\n        B = dA.index(max(dA))\n        dB = bfs(B)\n        return [A if dA[i] >= dB[i] else B for i in range(n)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Marking spreads one edge per second, so the last node marked is the farthest node from the start. In a tree the farthest node from any vertex is one of the two endpoints of the diameter. Find the endpoints A and B with two BFS (Breadth-First Search) runs, then for every node answer A if it is at least as far from A as from B, otherwise B.",
   "frames": []
  }
 ]
};
