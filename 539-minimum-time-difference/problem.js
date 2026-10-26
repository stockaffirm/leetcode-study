window.PROBLEM = {
 "id": "539",
 "title": "Minimum Time Difference",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
