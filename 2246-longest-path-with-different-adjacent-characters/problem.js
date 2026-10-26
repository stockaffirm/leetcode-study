window.PROBLEM = {
 "id": "2246",
 "title": "Longest Path With Different Adjacent Characters",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
