window.PROBLEM = {
 "id": "2013",
 "title": "Detect Squares",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "add (3,10), (11,2), (3,2); count (11,10) → 1 square.",
 "idea": "Store how many times each point was added. To count squares with the query point (x, y) as one corner, look at every stored point (px, py) that could be the opposite corner: |px − x| == |py − y| > 0. The other two corners are (x, py) and (px, y); multiply the three counts.",
 "input": "DetectSquares(); add([3,10]); add([11,2]); add([3,2]); count([11,10]); count([14,8]); add([11,2]); count([11,10])",
 "output": "[None, None, None, 1, 0, None, 2]",
 "notes": [],
 "best": "Store how many times each point was added. To count squares with the query point (x, y) as one corner, look at every stored point (px, py) that could be the opposite corner: |px − x| == |py − y| > 0. The other two corners are (x, py) and (px, y); multiply the three counts.",
 "variants": [
  {
   "name": "Counter of points, scan matching diagonals",
   "code": "class DetectSquares:\n    def __init__(self):\n        self.cnt = Counter()\n\n    def add(self, point):\n        self.cnt[tuple(point)] += 1\n\n    def count(self, point):\n        x, y = point\n        total = 0\n        for (px, py), c in list(self.cnt.items()):\n            if abs(px - x) == abs(py - y) and px != x:\n                total += c * self.cnt[(x, py)] * self.cnt[(px, y)]\n        return total",
   "time": "O(points) per count",
   "space": "O(points)",
   "explain": "Store how many times each point was added. To count squares with the query point (x, y) as one corner, look at every stored point (px, py) that could be the opposite corner: |px − x| == |py − y| > 0. The other two corners are (x, py) and (px, y); multiply the three counts.",
   "frames": []
  }
 ]
};
