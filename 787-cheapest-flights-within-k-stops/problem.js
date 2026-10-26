window.PROBLEM = {
 "id": "787",
 "title": "Cheapest Flights Within K Stops",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Cheapest trip from src to dst using at most k stops (k+1 flights).",
 "idea": "Relax every flight once per allowed flight, always reading the previous round's prices (copy them first) so a round adds exactly one more flight.",
 "input": "n=4, flights [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src 0, dst 3, k=1",
 "output": "700",
 "notes": [],
 "best": "Relax every flight once per allowed flight, always reading the previous round's prices (copy them first) so a round adds exactly one more flight.",
 "variants": [
  {
   "name": "Bellman-Ford limited to k+1 flights",
   "code": "class Solution:\n    def findCheapestPrice(self, n, flights, src, dst, k):\n        INF = float('inf')\n        dist = [INF] * n\n        dist[src] = 0\n        for _ in range(k + 1):\n            nxt = dist[:]\n            for u, v, w in flights:\n                if dist[u] + w < nxt[v]: nxt[v] = dist[u] + w\n            dist = nxt\n        return dist[dst] if dist[dst] < INF else -1",
   "time": "O(k · E)",
   "space": "O(n)",
   "explain": "Relax every flight once per allowed flight, always reading the previous round's prices (copy them first) so a round adds exactly one more flight.",
   "frames": []
  }
 ]
};
