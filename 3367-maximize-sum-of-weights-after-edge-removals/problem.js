window.PROBLEM = {
 "id": "3367",
 "title": "Maximize Sum of Weights after Edge Removals",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A tree has n nodes and weighted edges. You may delete some edges so that every node ends up with at most k edges. Return the largest possible sum of the weights of the edges that remain. Example: edges [[0,1,4],[0,2,2],[2,3,12],[2,4,6]], k=2 → 22 (delete the edge of weight 2).",
 "why": "A tree with weighted edges: remove edges so every node keeps at most k edges, and the total weight of the kept edges is as big as possible.",
 "idea": "For each node return two values: the best total in its subtree if the edge to the parent is NOT kept (it may keep k child edges), and if it IS kept (only k−1 child edges left). For each child, keeping the edge gains (child's 'kept' value + weight − child's 'not kept' value); take the largest positive gains.",
 "input": "edges [[0,1,4],[0,2,2],[2,3,12],[2,4,6]], k=2",
 "output": "22",
 "notes": [],
 "best": "For each node return two values: the best total in its subtree if the edge to the parent is NOT kept (it may keep k child edges), and if it IS kept (only k−1 child edges left). For each child, keeping the edge gains (child's 'kept' value + weight − child's 'not kept' value); take the largest positive gains.",
 "variants": [
  {
   "name": "Tree DP with best gains",
   "code": "class Solution:\n    def maximizeSumOfWeights(self, edges, k):\n        g = defaultdict(list)\n        for u, v, w in edges:\n            g[u].append((v, w))\n            g[v].append((u, w))\n        def dfs(u, p):\n            base, gains = 0, []\n            for v, w in g[u]:\n                if v == p: continue\n                a, b = dfs(v, u)\n                base += a\n                if b + w - a > 0: gains.append(b + w - a)\n            gains.sort(reverse=True)\n            return base + sum(gains[:k]), base + sum(gains[:k - 1])\n        return dfs(0, -1)[0]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each node return two values: the best total in its subtree if the edge to the parent is NOT kept (it may keep k child edges), and if it IS kept (only k−1 child edges left). For each child, keeping the edge gains (child's 'kept' value + weight − child's 'not kept' value); take the largest positive gains.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every subset of edges",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximizeSumOfWeights(self, edges, k):\n        n = len(edges) + 1\n        best = 0\n        for mask in range(1 << len(edges)):\n            deg = [0] * n\n            total = 0\n            for i, (u, v, w) in enumerate(edges):\n                if mask >> i & 1:\n                    deg[u] += 1\n                    deg[v] += 1\n                    total += w\n            if max(deg) <= k: best = max(best, total)\n        return best",
   "time": "O(2^e · e)",
   "space": "O(n)",
   "explain": "For tiny trees enumerate all subsets of edges and keep the best valid one.",
   "frames": [],
   "alt": true
  }
 ]
};
