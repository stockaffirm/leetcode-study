window.PROBLEM = {
 "id": "1042",
 "title": "Flower Planting With No Adjacent",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "3 gardens in a triangle: 1, 2, 3.",
 "idea": "Each garden has at most 3 neighbours and there are 4 flower types, so a free type always exists. Go through the gardens in order and give each the smallest type not used by an already-coloured neighbour.",
 "input": "n = 3, paths = [[1,2],[2,3],[3,1]]",
 "output": "[1, 2, 3]",
 "notes": [],
 "best": "Each garden has at most 3 neighbours and there are 4 flower types, so a free type always exists. Go through the gardens in order and give each the smallest type not used by an already-coloured neighbour.",
 "variants": [
  {
   "name": "Greedy: pick a colour no neighbour uses",
   "code": "class Solution:\n    def gardenNoAdj(self, n, paths):\n        g = defaultdict(list)\n        for a, b in paths:\n            g[a].append(b)\n            g[b].append(a)\n        color = [0] * (n + 1)\n        for u in range(1, n + 1):\n            used = {color[v] for v in g[u]}\n            color[u] = next(c for c in range(1, 5) if c not in used)\n        return color[1:]",
   "time": "O(n + p)",
   "space": "O(n + p)",
   "explain": "Each garden has at most 3 neighbours and there are 4 flower types, so a free type always exists. Go through the gardens in order and give each the smallest type not used by an already-coloured neighbour.",
   "frames": []
  }
 ]
};
