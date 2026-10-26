window.PROBLEM = {
 "id": "1857",
 "title": "Largest Color Value in a Directed Graph",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
