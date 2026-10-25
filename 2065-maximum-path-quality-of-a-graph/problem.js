window.PROBLEM = {
 "id": "2065",
 "title": "Maximum Path Quality of a Graph",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "An undirected graph has nodes with values; node 0 is the start. A path starts and ends at node 0 and uses at most maxTime in total, each edge costing its time. The quality of a path is the SUM of the values of the DIFFERENT nodes it visits (a repeated node counts once). Return the best quality. Example: values [0,32,10,43], edges [[0,1,10],[1,2,15],[0,3,10]], maxTime 49 → 75.",
 "why": "Walk from node 0 and back to node 0 within maxTime; a path's quality is the sum of the values of the DIFFERENT nodes visited. Maximise it.",
 "idea": "Few nodes have a large degree, so depth-first search over all walks that fit in the time budget is fine. Count a node's value only the first time it is visited (a counter of visits per node).",
 "input": "values [0,32,10,43], edges [[0,1,10],[1,2,15],[0,3,10]], maxTime 49",
 "output": "75",
 "notes": [],
 "best": "Few nodes have a large degree, so depth-first search over all walks that fit in the time budget is fine. Count a node's value only the first time it is visited (a counter of visits per node).",
 "variants": [
  {
   "name": "DFS with a time budget",
   "code": "class Solution:\n    def maximalPathQuality(self, values, edges, maxTime):\n        g = defaultdict(list)\n        for u, v, t in edges:\n            g[u].append((v, t))\n            g[v].append((u, t))\n        best = 0\n        visits = defaultdict(int)\n        def dfs(u, time, quality):\n            nonlocal best\n            if u == 0: best = max(best, quality)\n            for v, t in g[u]:\n                if time + t <= maxTime:\n                    first = visits[v] == 0\n                    visits[v] += 1\n                    dfs(v, time + t, quality + (values[v] if first else 0))\n                    visits[v] -= 1\n        visits[0] = 1\n        dfs(0, 0, values[0])\n        return best",
   "time": "exponential (bounded by the time budget)",
   "space": "O(n)",
   "explain": "Few nodes have a large degree, so depth-first search over all walks that fit in the time budget is fine. Count a node's value only the first time it is visited (a counter of visits per node).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS carrying a set of visited nodes",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximalPathQuality(self, values, edges, maxTime):\n        g = defaultdict(list)\n        for u, v, t in edges:\n            g[u].append((v, t))\n            g[v].append((u, t))\n        best = 0\n        def dfs(u, time, seen, quality):\n            nonlocal best\n            if u == 0: best = max(best, quality)\n            for v, t in g[u]:\n                if time + t <= maxTime:\n                    if v in seen: dfs(v, time + t, seen, quality)\n                    else: dfs(v, time + t, seen | {v}, quality + values[v])\n        dfs(0, 0, {0}, values[0])\n        return best",
   "time": "exponential",
   "space": "O(n)",
   "explain": "The same search with an immutable set of nodes already counted.",
   "frames": [],
   "alt": true
  }
 ]
};
