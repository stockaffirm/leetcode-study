window.PROBLEM = {
 "id": "1743",
 "title": "Restore the Array From Adjacent Pairs",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
