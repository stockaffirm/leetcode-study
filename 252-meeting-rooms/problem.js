window.PROBLEM = {
 "id": "252",
 "title": "Meeting Rooms",
 "level": "Easy",
 "topic": "Intervals",
 "question": "",
 "why": "Can one person attend all the meetings (no two overlap)?",
 "idea": "Sort by start time; any meeting that starts before the previous one ends is an overlap.",
 "input": "[[0,30],[5,10],[15,20]]",
 "output": "False",
 "notes": [],
 "best": "Sort by start time; any meeting that starts before the previous one ends is an overlap.",
 "variants": [
  {
   "name": "Sort and compare neighbours",
   "code": "class Solution:\n    def canAttendMeetings(self, intervals):\n        intervals = sorted(intervals)\n        for i in range(1, len(intervals)):\n            if intervals[i][0] < intervals[i - 1][1]: return False\n        return True",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort by start time; any meeting that starts before the previous one ends is an overlap.",
   "frames": []
  }
 ]
};
