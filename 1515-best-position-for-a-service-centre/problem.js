window.PROBLEM = {
 "id": "1515",
 "title": "Best Position for a Service Centre",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "Find a point (the service centre) that minimises the sum of Euclidean distances to the given customer positions and return that minimum sum (rounded to 5 decimals here). Example: [[0,1],[1,0],[1,2],[2,1]] → 4.0.",
 "why": "Four customers at (0,1), (1,0), (1,2), (2,1): the centre (1,1) gives total distance 4.",
 "idea": "The sum of Euclidean distances to the customers is a convex function of the centre (x, y). Convex functions can be minimised by ternary search: search x in the coordinate range, and for each x search y the same way. A hundred iterations give far more precision than needed; round the answer to 5 decimals.",
 "input": "positions = [[0,1],[1,0],[1,2],[2,1]]",
 "output": "4.0",
 "notes": [],
 "best": "The sum of Euclidean distances to the customers is a convex function of the centre (x, y). Convex functions can be minimised by ternary search: search x in the coordinate range, and for each x search y the same way. A hundred iterations give far more precision than needed; round the answer to 5 decimals.",
 "variants": [
  {
   "name": "Nested ternary search on a convex function",
   "code": "class Solution:\n    def getMinDistSum(self, positions):\n        def total(x, y):\n            return sum(((x - a) ** 2 + (y - b) ** 2) ** 0.5 for a, b in positions)\n        def best_y(x):\n            lo, hi = 0.0, 100.0\n            for _ in range(60):\n                m1 = lo + (hi - lo) / 3\n                m2 = hi - (hi - lo) / 3\n                if total(x, m1) < total(x, m2):\n                    hi = m2\n                else:\n                    lo = m1\n            return total(x, (lo + hi) / 2)\n        lo, hi = 0.0, 100.0\n        for _ in range(60):\n            m1 = lo + (hi - lo) / 3\n            m2 = hi - (hi - lo) / 3\n            if best_y(m1) < best_y(m2):\n                hi = m2\n            else:\n                lo = m1\n        return round(best_y((lo + hi) / 2), 5)",
   "time": "O(iter² · n)",
   "space": "O(1)",
   "explain": "The sum of Euclidean distances to the customers is a convex function of the centre (x, y). Convex functions can be minimised by ternary search: search x in the coordinate range, and for each x search y the same way. A hundred iterations give far more precision than needed; round the answer to 5 decimals.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Gradient descent with shrinking steps",
   "tag": "Alternative",
   "code": "class Solution:\n    def getMinDistSum(self, positions):\n        n = len(positions)\n        x = sum(p[0] for p in positions) / n\n        y = sum(p[1] for p in positions) / n\n        def total(a, b):\n            return sum(((a - p) ** 2 + (b - q) ** 2) ** 0.5 for p, q in positions)\n        step = 10.0\n        best = total(x, y)\n        while step > 1e-9:\n            moved = False\n            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)):\n                nx, ny = x + dx * step, y + dy * step\n                v = total(nx, ny)\n                if v < best:\n                    best, x, y = v, nx, ny\n                    moved = True\n                    break\n            if not moved:\n                step /= 2\n        return round(best, 5)",
   "time": "O(iterations·n)",
   "space": "O(1)",
   "explain": "Start at the centroid and move against the gradient, shrinking the step size when it stops improving.",
   "frames": [],
   "alt": true
  }
 ]
};
