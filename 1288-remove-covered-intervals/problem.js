window.PROBLEM = {
 "id": "1288",
 "title": "Remove Covered Intervals",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "[[1,4],[3,6],[2,8]]: [1,4] and [3,6] are covered by [2,8]? only [3,6] → 2 remain.",
 "idea": "Sort by start ascending and end descending. Sweep keeping the largest end seen; an interval whose end is not beyond that is covered by an earlier one. Count the intervals that extend the reach.",
 "input": "intervals = [[1,4],[3,6],[2,8]]",
 "output": "2",
 "notes": [],
 "best": "Sort by start ascending and end descending. Sweep keeping the largest end seen; an interval whose end is not beyond that is covered by an earlier one. Count the intervals that extend the reach.",
 "variants": [
  {
   "name": "Sort by start, keep those that extend the reach",
   "code": "class Solution:\n    def removeCoveredIntervals(self, intervals):\n        count = 0\n        reach = -1\n        for s, e in sorted(intervals, key=lambda p: (p[0], -p[1])):\n            if e > reach:\n                count += 1\n                reach = e\n        return count",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort by start ascending and end descending. Sweep keeping the largest end seen; an interval whose end is not beyond that is covered by an earlier one. Count the intervals that extend the reach.",
   "frames": []
  }
 ]
};
