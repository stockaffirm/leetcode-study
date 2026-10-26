window.PROBLEM = {
 "id": "549",
 "title": "Binary Tree Longest Consecutive Sequence II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return the length of the longest path in a binary tree whose values are consecutive: each step changes the value by +1 (increasing) or by −1 (decreasing) — all steps the same way. The path may go from a child up to its parent and down into the other child. Example: [1,2,3] → 2; [2,1,3] → 3.",
 "why": "Find the longest path in a binary tree whose values are consecutive (…+1 each step or −1 each step); the path may go up to a parent and down again.",
 "idea": "For every node compute the longest increasing and decreasing chain going down from it. A path through the node joins an increasing chain on one side with a decreasing chain on the other: length = inc + dec − 1.",
 "input": "[2,1,3]",
 "output": "3",
 "notes": [],
 "best": "For every node compute the longest increasing and decreasing chain going down from it. A path through the node joins an increasing chain on one side with a decreasing chain on the other: length = inc + dec − 1.",
 "variants": [
  {
   "name": "Increasing and decreasing chains through each node",
   "code": "class Solution:\n    def longestConsecutive(self, root):\n        best = 0\n        def dfs(node):\n            nonlocal best\n            if not node: return 0, 0\n            inc = dec = 1\n            for child in (node.left, node.right):\n                ci, cd = dfs(child)\n                if child and child.val == node.val + 1: inc = max(inc, ci + 1)\n                if child and child.val == node.val - 1: dec = max(dec, cd + 1)\n            best = max(best, inc + dec - 1)\n            return inc, dec\n        dfs(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For every node compute the longest increasing and decreasing chain going down from it. A path through the node joins an increasing chain on one side with a decreasing chain on the other: length = inc + dec − 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Longest ±1 path in the undirected tree",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestConsecutive(self, root):\n        g = defaultdict(list)\n        def build(n):\n            for c in (n.left, n.right):\n                if c:\n                    g[n].append(c)\n                    g[c].append(n)\n                    build(c)\n        if not root: return 0\n        build(root)\n        def longest(u, prev, step):\n            best = 1\n            for v in g[u]:\n                if v is not prev and v.val == u.val + step: best = max(best, 1 + longest(v, u, step))\n            return best\n        ans = 1\n        for u in list(g) or [root]:\n            ans = max(ans, longest(u, None, 1) + longest(u, None, -1) - 1)\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Treat the tree as an undirected graph and, for each node and each direction (+1 or −1), find the longest path that keeps stepping by that amount.",
   "frames": [],
   "alt": true
  }
 ]
};
