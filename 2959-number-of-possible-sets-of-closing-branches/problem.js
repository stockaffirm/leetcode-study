window.PROBLEM = {
 "id": "2959",
 "title": "Number of Possible Sets of Closing Branches",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "A company has n branches joined by roads. In how many ways can you close some branches (maybe none) so that every remaining pair is within maxDistance of each other (travelling only through remaining branches)?",
 "idea": "n is at most 10, so try all 2ⁿ subsets of branches to keep. For each, compute all shortest distances among the kept branches (Floyd–Warshall) and check they are all ≤ maxDistance.",
 "input": "n=3, maxDistance=5, roads [[0,1,2],[1,2,10],[0,2,10]]",
 "output": "5",
 "notes": [],
 "best": "n is at most 10, so try all 2ⁿ subsets of branches to keep. For each, compute all shortest distances among the kept branches (Floyd–Warshall) and check they are all ≤ maxDistance.",
 "variants": [
  {
   "name": "Try every subset, run Floyd–Warshall",
   "code": "class Solution:\n    def numberOfSets(self, n, maxDistance, roads):\n        INF = float('inf')\n        count = 0\n        for mask in range(1 << n):\n            nodes = [i for i in range(n) if mask >> i & 1]\n            dist = {(a, b): (0 if a == b else INF) for a in nodes for b in nodes}\n            for u, v, w in roads:\n                if mask >> u & 1 and mask >> v & 1:\n                    dist[(u, v)] = min(dist[(u, v)], w)\n                    dist[(v, u)] = min(dist[(v, u)], w)\n            for k in nodes:\n                for i in nodes:\n                    for j in nodes:\n                        if dist[(i, k)] + dist[(k, j)] < dist[(i, j)]: dist[(i, j)] = dist[(i, k)] + dist[(k, j)]\n            if all(dist[(a, b)] <= maxDistance for a in nodes for b in nodes): count += 1\n        return count",
   "time": "O(2ⁿ·n³)",
   "space": "O(n²)",
   "explain": "n is at most 10, so try all 2ⁿ subsets of branches to keep. For each, compute all shortest distances among the kept branches (Floyd–Warshall) and check they are all ≤ maxDistance.",
   "frames": []
  }
 ]
};
