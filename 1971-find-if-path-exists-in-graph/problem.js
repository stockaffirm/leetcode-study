window.PROBLEM = {
 "id": "1971",
 "title": "Find if Path Exists in Graph",
 "level": "Easy",
 "topic": "Union Find / Segment Tree",
 "question": "An undirected graph has n vertices and a list of edges. Return true if there is a path from source to destination. Example: n=3, edges [[0,1],[1,2],[2,0]], source 0, destination 2 → true.",
 "why": "Triangle 0-1-2: 0 reaches 2 → true.",
 "idea": "Union the endpoints of every edge; source and destination are connected exactly when they have the same root.",
 "input": "n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2",
 "output": "true",
 "notes": [],
 "best": "Union the endpoints of every edge; source and destination are connected exactly when they have the same root.",
 "variants": [
  {
   "name": "Union-Find (or any traversal)",
   "code": "class Solution:\n    def validPath(self, n, edges, source, destination):\n        p = list(range(n))\n        def find(x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        for a, b in edges:\n            p[find(a)] = find(b)\n        return find(source) == find(destination)",
   "time": "O(e α)",
   "space": "O(n)",
   "explain": "Union the endpoints of every edge; source and destination are connected exactly when they have the same root.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def validPath(self, n, edges, source, destination):\n        g = [[] for _ in range(n)]\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        seen = {source}\n        q = deque([source])\n        while q:\n            u = q.popleft()\n            if u == destination:\n                return True\n            for v in g[u]:\n                if v not in seen:\n                    seen.add(v)\n                    q.append(v)\n        return False",
   "time": "O(n + e)",
   "space": "O(n + e)",
   "explain": "Traverse from the source.",
   "frames": [],
   "alt": true
  }
 ]
};
