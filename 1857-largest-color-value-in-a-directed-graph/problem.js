window.PROBLEM = {
 "id": "1857",
 "title": "Largest Color Value in a Directed Graph",
 "level": "Hard",
 "topic": "Graph",
 "question": "A directed graph has n nodes, each with a colour letter. The colour value of a path is the number of times its most common colour appears on it. Return the largest colour value over all paths, or −1 if the graph has a cycle (the value is then unbounded). Example: 'abaca', edges [[0,1],[0,2],[2,3],[3,4]] → 3 (path 0→2→3→4 has three 'a').",
 "why": "Each node has a colour letter. The value of a path is the count of its most frequent colour. Find the largest path value in the directed graph, or −1 if it has a cycle.",
 "idea": "Process nodes in topological order (Kahn's algorithm). For each node keep, per colour, the best count of that colour on a path ending there; push these counts to its successors. If fewer than n nodes are processed, there is a cycle.",
 "input": "'abaca', edges [[0,1],[0,2],[2,3],[3,4]]",
 "output": "3",
 "notes": [],
 "best": "Process nodes in topological order (Kahn's algorithm). For each node keep, per colour, the best count of that colour on a path ending there; push these counts to its successors. If fewer than n nodes are processed, there is a cycle.",
 "variants": [
  {
   "name": "Topological order with colour counts",
   "code": "class Solution:\n    def largestPathValue(self, colors, edges):\n        n = len(colors)\n        g = [[] for _ in range(n)]\n        indeg = [0] * n\n        for a, b in edges:\n            g[a].append(b)\n            indeg[b] += 1\n        dp = [[0] * 26 for _ in range(n)]\n        q = deque(i for i in range(n) if indeg[i] == 0)\n        seen = ans = 0\n        while q:\n            u = q.popleft()\n            seen += 1\n            dp[u][ord(colors[u]) - 97] += 1\n            ans = max(ans, max(dp[u]))\n            for v in g[u]:\n                for c in range(26): dp[v][c] = max(dp[v][c], dp[u][c])\n                indeg[v] -= 1\n                if indeg[v] == 0: q.append(v)\n        return ans if seen == n else -1",
   "time": "O(26·(V + E))",
   "space": "O(26·V)",
   "explain": "Process nodes in topological order (Kahn's algorithm). For each node keep, per colour, the best count of that colour on a path ending there; push these counts to its successors. If fewer than n nodes are processed, there is a cycle.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with cycle detection",
   "tag": "Alternative",
   "code": "class Solution:\n    def largestPathValue(self, colors, edges):\n        n = len(colors)\n        g = [[] for _ in range(n)]\n        for a, b in edges: g[a].append(b)\n        state = [0] * n\n        memo = [None] * n\n        def dfs(u):\n            if state[u] == 1: return None\n            if state[u] == 2: return memo[u]\n            state[u] = 1\n            best = [0] * 26\n            for v in g[u]:\n                sub = dfs(v)\n                if sub is None: return None\n                for c in range(26): best[c] = max(best[c], sub[c])\n            best[ord(colors[u]) - 97] += 1\n            state[u] = 2\n            memo[u] = best\n            return best\n        ans = 0\n        for u in range(n):\n            r = dfs(u)\n            if r is None: return -1\n            ans = max(ans, max(r))\n        return ans",
   "time": "O(26·(V + E))",
   "space": "O(26·V)",
   "explain": "For every node compute the best colour counts of paths starting there; 'visiting' marks detect a cycle.",
   "frames": [],
   "alt": true
  }
 ]
};
