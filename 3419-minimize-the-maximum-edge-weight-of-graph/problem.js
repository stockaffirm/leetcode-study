window.PROBLEM = {
 "id": "3419",
 "title": "Minimize the Maximum Edge Weight of Graph",
 "level": "Medium",
 "topic": "Graph",
 "question": "A directed weighted graph has nodes 0 … n−1. Remove edges so that (1) every node can reach node 0, (2) each node keeps at most `threshold` outgoing edges, and (3) the largest remaining edge weight is as small as possible. Return that weight, or −1 if it is impossible. Example: n=5, edges [[1,0,1],[2,0,2],[3,0,1],[4,3,1],[2,1,1]], threshold 2 → 1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search the limit + BFS to node 0",
   "tag": "Alternative",
   "code": "class Solution:\n    def minMaxWeight(self, n, edges, threshold):\n        ws = sorted({w for _, _, w in edges})\n        def ok(W):\n            rev = defaultdict(list)\n            for a, b, w in edges:\n                if w <= W:\n                    rev[b].append(a)\n            seen = {0}\n            dq = deque([0])\n            while dq:\n                u = dq.popleft()\n                for v in rev[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        dq.append(v)\n            return len(seen) == n\n        if not ok(ws[-1]):\n            return -1\n        lo, hi = 0, len(ws) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(ws[mid]):\n                hi = mid\n            else:\n                lo = mid + 1\n        return ws[lo]",
   "time": "O((n+E) log E)",
   "space": "O(n + E)",
   "explain": "For a limit W, walk the reversed graph from node 0 using edges up to W and check that every node is reached.",
   "frames": [],
   "alt": true
  }
 ]
};
