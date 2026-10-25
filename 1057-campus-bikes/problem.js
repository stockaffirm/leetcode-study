window.PROBLEM = {
 "id": "1057",
 "title": "Campus Bikes",
 "level": "Medium",
 "topic": "Greedy",
 "question": "There are n workers and m bikes (m ≥ n) on a grid, all given as [x, y] points. Assign each worker a different bike by repeating this rule: among all unassigned worker–bike pairs choose the pair with the smallest Manhattan distance (|x1 − x2| + |y1 − y2|); if several pairs tie, pick the one with the smallest worker index, and if still tied the smallest bike index. Return a list where entry i is the bike given to worker i. Example: workers [[0,0],[2,1]], bikes [[1,2],[3,3]] → worker 1 takes bike 0 (distance 2), then worker 0 gets bike 1 → [1,0].",
 "why": "Assign each worker a different bike: always take the (worker, bike) pair with the smallest walking distance; break ties by smaller worker, then smaller bike.",
 "idea": "List every worker–bike pair as (distance, worker, bike), sort them, and walk through: if both the worker and the bike are still free, make the assignment.",
 "input": "workers [[0,0],[2,1]], bikes [[1,2],[3,3]]",
 "output": "[1, 0]",
 "notes": [],
 "best": "List every worker–bike pair as (distance, worker, bike), sort them, and walk through: if both the worker and the bike are still free, make the assignment.",
 "variants": [
  {
   "name": "Sort all (distance, worker, bike) triples",
   "code": "class Solution:\n    def assignBikes(self, workers, bikes):\n        pairs = sorted((abs(wx - bx) + abs(wy - by), i, j)\n                       for i, (wx, wy) in enumerate(workers) for j, (bx, by) in enumerate(bikes))\n        ans, used = [-1] * len(workers), set()\n        for d, i, j in pairs:\n            if ans[i] == -1 and j not in used:\n                ans[i] = j\n                used.add(j)\n        return ans",
   "time": "O(W·B log(W·B))",
   "space": "O(W·B)",
   "explain": "List every worker–bike pair as (distance, worker, bike), sort them, and walk through: if both the worker and the bike are still free, make the assignment.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bucket pairs by distance",
   "tag": "Alternative",
   "code": "class Solution:\n    def assignBikes(self, workers, bikes):\n        buckets = defaultdict(list)\n        for i, (wx, wy) in enumerate(workers):\n            for j, (bx, by) in enumerate(bikes):\n                buckets[abs(wx - bx) + abs(wy - by)].append((i, j))\n        ans, used = [-1] * len(workers), set()\n        for d in sorted(buckets):\n            for i, j in buckets[d]:\n                if ans[i] == -1 and j not in used:\n                    ans[i] = j\n                    used.add(j)\n        return ans",
   "time": "O(W·B)",
   "space": "O(W·B)",
   "explain": "Distances are small, so put the pairs in buckets by distance instead of sorting everything.",
   "frames": [],
   "alt": true
  }
 ]
};
