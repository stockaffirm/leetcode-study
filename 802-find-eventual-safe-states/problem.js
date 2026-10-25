window.PROBLEM = {
 "id": "802",
 "title": "Find Eventual Safe States",
 "level": "Medium",
 "topic": "Graph",
 "question": "A directed graph is given as adjacency lists. A node is terminal if it has no outgoing edges. A node is SAFE if every path starting from it ends at a terminal node. Return all safe nodes in ascending order. Example: [[1,2],[2,3],[5],[0],[5],[],[]] → [2,4,5,6].",
 "why": "In a directed graph a node is safe if every path from it ends at a terminal node (no outgoing edges). Return all safe nodes, ascending.",
 "idea": "Terminal nodes are safe; a node becomes safe when all its successors are safe. Reverse the edges and peel nodes whose out-degree reaches 0 (Kahn's algorithm).",
 "input": "[[1,2],[2,3],[5],[0],[5],[],[]]",
 "output": "[2,4,5,6]",
 "notes": [],
 "best": "Terminal nodes are safe; a node becomes safe when all its successors are safe. Reverse the edges and peel nodes whose out-degree reaches 0 (Kahn's algorithm).",
 "variants": [
  {
   "name": "Reverse graph + topological sort",
   "code": "class Solution:\n    def eventualSafeNodes(self, graph):\n        n = len(graph)\n        rev = [[] for _ in range(n)]\n        outdeg = [len(g) for g in graph]\n        for u, vs in enumerate(graph):\n            for v in vs: rev[v].append(u)\n        q = deque(i for i in range(n) if outdeg[i] == 0)\n        safe = [False] * n\n        while q:\n            u = q.popleft()\n            safe[u] = True\n            for p in rev[u]:\n                outdeg[p] -= 1\n                if outdeg[p] == 0: q.append(p)\n        return [i for i in range(n) if safe[i]]",
   "time": "O(V + E)",
   "space": "O(V + E)",
   "explain": "Terminal nodes are safe; a node becomes safe when all its successors are safe. Reverse the edges and peel nodes whose out-degree reaches 0 (Kahn's algorithm).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with colours",
   "tag": "Alternative",
   "code": "class Solution:\n    def eventualSafeNodes(self, graph):\n        color = [0] * len(graph)\n        def safe(u):\n            if color[u]: return color[u] == 2\n            color[u] = 1\n            for v in graph[u]:\n                if not safe(v): return False\n            color[u] = 2\n            return True\n        return [i for i in range(len(graph)) if safe(i)]",
   "time": "O(V + E)",
   "space": "O(V)",
   "explain": "Nodes on a cycle (found with a 'visiting' colour) are unsafe, everything leading to them too.",
   "frames": [],
   "alt": true
  }
 ]
};
