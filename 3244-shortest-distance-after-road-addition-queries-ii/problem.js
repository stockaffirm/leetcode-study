window.PROBLEM = {
 "id": "3244",
 "title": "Shortest Distance After Road Addition Queries II",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "n=5, queries [[2,4],[0,2],[0,4]] → [3,2,1].",
 "idea": "Roads never cross, so the shortest path is the chain of the 'outermost' roads. Keep next[i] = where city i's best road goes (initially i + 1) and the current path length. For a new road (u, v) with u still on the path and next[u] < v, walk from next[u] to v removing every city jumped over (each removal shortens the path by 1) and set next[u] = v.",
 "input": "n = 5, queries = [[2,4],[0,2],[0,4]]",
 "output": "[3, 2, 1]",
 "notes": [],
 "best": "Roads never cross, so the shortest path is the chain of the 'outermost' roads. Keep next[i] = where city i's best road goes (initially i + 1) and the current path length. For a new road (u, v) with u still on the path and next[u] < v, walk from next[u] to v removing every city jumped over (each removal shortens the path by 1) and set next[u] = v.",
 "variants": [
  {
   "name": "Skip pointers: each new road deletes the cities it jumps over",
   "code": "class Solution:\n    def shortestDistanceAfterQueries(self, n, queries):\n        nxt = list(range(1, n + 1))\n        dist = n - 1\n        res = []\n        for u, v in queries:\n            if nxt[u] != -1 and nxt[u] < v:\n                i = nxt[u]\n                while i < v:\n                    dist -= 1\n                    tmp = nxt[i]\n                    nxt[i] = -1\n                    i = tmp\n                nxt[u] = v\n            res.append(dist)\n        return res",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "Roads never cross, so the shortest path is the chain of the 'outermost' roads. Keep next[i] = where city i's best road goes (initially i + 1) and the current path length. For a new road (u, v) with u still on the path and next[u] < v, walk from next[u] to v removing every city jumped over (each removal shortens the path by 1) and set next[u] = v.",
   "frames": []
  }
 ]
};
