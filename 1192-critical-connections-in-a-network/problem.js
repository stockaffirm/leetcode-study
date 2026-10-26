window.PROBLEM = {
 "id": "1192",
 "title": "Critical Connections in a Network",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Which cables, if cut, would split the network into two parts (the 'bridges')?",
 "idea": "DFS and number nodes in visit order (disc). low[u] is the earliest visited node reachable from u's subtree without using the edge to its parent. An edge u–v is a bridge when low[v] > disc[u] — v's side cannot get back around.",
 "input": "n=4, [[0,1],[1,2],[2,0],[1,3]]",
 "output": "[[1,3]]",
 "notes": [],
 "best": "DFS and number nodes in visit order (disc). low[u] is the earliest visited node reachable from u's subtree without using the edge to its parent. An edge u–v is a bridge when low[v] > disc[u] — v's side cannot get back around.",
 "variants": [
  {
   "name": "Tarjan's bridge-finding DFS",
   "code": "class Solution:\n    def criticalConnections(self, n, connections):\n        g = defaultdict(list)\n        for u, v in connections:\n            g[u].append(v)\n            g[v].append(u)\n        disc, low, out, timer = {}, {}, [], [0]\n        def dfs(u, parent):\n            disc[u] = low[u] = timer[0]\n            timer[0] += 1\n            for v in g[u]:\n                if v == parent: continue\n                if v not in disc:\n                    dfs(v, u)\n                    low[u] = min(low[u], low[v])\n                    if low[v] > disc[u]: out.append([u, v])\n                else:\n                    low[u] = min(low[u], disc[v])\n        dfs(0, -1)\n        return out",
   "time": "O(V + E)",
   "space": "O(V + E)",
   "explain": "DFS and number nodes in visit order (disc). low[u] is the earliest visited node reachable from u's subtree without using the edge to its parent. An edge u–v is a bridge when low[v] > disc[u] — v's side cannot get back around.",
   "frames": []
  }
 ]
};
