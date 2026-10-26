window.PROBLEM = {
 "id": "1779",
 "title": "Find Nearest Point That Has the Same X or Y Coordinate",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are at (x, y) and have a list of points. A point is valid if it shares your x or your y. Return the position (index) of the valid point with the smallest Manhattan distance |dx|+|dy| (the smallest index on ties), or −1 if none is valid. Example: x=3, y=4, points [[1,2],[3,1],[2,4],[2,3],[4,4]] → 2.",
 "why": "A point is 'valid' if it shares the x or the y coordinate with you. Which valid point is closest (Manhattan distance; smallest index on ties)?",
 "idea": "Loop through the points, skip invalid ones, and remember the one with the smallest |dx| + |dy|.",
 "input": "x=3, y=4, points [[1,2],[3,1],[2,4],[2,3],[4,4]]",
 "output": "2",
 "notes": [],
 "best": "Loop through the points, skip invalid ones, and remember the one with the smallest |dx| + |dy|.",
 "variants": [
  {
   "name": "Scan the valid points",
   "code": "class Solution:\n    def nearestValidPoint(self, x, y, points):\n        best, idx = float('inf'), -1\n        for i, (a, b) in enumerate(points):\n            if a == x or b == y:\n                d = abs(a - x) + abs(b - y)\n                if d < best:\n                    best, idx = d, i\n        return idx",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Loop through the points, skip invalid ones, and remember the one with the smallest |dx| + |dy|.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Filter then min",
   "tag": "Pythonic",
   "code": "class Solution:\n    def nearestValidPoint(self, x, y, points):\n        valid = [(abs(a - x) + abs(b - y), i) for i, (a, b) in enumerate(points) if a == x or b == y]\n        return min(valid)[1] if valid else -1",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep valid points and take the minimum by distance.",
   "frames": [],
   "alt": true
  }
 ]
};
