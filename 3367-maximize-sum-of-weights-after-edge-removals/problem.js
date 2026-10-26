window.PROBLEM = {
 "id": "3367",
 "title": "Maximize Sum of Weights after Edge Removals",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
