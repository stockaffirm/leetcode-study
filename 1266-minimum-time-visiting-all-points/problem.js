window.PROBLEM = {
 "id": "1266",
 "title": "Minimum Time Visiting All Points",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
