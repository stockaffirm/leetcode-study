window.PROBLEM = {
 "id": "2580",
 "title": "Count Ways to Group Overlapping Ranges",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "[[6,10],[5,15]] overlap → one component → 2 ways (all in group 1 or all in group 2).",
 "idea": "Ranges that overlap must share a group, so they form connected blocks. Sort the ranges and merge overlapping ones to count the blocks c; each block independently picks one of two groups, giving 2^c ways.",
 "input": "ranges = [[6,10],[5,15]]",
 "output": "2",
 "notes": [],
 "best": "Ranges that overlap must share a group, so they form connected blocks. Sort the ranges and merge overlapping ones to count the blocks c; each block independently picks one of two groups, giving 2^c ways.",
 "variants": [
  {
   "name": "2 to the number of merged groups",
   "code": "class Solution:\n    def countWays(self, ranges):\n        comps = 0\n        end = -1\n        for s, e in sorted(ranges):\n            if s > end:\n                comps += 1\n            end = max(end, e)\n        return pow(2, comps, 10**9 + 7)",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Ranges that overlap must share a group, so they form connected blocks. Sort the ranges and merge overlapping ones to count the blocks c; each block independently picks one of two groups, giving 2^c ways.",
   "frames": []
  }
 ]
};
