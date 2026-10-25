window.PROBLEM = {
 "id": "539",
 "title": "Minimum Time Difference",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Given a list of clock times written as 'HH:MM' (24-hour), return the smallest difference in minutes between any two of them. The clock is circular: 23:59 and 00:00 are 1 minute apart. Example: ['23:59','00:00'] → 1.",
 "why": "Given clock times like '23:59', find the smallest gap in minutes between any two of them (the clock wraps around midnight).",
 "idea": "Convert each time to minutes since midnight and sort. The answer is the smallest gap between neighbours, and also the gap from the last time round midnight to the first.",
 "input": "[\"23:59\", \"00:00\"]",
 "output": "1",
 "notes": [],
 "best": "Convert each time to minutes since midnight and sort. The answer is the smallest gap between neighbours, and also the gap from the last time round midnight to the first.",
 "variants": [
  {
   "name": "Sort minutes, include the wrap-around",
   "code": "class Solution:\n    def findMinDifference(self, timePoints):\n        mins = sorted(int(t[:2]) * 60 + int(t[3:]) for t in timePoints)\n        best = mins[0] + 1440 - mins[-1]\n        for i in range(1, len(mins)):\n            best = min(best, mins[i] - mins[i - 1])\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Convert each time to minutes since midnight and sort. The answer is the smallest gap between neighbours, and also the gap from the last time round midnight to the first.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Boolean array of 1440 minutes",
   "tag": "Alternative",
   "code": "class Solution:\n    def findMinDifference(self, timePoints):\n        seen = [False] * 1440\n        for t in timePoints:\n            m = int(t[:2]) * 60 + int(t[3:])\n            if seen[m]: return 0\n            seen[m] = True\n        pts = [i for i in range(1440) if seen[i]]\n        best = pts[0] + 1440 - pts[-1]\n        for a, b in zip(pts, pts[1:]): best = min(best, b - a)\n        return best",
   "time": "O(n + 1440)",
   "space": "O(1440)",
   "explain": "Mark each minute of the day; a repeated minute means difference 0.",
   "frames": [],
   "alt": true
  }
 ]
};
