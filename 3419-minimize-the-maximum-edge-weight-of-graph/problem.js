window.PROBLEM = {
 "id": "3419",
 "title": "Minimize the Maximum Edge Weight of Graph",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Every node must reach node 0. With edges of weight 1 only (1→0, 3→0, 4→3, 2→1) all nodes reach 0, so the largest weight needed is 1.",
 "idea": "Each node needs only one outgoing edge towards 0, so the limit on edges per node never blocks us. Reverse the edges and run a Dijkstra from 0 where a path's cost is its largest edge; the answer is the worst node, or −1 if some node is unreachable.",
 "input": "n=5, edges=[[1,0,1],[2,0,2],[3,0,1],[4,3,1],[2,1,1]], threshold=2",
 "output": "1",
 "notes": [],
 "best": "Each node needs only one outgoing edge towards 0, so the limit on edges per node never blocks us. Reverse the edges and run a Dijkstra from 0 where a path's cost is its largest edge; the answer is the worst node, or −1 if some node is unreachable.",
 "variants": [
  {
   "name": "Minimax Dijkstra on the reversed graph",
   "code": "class Solution:\n    def minMaxWeight(self, n, edges, threshold):\n        rev = defaultdict(list)\n        for a, b, w in edges:\n            rev[b].append((a, w))\n        best = {0: 0}\n        h = [(0, 0)]\n        while h:\n            d, u = heappop(h)\n            if d > best.get(u, inf):\n                continue\n            for v, w in rev[u]:\n                nd = max(d, w)\n                if nd < best.get(v, inf):\n                    best[v] = nd\n                    heappush(h, (nd, v))\n        return max(best.values()) if len(best) == n else -1",
   "time": "O(E log E)",
   "space": "O(n + E)",
   "explain": "Each node needs only one outgoing edge towards 0, so the limit on edges per node never blocks us. Reverse the edges and run a Dijkstra from 0 where a path's cost is its largest edge; the answer is the worst node, or −1 if some node is unreachable.",
   "frames": []
  }
 ]
};
