window.PROBLEM = {
 "id": "2467",
 "title": "Most Profitable Path in a Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "There is a tree with n nodes (0 to n−1; node 0 is the root) given by its edges. At each node i there is a gate: amount[i] is the money you receive at that node (positive) or the price you must pay (negative). Bob starts at node bob and walks up towards node 0; Alice starts at node 0 and walks down to ANY leaf (a node with no children below it). Both move one step per second. At a node: whoever arrives first gets/pays the whole amount, if they arrive at the same time each gets/pays half, and after someone has opened a gate it is free. Return Alice's maximum possible net income. Example: edges [[0,1],[1,2],[1,3],[3,4]], bob=3, amount [-2,4,2,-4,6] → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS parents, iterative DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def mostProfitablePath(self, edges, bob, amount):\n        n = len(amount)\n        g = defaultdict(list)\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        parent = [-1] * n\n        q = deque([0])\n        seen = {0}\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                if v not in seen:\n                    seen.add(v)\n                    parent[v] = u\n                    q.append(v)\n        bob_time = [float('inf')] * n\n        u, t = bob, 0\n        while u != -1:\n            bob_time[u] = t\n            u, t = parent[u], t + 1\n        best = float('-inf')\n        stack = [(0, -1, 0, 0)]\n        while stack:\n            u, p, t, gain = stack.pop()\n            if t < bob_time[u]: gain += amount[u]\n            elif t == bob_time[u]: gain += amount[u] // 2\n            kids = [v for v in g[u] if v != p]\n            if not kids: best = max(best, gain)\n            for v in kids: stack.append((v, u, t + 1, gain))\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Get each node's parent with a BFS, time Bob up the parent chain, then walk Alice's routes with a stack.",
   "frames": [],
   "alt": true
  }
 ]
};
