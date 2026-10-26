window.PROBLEM = {
 "id": "1266",
 "title": "Minimum Time Visiting All Points",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "A plane has points to be visited in the given order. In one second you can move one unit vertically, horizontally, or one unit diagonally (both coordinates change by 1). Return the minimum time to visit all points in order. Example: [[1,1],[3,4],[-1,0]] → 7.",
 "why": "(1,1) → (3,4): 2 diagonal steps and 1 straight step = 3 seconds. (3,4) → (−1,0): 4 seconds. Total 7.",
 "idea": "In one second you can move one step in x, in y, or diagonally. Going from one point to the next therefore takes max(|dx|, |dy|) seconds. Sum over consecutive points.",
 "input": "points = [[1,1],[3,4],[-1,0]]",
 "output": "7",
 "notes": [],
 "best": "In one second you can move one step in x, in y, or diagonally. Going from one point to the next therefore takes max(|dx|, |dy|) seconds. Sum over consecutive points.",
 "variants": [
  {
   "name": "Chebyshev distance",
   "code": "class Solution:\n    def minTimeToVisitAllPoints(self, points):\n        return sum(max(abs(a[0] - b[0]), abs(a[1] - b[1])) for a, b in zip(points, points[1:]))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "In one second you can move one step in x, in y, or diagonally. Going from one point to the next therefore takes max(|dx|, |dy|) seconds. Sum over consecutive points.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Diagonal steps plus straight steps",
   "tag": "Alternative",
   "code": "class Solution:\n    def minTimeToVisitAllPoints(self, points):\n        t = 0\n        for (x1, y1), (x2, y2) in zip(points, points[1:]):\n            dx, dy = abs(x2 - x1), abs(y2 - y1)\n            diag = min(dx, dy)\n            t += diag + (dx - diag) + (dy - diag)\n        return t",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Go diagonally as long as both coordinates differ, then straight for the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
