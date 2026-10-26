window.PROBLEM = {
 "id": "834",
 "title": "Sum of Distances in Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "n=6, edges [[0,1],[0,2],[2,3],[2,4],[2,5]] → [8,12,6,10,10,10].",
 "idea": "Compute, for the root 0, the subtree sizes and the sum of distances from the root. Moving the root from a parent p to its child c brings the c-subtree one step closer (size[c] nodes) and everything else one step farther (n − size[c] nodes): ans[c] = ans[p] − size[c] + (n − size[c]).",
 "input": "n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]",
 "output": "[8, 12, 6, 10, 10, 10]",
 "notes": [],
 "best": "Compute, for the root 0, the subtree sizes and the sum of distances from the root. Moving the root from a parent p to its child c brings the c-subtree one step closer (size[c] nodes) and everything else one step farther (n − size[c] nodes): ans[c] = ans[p] − size[c] + (n − size[c]).",
 "variants": [
  {
   "name": "Rerooting: answer[child] from answer[parent]",
   "code": "class Solution:\n    def sumOfDistancesInTree(self, n, edges):\n        adj = defaultdict(list)\n        for a, b in edges:\n            adj[a].append(b)\n            adj[b].append(a)\n        order = []\n        parent = [-1] * n\n        stack = [0]\n        while stack:\n            u = stack.pop()\n            order.append(u)\n            for v in adj[u]:\n                if v != parent[u]:\n                    parent[v] = u\n                    stack.append(v)\n        size = [1] * n\n        down = [0] * n\n        for u in reversed(order):\n            p = parent[u]\n            if p != -1:\n                size[p] += size[u]\n                down[p] += down[u] + size[u]\n        ans = [0] * n\n        ans[0] = down[0]\n        for u in order[1:]:\n            ans[u] = ans[parent[u]] - size[u] + (n - size[u])\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Compute, for the root 0, the subtree sizes and the sum of distances from the root. Moving the root from a parent p to its child c brings the c-subtree one step closer (size[c] nodes) and everything else one step farther (n − size[c] nodes): ans[c] = ans[p] − size[c] + (n − size[c]).",
   "frames": []
  }
 ]
};
