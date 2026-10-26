window.PROBLEM = {
 "id": "3772",
 "title": "Maximum Subgraph Score in a Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "n=3 path 0–1–2, good [1,0,1] → every node can take the whole tree: score 1.",
 "idea": "Score a node +1 if good and −1 if bad. For a tree rooted at 0, down[v] = score[v] + sum over children of max(0, down[child]) is the best connected subgraph below v containing v. Then reroot: for a child c of p, the contribution of p's side is max(0, full[p] − max(0, down[c])), so full[c] = down[c] + that. full[v] is the answer for v.",
 "input": "n = 3, edges = [[0,1],[1,2]], good = [1,0,1]",
 "output": "[1, 1, 1]",
 "notes": [],
 "best": "Score a node +1 if good and −1 if bad. For a tree rooted at 0, down[v] = score[v] + sum over children of max(0, down[child]) is the best connected subgraph below v containing v. Then reroot: for a child c of p, the contribution of p's side is max(0, full[p] − max(0, down[c])), so full[c] = down[c] + that. full[v] is the answer for v.",
 "variants": [
  {
   "name": "Rerooting DP: best connected subgraph containing each node",
   "code": "class Solution:\n    def maxSubgraphScore(self, n, edges, good):\n        adj = defaultdict(list)\n        for a, b in edges:\n            adj[a].append(b)\n            adj[b].append(a)\n        val = [1 if g else -1 for g in good]\n        parent = [-1] * n\n        order = []\n        stack = [0]\n        while stack:\n            u = stack.pop()\n            order.append(u)\n            for v in adj[u]:\n                if v != parent[u]:\n                    parent[v] = u\n                    stack.append(v)\n        down = val[:]\n        for u in reversed(order):\n            if parent[u] != -1:\n                down[parent[u]] += max(0, down[u])\n        full = down[:]\n        for u in order:\n            if parent[u] != -1:\n                p = parent[u]\n                full[u] = down[u] + max(0, full[p] - max(0, down[u]))\n        return full",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Score a node +1 if good and −1 if bad. For a tree rooted at 0, down[v] = score[v] + sum over children of max(0, down[child]) is the best connected subgraph below v containing v. Then reroot: for a child c of p, the contribution of p's side is max(0, full[p] − max(0, down[c])), so full[c] = down[c] + that. full[v] is the answer for v.",
   "frames": []
  }
 ]
};
