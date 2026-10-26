window.PROBLEM = {
 "id": "1519",
 "title": "Number of Nodes in the Sub-Tree With the Same Label",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A tree's nodes carry letters. For every node count the nodes in its subtree (itself included) with the same letter.",
 "idea": "A DFS returns, for each node, an array of 26 letter counts for its subtree: the sum of its children's arrays plus itself. The answer for the node is the count of its own letter.",
 "input": "n=7, edges [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels 'abaedcd'",
 "output": "[2,1,1,1,1,1,1]",
 "notes": [],
 "best": "A DFS returns, for each node, an array of 26 letter counts for its subtree: the sum of its children's arrays plus itself. The answer for the node is the count of its own letter.",
 "variants": [
  {
   "name": "DFS returning letter counts",
   "code": "class Solution:\n    def countSubTrees(self, n, edges, labels):\n        g = defaultdict(list)\n        for a, b in edges:\n            g[a].append(b)\n            g[b].append(a)\n        ans = [0] * n\n        def dfs(u, p):\n            cnt = [0] * 26\n            cnt[ord(labels[u]) - 97] = 1\n            for v in g[u]:\n                if v != p:\n                    sub = dfs(v, u)\n                    for i in range(26): cnt[i] += sub[i]\n            ans[u] = cnt[ord(labels[u]) - 97]\n            return cnt\n        dfs(0, -1)\n        return ans",
   "time": "O(26·n)",
   "space": "O(26·n)",
   "explain": "A DFS returns, for each node, an array of 26 letter counts for its subtree: the sum of its children's arrays plus itself. The answer for the node is the count of its own letter.",
   "frames": []
  }
 ]
};
