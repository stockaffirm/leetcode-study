window.PROBLEM = {
 "id": "2246",
 "title": "Longest Path With Different Adjacent Characters",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "A tree has nodes 0…n−1 (parent[i] is the parent of i, node 0 is the root) and a letter s[i] on each node. Return the length (number of nodes) of the longest path in the tree in which no two neighbouring nodes have the same letter. Example: parent [−1,0,0,1,1,2], s 'abacbe' → 3.",
 "why": "A tree (parent array) has a letter on each node. Find the longest path (number of nodes) in which no two adjacent nodes share a letter.",
 "idea": "For each node compute the longest downward chain. The best path through a node joins its two longest child chains whose first letters differ from the node's letter.",
 "input": "parent [-1,0,0,1,1,2], s 'abacbe'",
 "output": "3",
 "notes": [],
 "best": "For each node compute the longest downward chain. The best path through a node joins its two longest child chains whose first letters differ from the node's letter.",
 "variants": [
  {
   "name": "Tree DP with the two best child chains",
   "code": "class Solution:\n    def longestPath(self, parent, s):\n        n = len(parent)\n        children = defaultdict(list)\n        for i in range(1, n): children[parent[i]].append(i)\n        best = 1\n        def dfs(u):\n            nonlocal best\n            top1 = top2 = 0\n            for v in children[u]:\n                c = dfs(v)\n                if s[v] != s[u]:\n                    if c > top1: top1, top2 = c, top1\n                    elif c > top2: top2 = c\n            best = max(best, top1 + top2 + 1)\n            return top1 + 1\n        dfs(0)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each node compute the longest downward chain. The best path through a node joins its two longest child chains whose first letters differ from the node's letter.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bottom-up without recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestPath(self, parent, s):\n        n = len(parent)\n        children = defaultdict(list)\n        for i in range(1, n): children[parent[i]].append(i)\n        order, q = [], deque([0])\n        while q:\n            u = q.popleft()\n            order.append(u)\n            q.extend(children[u])\n        top1, top2 = [0] * n, [0] * n\n        best = 1\n        for u in reversed(order):\n            best = max(best, top1[u] + top2[u] + 1)\n            p = parent[u]\n            if p >= 0 and s[u] != s[p]:\n                c = top1[u] + 1\n                if c > top1[p]: top1[p], top2[p] = c, top1[p]\n                elif c > top2[p]: top2[p] = c\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Process the nodes in reverse BFS order and push each chain length into its parent.",
   "frames": [],
   "alt": true
  }
 ]
};
