window.PROBLEM = {
 "id": "2493",
 "title": "Divide Nodes Into the Maximum Number of Groups",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Split the nodes of a graph into numbered groups so that each edge joins nodes in groups whose numbers differ by exactly 1. Maximise the number of groups (−1 if impossible).",
 "idea": "It is only possible if every component is bipartite. In a component the best number of groups is the largest BFS depth (+1) over all starting nodes; add these up over components.",
 "input": "n=6, edges [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]]",
 "output": "4",
 "notes": [],
 "best": "It is only possible if every component is bipartite. In a component the best number of groups is the largest BFS depth (+1) over all starting nodes; add these up over components.",
 "variants": [
  {
   "name": "Bipartite check + deepest BFS per component",
   "code": "class Solution:\n    def magnificentSets(self, n, edges):\n        g = defaultdict(list)\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        comp = {}\n        for s in range(1, n + 1):\n            if s in comp: continue\n            comp[s] = s\n            st = [s]\n            while st:\n                u = st.pop()\n                for v in g[u]:\n                    if v not in comp:\n                        comp[v] = s\n                        st.append(v)\n        best = defaultdict(int)\n        for s in range(1, n + 1):\n            dist = {s: 0}\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if v not in dist:\n                        dist[v] = dist[u] + 1\n                        q.append(v)\n                    elif dist[v] == dist[u]: return -1\n            best[comp[s]] = max(best[comp[s]], max(dist.values()) + 1)\n        return sum(best.values())",
   "time": "O(n·(n+e))",
   "space": "O(n+e)",
   "explain": "It is only possible if every component is bipartite. In a component the best number of groups is the largest BFS depth (+1) over all starting nodes; add these up over components.",
   "frames": []
  }
 ]
};
