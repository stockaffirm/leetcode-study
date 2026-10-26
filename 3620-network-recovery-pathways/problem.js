window.PROBLEM = {
 "id": "3620",
 "title": "Network Recovery Pathways",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "edges [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], k=10 → the path 0→2→3 costs 7 with minimum 3 → 3.",
 "idea": "The score of a path is its cheapest edge, and we want the largest score whose path stays within total cost k. Binary search the score s: use only edges with cost ≥ s and find the cheapest path from 0 to n−1 through online intermediate nodes (a DAG (Directed Acyclic Graph), so process in topological order). If that cost is ≤ k then s is achievable.",
 "input": "edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [True,True,True,True], k = 10",
 "output": "3",
 "notes": [],
 "best": "The score of a path is its cheapest edge, and we want the largest score whose path stays within total cost k. Binary search the score s: use only edges with cost ≥ s and find the cheapest path from 0 to n−1 through online intermediate nodes (a DAG (Directed Acyclic Graph), so process in topological order). If that cost is ≤ k then s is achievable.",
 "variants": [
  {
   "name": "Binary search the minimum edge, cheapest path in a DAG",
   "code": "class Solution:\n    def findMaxPathScore(self, edges, online, k):\n        n = len(online)\n        adj = defaultdict(list)\n        indeg = [0] * n\n        for u, v, c in edges:\n            adj[u].append((v, c))\n            indeg[v] += 1\n        order = []\n        ready = [i for i in range(n) if indeg[i] == 0]\n        while ready:\n            u = ready.pop()\n            order.append(u)\n            for v, _ in adj[u]:\n                indeg[v] -= 1\n                if indeg[v] == 0:\n                    ready.append(v)\n        def ok(s):\n            INF = float('inf')\n            dist = [INF] * n\n            dist[0] = 0\n            for u in order:\n                if dist[u] == INF or (u != 0 and u != n - 1 and not online[u]):\n                    continue\n                for v, c in adj[u]:\n                    if c >= s and dist[u] + c < dist[v]:\n                        dist[v] = dist[u] + c\n            return dist[n - 1] <= k\n        if not edges:\n            return -1\n        lo, hi = 0, max(c for _, _, c in edges)\n        if not ok(0):\n            return -1\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if ok(mid):\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O((n + m) log C)",
   "space": "O(n + m)",
   "explain": "The score of a path is its cheapest edge, and we want the largest score whose path stays within total cost k. Binary search the score s: use only edges with cost ≥ s and find the cheapest path from 0 to n−1 through online intermediate nodes (a DAG (Directed Acyclic Graph), so process in topological order). If that cost is ≤ k then s is achievable.",
   "frames": []
  }
 ]
};
