window.PROBLEM = {
 "id": "1743",
 "title": "Restore the Array From Adjacent Pairs",
 "level": "Medium",
 "topic": "Graph",
 "question": "There is a hidden list of n different numbers. You are given adjacentPairs: every pair of numbers that sit next to each other in the hidden list (in either order, and the pairs themselves in any order). Return the hidden list (if there are two answers, either one — the list or its reverse — is accepted). Example: pairs [[2,1],[3,4],[3,2]] → [1,2,3,4].",
 "why": "You get all neighbouring pairs of a hidden array (in any order). Rebuild the array (either direction is fine).",
 "idea": "Treat pairs as edges of a path. The two ends of the path are the only values that appear once; start at one end and keep stepping to the neighbour you did not come from.",
 "input": "[[2,1],[3,4],[3,2]]",
 "output": "[1, 2, 3, 4]",
 "notes": [],
 "best": "Treat pairs as edges of a path. The two ends of the path are the only values that appear once; start at one end and keep stepping to the neighbour you did not come from.",
 "variants": [
  {
   "name": "Find an end, walk the chain",
   "code": "class Solution:\n    def restoreArray(self, adjacentPairs):\n        g = defaultdict(list)\n        for a, b in adjacentPairs:\n            g[a].append(b)\n            g[b].append(a)\n        start = min(x for x in g if len(g[x]) == 1)\n        res, prev = [start], None\n        cur = start\n        while len(res) < len(g):\n            nxt = g[cur][0] if g[cur][0] != prev else g[cur][1]\n            res.append(nxt)\n            prev, cur = cur, nxt\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Treat pairs as edges of a path. The two ends of the path are the only values that appear once; start at one end and keep stepping to the neighbour you did not come from.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk with a visited set",
   "tag": "Alternative",
   "code": "class Solution:\n    def restoreArray(self, adjacentPairs):\n        g = defaultdict(set)\n        for a, b in adjacentPairs:\n            g[a].add(b)\n            g[b].add(a)\n        start = min(x for x in g if len(g[x]) == 1)\n        res = [start]\n        seen = {start}\n        cur = start\n        while len(res) < len(g):\n            cur = next(v for v in g[cur] if v not in seen)\n            seen.add(cur)\n            res.append(cur)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Same chain walk, but avoiding revisits with a set instead of remembering the previous value.",
   "frames": [],
   "alt": true
  }
 ]
};
