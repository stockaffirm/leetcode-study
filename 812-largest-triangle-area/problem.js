window.PROBLEM = {
 "id": "812",
 "title": "Largest Triangle Area",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Return the area of the largest triangle that can be formed by any three of the given points. Example: [[0,0],[0,1],[1,0],[0,2],[2,0]] → 2.0.",
 "why": "Points (0,0),(0,1),(1,0),(0,2),(2,0): the largest triangle has area 2.",
 "idea": "Try every triple of points and compute the area with the cross-product (shoelace) formula |x1(y2−y3) + x2(y3−y1) + x3(y1−y2)| / 2.",
 "input": "points = [[0,0],[0,1],[1,0],[0,2],[2,0]]",
 "output": "2.0",
 "notes": [],
 "best": "Try every triple of points and compute the area with the cross-product (shoelace) formula |x1(y2−y3) + x2(y3−y1) + x3(y1−y2)| / 2.",
 "variants": [
  {
   "name": "Shoelace formula over all triples",
   "code": "class Solution:\n    def largestTriangleArea(self, points):\n        best = 0\n        for (x1, y1), (x2, y2), (x3, y3) in combinations(points, 3):\n            best = max(best, abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2)\n        return best",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Try every triple of points and compute the area with the cross-product (shoelace) formula |x1(y2−y3) + x2(y3−y1) + x3(y1−y2)| / 2.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Cross product of vectors",
   "tag": "Alternative",
   "code": "class Solution:\n    def largestTriangleArea(self, points):\n        best = 0\n        n = len(points)\n        for i in range(n):\n            for j in range(i + 1, n):\n                for k in range(j + 1, n):\n                    ax, ay = points[j][0] - points[i][0], points[j][1] - points[i][1]\n                    bx, by = points[k][0] - points[i][0], points[k][1] - points[i][1]\n                    best = max(best, abs(ax * by - ay * bx) / 2)\n        return best",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Area = half the absolute cross product of two edge vectors.",
   "frames": [],
   "alt": true
  }
 ]
};
