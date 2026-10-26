window.PROBLEM = {
 "id": "939",
 "title": "Minimum Area Rectangle",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Given points, find the smallest rectangle (sides parallel to the axes) whose four corners are all in the list.",
 "idea": "Put the points in a set. For every pair of points that could be opposite corners (different x and y), check whether the other two corners exist.",
 "input": "[[1,1],[1,3],[3,1],[3,3],[2,2]]",
 "output": "4",
 "notes": [],
 "best": "Put the points in a set. For every pair of points that could be opposite corners (different x and y), check whether the other two corners exist.",
 "variants": [
  {
   "name": "Set of points, test diagonals",
   "code": "class Solution:\n    def minAreaRect(self, points):\n        pts = set(map(tuple, points))\n        best = float('inf')\n        for x1, y1 in pts:\n            for x2, y2 in pts:\n                if x1 < x2 and y1 < y2 and (x1, y2) in pts and (x2, y1) in pts:\n                    best = min(best, (x2 - x1) * (y2 - y1))\n        return best if best != float('inf') else 0",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Put the points in a set. For every pair of points that could be opposite corners (different x and y), check whether the other two corners exist.",
   "frames": []
  }
 ]
};
