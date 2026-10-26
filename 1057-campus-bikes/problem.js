window.PROBLEM = {
 "id": "1057",
 "title": "Campus Bikes",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
