window.PROBLEM = {
 "id": "2603",
 "title": "Collect Coins in a Tree",
 "level": "Hard",
 "topic": "Graph",
 "question": "A tree has coins on some nodes. You start at any node and may repeatedly (1) collect all coins within distance 2 of where you stand, or (2) move to a neighbouring node. You must end where you started. Return the minimum number of edges you must traverse. Example: coins [1,0,0,0,0,1], path 0–1–2–3–4–5 → 2.",
 "why": "A tree with coins on some nodes. Start anywhere; from a node you can collect all coins within distance 2. You must return to the start. Minimise the number of edges walked.",
 "idea": "First strip off leaves without coins (repeatedly). Then peel off two more layers of leaves: a coin there can be picked up from two steps away. The remaining tree must be walked fully, each edge twice.",
 "input": "coins [1,0,0,0,0,1], path graph of 6 nodes",
 "output": "2",
 "notes": [],
 "best": "First strip off leaves without coins (repeatedly). Then peel off two more layers of leaves: a coin there can be picked up from two steps away. The remaining tree must be walked fully, each edge twice.",
 "variants": [
  {
   "name": "Trim coinless leaves, then two layers",
   "code": "class Solution:\n    def collectTheCoins(self, coins, edges):\n        n = len(coins)\n        g = defaultdict(set)\n        for a, b in edges:\n            g[a].add(b)\n            g[b].add(a)\n        deg = [len(g[i]) for i in range(n)]\n        alive = set(range(n))\n        q = deque(i for i in range(n) if deg[i] <= 1 and coins[i] == 0)\n        queued = set(q)\n        while q:\n            u = q.popleft()\n            alive.discard(u)\n            for v in g[u]:\n                if v in alive:\n                    deg[v] -= 1\n                    if deg[v] <= 1 and coins[v] == 0 and v not in queued:\n                        queued.add(v)\n                        q.append(v)\n        for _ in range(2):\n            leaves = [u for u in alive if deg[u] <= 1]\n            for u in leaves:\n                alive.discard(u)\n                for v in g[u]:\n                    if v in alive: deg[v] -= 1\n        return 2 * max(0, len(alive) - 1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "First strip off leaves without coins (repeatedly). Then peel off two more layers of leaves: a coin there can be picked up from two steps away. The remaining tree must be walked fully, each edge twice.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every start and every pickup choice",
   "tag": "Brute force",
   "code": "class Solution:\n    def collectTheCoins(self, coins, edges):\n        n = len(coins)\n        g = defaultdict(list)\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        def bfs(s):\n            dist, par, q = {s: 0}, {s: -1}, deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if v not in dist:\n                        dist[v], par[v] = dist[u] + 1, u\n                        q.append(v)\n            return dist, par\n        info = [bfs(s) for s in range(n)]\n        cnodes = [i for i in range(n) if coins[i]]\n        if not cnodes: return 0\n        opts = [[v for v in range(n) if info[c][0][v] <= 2] for c in cnodes]\n        best = float('inf')\n        for s in range(n):\n            par = info[s][1]\n            for combo in product(*opts):\n                used = set()\n                for t in combo:\n                    u = t\n                    while u != s:\n                        used.add((u, par[u]))\n                        u = par[u]\n                best = min(best, 2 * len(used))\n        return best",
   "time": "exponential (tiny trees)",
   "space": "O(n)",
   "explain": "For each start node and each way to pick a node within distance 2 of every coin, count the edges of the walk's tree.",
   "frames": [],
   "alt": true
  }
 ]
};
