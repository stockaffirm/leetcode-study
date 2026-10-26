window.PROBLEM = {
 "id": "2467",
 "title": "Most Profitable Path in a Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Alice walks from the root to a leaf, Bob walks from his node up to the root, both one step per second. Each node's gate gives/costs money: if both arrive together they split it. Maximise Alice's money.",
 "idea": "First compute when Bob reaches each node on his way to the root. Then DFS Alice's walk: at a node, she takes all of it if she is earlier than Bob, half if at the same time, nothing if Bob was first. Keep the best leaf total.",
 "input": "edges [[0,1],[1,2],[1,3],[3,4]], bob=3, amount [-2,4,2,-4,6]",
 "output": "6",
 "notes": [],
 "best": "First compute when Bob reaches each node on his way to the root. Then DFS Alice's walk: at a node, she takes all of it if she is earlier than Bob, half if at the same time, nothing if Bob was first. Keep the best leaf total.",
 "variants": [
  {
   "name": "Bob's arrival times, then DFS for Alice",
   "code": "class Solution:\n    def mostProfitablePath(self, edges, bob, amount):\n        n = len(amount)\n        g = defaultdict(list)\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        bob_time = {}\n        def find(u, p, d):\n            if u == 0:\n                bob_time[u] = d\n                return True\n            for v in g[u]:\n                if v != p and find(v, u, d + 1):\n                    bob_time[u] = d\n                    return True\n            return False\n        find(bob, -1, 0)\n        best = float('-inf')\n        def go(u, p, t, gain):\n            nonlocal best\n            bt = bob_time.get(u, float('inf'))\n            if t < bt: gain += amount[u]\n            elif t == bt: gain += amount[u] // 2\n            kids = [v for v in g[u] if v != p]\n            if not kids: best = max(best, gain)\n            for v in kids: go(v, u, t + 1, gain)\n        go(0, -1, 0, 0)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "First compute when Bob reaches each node on his way to the root. Then DFS Alice's walk: at a node, she takes all of it if she is earlier than Bob, half if at the same time, nothing if Bob was first. Keep the best leaf total.",
   "frames": []
  }
 ]
};
