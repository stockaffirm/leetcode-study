window.PROBLEM = {
 "id": "759",
 "title": "Employee Free Time",
 "level": "Hard",
 "topic": "Intervals",
 "question": "",
 "why": "Each employee has busy time intervals. When is EVERYONE free (between the earliest and latest busy times)?",
 "idea": "Throw all intervals together, sort by start, and sweep keeping the latest end seen. A gap appears when the next interval starts after that end.",
 "input": "[[[1,2],[5,6]], [[1,3]], [[4,10]]]",
 "output": "[[3, 4]]",
 "notes": [],
 "best": "Throw all intervals together, sort by start, and sweep keeping the latest end seen. A gap appears when the next interval starts after that end.",
 "variants": [
  {
   "name": "Merge everyone's busy time, find the gaps",
   "code": "class Solution:\n    def employeeFreeTime(self, schedule):\n        intervals = sorted(iv for emp in schedule for iv in emp)\n        res, end = [], intervals[0][1]\n        for s, e in intervals[1:]:\n            if s > end: res.append([end, s])\n            end = max(end, e)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Throw all intervals together, sort by start, and sweep keeping the latest end seen. A gap appears when the next interval starts after that end.",
   "frames": []
  }
 ]
};
