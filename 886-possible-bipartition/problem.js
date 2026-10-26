window.PROBLEM = {
 "id": "886",
 "title": "Possible Bipartition",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
