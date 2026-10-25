window.PROBLEM = {
 "id": "743",
 "title": "Network Delay Time",
 "level": "Medium",
 "topic": "Graph",
 "question": "A network has n nodes labelled 1 to n. times[i] = [u, v, w] means a signal sent from u arrives at v after w time units (one direction only). A signal is sent from node k. Return the time it takes for ALL n nodes to receive it, or -1 if some node never receives it. Example: n=4, k=2, links 2→1 (1), 2→3 (1), 3→4 (1) → node 4 gets it at time 2, which is the last → 2.",
 "why": "A signal starts at node k and travels along one-way links, each with a travel time. How long until EVERY node has it (or −1 if some never do)?",
 "idea": "Dijkstra: always settle the unvisited node with the smallest arrival time using a min-heap. The answer is the largest arrival time, if all n nodes were reached.",
 "input": "times [[2,1,1],[2,3,1],[3,4,1]], n=4, k=2",
 "output": "2",
 "notes": [],
 "best": "Dijkstra: always settle the unvisited node with the smallest arrival time using a min-heap. The answer is the largest arrival time, if all n nodes were reached.",
 "variants": [
  {
   "name": "Dijkstra's algorithm",
   "code": "class Solution:\n    def networkDelayTime(self, times, n, k):\n        g = defaultdict(list)\n        for u, v, w in times: g[u].append((v, w))\n        dist, pq = {}, [(0, k)]\n        while pq:\n            d, u = heappop(pq)\n            if u in dist: continue\n            dist[u] = d\n            for v, w in g[u]:\n                if v not in dist: heappush(pq, (d + w, v))\n        return max(dist.values()) if len(dist) == n else -1",
   "time": "O(E log V)",
   "space": "O(V + E)",
   "explain": "Dijkstra: always settle the unvisited node with the smallest arrival time using a min-heap. The answer is the largest arrival time, if all n nodes were reached.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bellman-Ford",
   "tag": "Alternative",
   "code": "class Solution:\n    def networkDelayTime(self, times, n, k):\n        INF = float('inf')\n        dist = [INF] * (n + 1)\n        dist[k] = 0\n        for _ in range(n - 1):\n            for u, v, w in times:\n                if dist[u] + w < dist[v]: dist[v] = dist[u] + w\n        m = max(dist[1:])\n        return m if m < INF else -1",
   "time": "O(V·E)",
   "space": "O(V)",
   "explain": "Relax every edge n−1 times; no heap needed but slower on big graphs.",
   "frames": [],
   "alt": true
  }
 ]
};
