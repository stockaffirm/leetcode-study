window.PROBLEM = {
 "id": "3394",
 "title": "Check if Grid can be Cut into Sections",
 "level": "Medium",
 "topic": "Intervals",
 "question": "An n×n grid holds non-overlapping rectangles. Can you make two parallel cuts (both horizontal or both vertical) so that the grid splits into three sections, each with at least one rectangle and no rectangle crossing a cut? Example: n=5, [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]] → true.",
 "why": "Four rectangles that separate cleanly into three groups by two horizontal cuts → true.",
 "idea": "Two parallel cuts (both horizontal or both vertical) must split the rectangles into three non-empty groups with none crossing a cut. Project the rectangles on one axis, sort and merge overlapping intervals; if at least three merged groups remain you can cut between them. Try both axes.",
 "input": "n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]",
 "output": "true",
 "notes": [],
 "best": "Two parallel cuts (both horizontal or both vertical) must split the rectangles into three non-empty groups with none crossing a cut. Project the rectangles on one axis, sort and merge overlapping intervals; if at least three merged groups remain you can cut between them. Try both axes.",
 "variants": [
  {
   "name": "Two cuts along one axis: count merged intervals",
   "code": "class Solution:\n    def checkValidCuts(self, n, rectangles):\n        def groups(lo_idx, hi_idx):\n            ivs = sorted((r[lo_idx], r[hi_idx]) for r in rectangles)\n            count = 0\n            end = -1\n            for a, b in ivs:\n                if a >= end:\n                    count += 1\n                end = max(end, b)\n            return count\n        return groups(0, 2) >= 3 or groups(1, 3) >= 3",
   "time": "O(r log r)",
   "space": "O(r)",
   "explain": "Two parallel cuts (both horizontal or both vertical) must split the rectangles into three non-empty groups with none crossing a cut. Project the rectangles on one axis, sort and merge overlapping intervals; if at least three merged groups remain you can cut between them. Try both axes.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sweep with a running maximum end",
   "tag": "Alternative",
   "code": "class Solution:\n    def checkValidCuts(self, n, rectangles):\n        def cuts(a, b):\n            ivs = sorted((r[a], r[b]) for r in rectangles)\n            gaps = 0\n            end = ivs[0][1]\n            for s, e in ivs[1:]:\n                if s >= end:\n                    gaps += 1\n                end = max(end, e)\n            return gaps\n        return cuts(0, 2) >= 2 or cuts(1, 3) >= 2",
   "time": "O(r log r)",
   "space": "O(r)",
   "explain": "Count the gaps between merged intervals on each axis; two gaps give three groups.",
   "frames": [],
   "alt": true
  }
 ]
};
