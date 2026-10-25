window.PROBLEM = {
 "id": "759",
 "title": "Employee Free Time",
 "level": "Hard",
 "topic": "Intervals",
 "question": "schedule[i] is the list of working-time intervals [start, end] of employee i (each employee's list is sorted and non-overlapping). 'Free time' is a stretch of time (with positive length) when NO employee is working and that lies between the earliest and the latest working time. Return the list of free intervals in order. Example: employee 1 works [1,2] and [5,6], employee 2 works [1,3], employee 3 works [4,10] → everyone is free only from 3 to 4 → [[3,4]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Heap over employees",
   "tag": "Alternative",
   "code": "class Solution:\n    def employeeFreeTime(self, schedule):\n        heap = [(emp[0][0], i, 0) for i, emp in enumerate(schedule)]\n        heapify(heap)\n        res, prev_end = [], None\n        while heap:\n            s, i, k = heappop(heap)\n            e = schedule[i][k][1]\n            if prev_end is not None and s > prev_end: res.append([prev_end, s])\n            prev_end = e if prev_end is None else max(prev_end, e)\n            if k + 1 < len(schedule[i]): heappush(heap, (schedule[i][k + 1][0], i, k + 1))\n        return res",
   "time": "O(n log k)",
   "space": "O(k)",
   "explain": "Merge the employees' sorted schedules with a min-heap and report gaps between the running end and the next start.",
   "frames": [],
   "alt": true
  }
 ]
};
