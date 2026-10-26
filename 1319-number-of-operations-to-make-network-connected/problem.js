window.PROBLEM = {
 "id": "1319",
 "title": "Number of Operations to Make Network Connected",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "n computers are connected by cables (connections). In one operation you may move a cable from one pair of computers to another pair. Return the minimum number of operations to connect all computers, or −1 if there are not enough cables. Example: n=4, connections [[0,1],[0,2],[1,2]] → 1.",
 "why": "The computers 0, 1, 2 are already wired (with one spare cable), computer 3 is alone: move the spare cable → 1 operation.",
 "idea": "To connect n computers you need at least n − 1 cables, otherwise the answer is −1. With enough cables each extra component needs exactly one move, so the answer is (number of connected components − 1). Count the components with Union Find.",
 "input": "n = 4, connections = [[0,1],[0,2],[1,2]]",
 "output": "1",
 "notes": [],
 "best": "To connect n computers you need at least n − 1 cables, otherwise the answer is −1. With enough cables each extra component needs exactly one move, so the answer is (number of connected components − 1). Count the components with Union Find.",
 "variants": [
  {
   "name": "Count components with Union Find",
   "code": "class Solution:\n    def makeConnected(self, n, connections):\n        if len(connections) < n - 1:\n            return -1\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        comps = n\n        for a, b in connections:\n            ra, rb = find(a), find(b)\n            if ra != rb:\n                parent[ra] = rb\n                comps -= 1\n        return comps - 1",
   "time": "O(n + E)",
   "space": "O(n)",
   "explain": "To connect n computers you need at least n − 1 cables, otherwise the answer is −1. With enough cables each extra component needs exactly one move, so the answer is (number of connected components − 1). Count the components with Union Find.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count components with DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def makeConnected(self, n, connections):\n        if len(connections) < n - 1:\n            return -1\n        g = defaultdict(list)\n        for a, b in connections:\n            g[a].append(b)\n            g[b].append(a)\n        seen = set()\n        comps = 0\n        for s in range(n):\n            if s in seen:\n                continue\n            comps += 1\n            stack = [s]\n            seen.add(s)\n            while stack:\n                u = stack.pop()\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        stack.append(v)\n        return comps - 1",
   "time": "O(n + E)",
   "space": "O(n + E)",
   "explain": "Build the graph and count how many separate groups the DFS finds.",
   "frames": [],
   "alt": true
  }
 ]
};
