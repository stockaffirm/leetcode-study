window.PROBLEM = {
 "id": "1319",
 "title": "Number of Operations to Make Network Connected",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
