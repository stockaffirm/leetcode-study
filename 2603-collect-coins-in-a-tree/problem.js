window.PROBLEM = {
 "id": "2603",
 "title": "Collect Coins in a Tree",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
