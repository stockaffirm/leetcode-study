window.PROBLEM = {
 "id": "2959",
 "title": "Number of Possible Sets of Closing Branches",
 "level": "Hard",
 "topic": "Graph",
 "question": "A company has n branches numbered 0 to n−1 joined by two-way roads: roads[i] = [a, b, length]. You may close some branches (and all roads touching them) — possibly none. Count the sets of branches you can keep OPEN so that the remaining branches can still reach each other and the shortest distance between any two remaining branches is at most maxDistance. A set that keeps only one branch (or none) counts. Example: n=3, maxDistance=5, roads [[0,1,2],[1,2,10],[0,2,10]] → the sets {}, {0}, {1}, {2}, {0,1} work → 5.",
 "why": "A company has n branches joined by roads. In how many ways can you close some branches (maybe none) so that every remaining pair is within maxDistance of each other (travelling only through remaining branches)?",
 "idea": "n is at most 10, so try all 2ⁿ subsets of branches to keep. For each, compute all shortest distances among the kept branches (Floyd–Warshall) and check they are all ≤ maxDistance.",
 "input": "n=3, maxDistance=5, roads [[0,1,2],[1,2,10],[0,2,10]]",
 "output": "5",
 "notes": [],
 "best": "n is at most 10, so try all 2ⁿ subsets of branches to keep. For each, compute all shortest distances among the kept branches (Floyd–Warshall) and check they are all ≤ maxDistance.",
 "variants": [
  {
   "name": "Try every subset, run Floyd–Warshall",
   "code": "class Solution:\n    def numberOfSets(self, n, maxDistance, roads):\n        INF = float('inf')\n        count = 0\n        for mask in range(1 << n):\n            nodes = [i for i in range(n) if mask >> i & 1]\n            dist = {(a, b): (0 if a == b else INF) for a in nodes for b in nodes}\n            for u, v, w in roads:\n                if mask >> u & 1 and mask >> v & 1:\n                    dist[(u, v)] = min(dist[(u, v)], w)\n                    dist[(v, u)] = min(dist[(v, u)], w)\n            for k in nodes:\n                for i in nodes:\n                    for j in nodes:\n                        if dist[(i, k)] + dist[(k, j)] < dist[(i, j)]: dist[(i, j)] = dist[(i, k)] + dist[(k, j)]\n            if all(dist[(a, b)] <= maxDistance for a in nodes for b in nodes): count += 1\n        return count",
   "time": "O(2ⁿ·n³)",
   "space": "O(n²)",
   "explain": "n is at most 10, so try all 2ⁿ subsets of branches to keep. For each, compute all shortest distances among the kept branches (Floyd–Warshall) and check they are all ≤ maxDistance.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dijkstra from every kept branch",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberOfSets(self, n, maxDistance, roads):\n        count = 0\n        for mask in range(1 << n):\n            keep = [i for i in range(n) if mask >> i & 1]\n            adj = defaultdict(list)\n            for u, v, w in roads:\n                if mask >> u & 1 and mask >> v & 1:\n                    adj[u].append((v, w))\n                    adj[v].append((u, w))\n            ok = True\n            for s in keep:\n                dist = {s: 0}\n                pq = [(0, s)]\n                while pq:\n                    d, u = heappop(pq)\n                    if d > dist[u]: continue\n                    for v, w in adj[u]:\n                        if d + w < dist.get(v, float('inf')):\n                            dist[v] = d + w\n                            heappush(pq, (d + w, v))\n                if any(dist.get(t, float('inf')) > maxDistance for t in keep):\n                    ok = False\n                    break\n            if ok: count += 1\n        return count",
   "time": "O(2ⁿ·n·E log n)",
   "space": "O(n)",
   "explain": "For each subset run Dijkstra from each kept branch instead of Floyd–Warshall.",
   "frames": [],
   "alt": true
  }
 ]
};
