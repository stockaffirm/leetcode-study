window.PROBLEM = {
 "id": "1840",
 "title": "Maximum Building Height",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "n=5, restrictions [[2,1],[4,1]]: heights 0,1,2,1,2 → the maximum is 2.",
 "idea": "Building 1 has height 0 and neighbours differ by at most 1. Sort the restrictions, add (1, 0) and (n, ∞). Sweep left to right then right to left so every limit is consistent with its neighbours (limit ≤ neighbour's limit + distance). Between two consecutive limited buildings at distance d with limits a and b the highest possible peak is (a + b + d) // 2.",
 "input": "n = 5, restrictions = [[2,1],[4,1]]",
 "output": "2",
 "notes": [],
 "best": "Building 1 has height 0 and neighbours differ by at most 1. Sort the restrictions, add (1, 0) and (n, ∞). Sweep left to right then right to left so every limit is consistent with its neighbours (limit ≤ neighbour's limit + distance). Between two consecutive limited buildings at distance d with limits a and b the highest possible peak is (a + b + d) // 2.",
 "variants": [
  {
   "name": "Tighten the limits both ways, then find the peak between limits",
   "code": "class Solution:\n    def maxBuilding(self, n, restrictions):\n        r = sorted([list(x) for x in restrictions] + [[1, 0]])\n        if r[-1][0] != n:\n            r.append([n, n - 1])\n        for i in range(1, len(r)):\n            r[i][1] = min(r[i][1], r[i - 1][1] + r[i][0] - r[i - 1][0])\n        for i in range(len(r) - 2, -1, -1):\n            r[i][1] = min(r[i][1], r[i + 1][1] + r[i + 1][0] - r[i][0])\n        best = 0\n        for (p, hp), (q, hq) in zip(r, r[1:]):\n            best = max(best, (hp + hq + q - p) // 2)\n        return best",
   "time": "O(r log r)",
   "space": "O(r)",
   "explain": "Building 1 has height 0 and neighbours differ by at most 1. Sort the restrictions, add (1, 0) and (n, ∞). Sweep left to right then right to left so every limit is consistent with its neighbours (limit ≤ neighbour's limit + distance). Between two consecutive limited buildings at distance d with limits a and b the highest possible peak is (a + b + d) // 2.",
   "frames": []
  }
 ]
};
