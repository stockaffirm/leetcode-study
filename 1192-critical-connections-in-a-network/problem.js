window.PROBLEM = {
 "id": "1192",
 "title": "Critical Connections in a Network",
 "level": "Hard",
 "topic": "Graph",
 "question": "There are n servers (0 to n−1) connected by two-way cables, connections[i] = [a, b], and any server can reach any other through some route. A cable is 'critical' if removing just that cable would leave some server unable to reach another. Return all critical cables, in any order. Example: n=4, cables [[0,1],[1,2],[2,0],[1,3]] → only the cable 1–3 is critical, because server 3 hangs on it alone → [[1,3]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remove each edge, test connectivity",
   "tag": "Brute force",
   "code": "class Solution:\n    def criticalConnections(self, n, connections):\n        def connected(skip):\n            g = defaultdict(list)\n            for i, (u, v) in enumerate(connections):\n                if i != skip:\n                    g[u].append(v)\n                    g[v].append(u)\n            seen, st = {0}, [0]\n            while st:\n                x = st.pop()\n                for y in g[x]:\n                    if y not in seen:\n                        seen.add(y)\n                        st.append(y)\n            return len(seen) == n\n        return [list(connections[i]) for i in range(len(connections)) if not connected(i)]",
   "time": "O(E·(V+E))",
   "space": "O(V + E)",
   "explain": "A cable is critical if removing it disconnects the network.",
   "frames": [],
   "alt": true
  }
 ]
};
