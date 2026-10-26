window.PROBLEM = {
 "id": "2858",
 "title": "Minimum Edge Reversals So Every Node Is Reachable",
 "level": "Hard",
 "topic": "Graph",
 "question": "A tree of n nodes has its edges directed. For each node i, find the minimum number of edge reversals needed so that starting from i you can reach every other node following the directions. Return the answers for all nodes. Example: n=4, edges [[2,0],[2,1],[1,3]] → [1,1,0,2].",
 "why": "A tree has directed edges. For each node as the start, how few edges must be reversed so that every node can be reached from it?",
 "idea": "Treat every edge as two-way: going along it costs 0, against its direction costs 1. Compute the cost for root 0, then move the root across an edge: the cost goes up by 1 if the edge pointed away from the old root, otherwise down by 1.",
 "input": "n=4, edges [[2,0],[2,1],[1,3]]",
 "output": "[1,1,0,2]",
 "notes": [],
 "best": "Treat every edge as two-way: going along it costs 0, against its direction costs 1. Compute the cost for root 0, then move the root across an edge: the cost goes up by 1 if the edge pointed away from the old root, otherwise down by 1.",
 "variants": [
  {
   "name": "Re-rooting",
   "code": "class Solution:\n    def minEdgeReversals(self, n, edges):\n        g = defaultdict(list)\n        for u, v in edges:\n            g[u].append((v, 0))\n            g[v].append((u, 1))\n        seen = [False] * n\n        seen[0] = True\n        st, total = [0], 0\n        while st:\n            u = st.pop()\n            for v, w in g[u]:\n                if not seen[v]:\n                    seen[v] = True\n                    total += w\n                    st.append(v)\n        ans = [0] * n\n        ans[0] = total\n        seen = [False] * n\n        seen[0] = True\n        q = deque([0])\n        while q:\n            u = q.popleft()\n            for v, w in g[u]:\n                if not seen[v]:\n                    seen[v] = True\n                    ans[v] = ans[u] + (1 if w == 0 else -1)\n                    q.append(v)\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Treat every edge as two-way: going along it costs 0, against its direction costs 1. Compute the cost for root 0, then move the root across an edge: the cost goes up by 1 if the edge pointed away from the old root, otherwise down by 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every root",
   "tag": "Brute force",
   "code": "class Solution:\n    def minEdgeReversals(self, n, edges):\n        g = defaultdict(list)\n        for u, v in edges:\n            g[u].append((v, 0))\n            g[v].append((u, 1))\n        ans = []\n        for root in range(n):\n            seen, st, cost = {root}, [root], 0\n            while st:\n                u = st.pop()\n                for v, w in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        cost += w\n                        st.append(v)\n            ans.append(cost)\n        return ans",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each root run a search counting the edges that point the wrong way.",
   "frames": [],
   "alt": true
  }
 ]
};
