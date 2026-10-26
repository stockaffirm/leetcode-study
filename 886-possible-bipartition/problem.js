window.PROBLEM = {
 "id": "886",
 "title": "Possible Bipartition",
 "level": "Medium",
 "topic": "Graph",
 "question": "There are n people labelled 1 to n. dislikes[i] = [a, b] means person a and person b do not want to be in the same group. Return true if you can split everyone into two groups (any sizes) so that no pair that dislikes each other is in the same group. Example: n=4, dislikes [[1,2],[1,3],[2,4]] → groups {1,4} and {2,3} → true; if all three of 1, 2, 3 dislike each other → false.",
 "why": "Split n people into two groups so that nobody is in the same group as someone they dislike.",
 "idea": "Draw dislike lines between people and try to colour everyone with two colours so connected people differ (BFS). If two people who dislike each other end up the same colour, it is impossible.",
 "input": "n=4, dislikes [[1,2],[1,3],[2,4]]",
 "output": "True",
 "notes": [],
 "best": "Draw dislike lines between people and try to colour everyone with two colours so connected people differ (BFS). If two people who dislike each other end up the same colour, it is impossible.",
 "variants": [
  {
   "name": "BFS 2-colouring",
   "code": "class Solution:\n    def possibleBipartition(self, n, dislikes):\n        g = defaultdict(list)\n        for a, b in dislikes:\n            g[a].append(b)\n            g[b].append(a)\n        color = {}\n        for s in range(1, n + 1):\n            if s in color: continue\n            color[s] = 0\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if v not in color:\n                        color[v] = 1 - color[u]\n                        q.append(v)\n                    elif color[v] == color[u]: return False\n        return True",
   "time": "O(n + E)",
   "space": "O(n + E)",
   "explain": "Draw dislike lines between people and try to colour everyone with two colours so connected people differ (BFS). If two people who dislike each other end up the same colour, it is impossible.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Union-find with 'enemy' nodes",
   "tag": "Alternative",
   "code": "class Solution:\n    def possibleBipartition(self, n, dislikes):\n        parent = list(range(2 * (n + 1)))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for a, b in dislikes:\n            if find(a) == find(b): return False\n            parent[find(a)] = find(b + n + 1)\n            parent[find(b)] = find(a + n + 1)\n        return True",
   "time": "O(E·α)",
   "space": "O(n)",
   "explain": "Each person gets a twin 'enemy' node; disliking means joining a with b's enemy and b with a's enemy.",
   "frames": [],
   "alt": true
  }
 ]
};
