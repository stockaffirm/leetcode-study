window.PROBLEM = {
 "id": "743",
 "title": "Network Delay Time",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
