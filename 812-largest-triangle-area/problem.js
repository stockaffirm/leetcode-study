window.PROBLEM = {
 "id": "812",
 "title": "Largest Triangle Area",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
