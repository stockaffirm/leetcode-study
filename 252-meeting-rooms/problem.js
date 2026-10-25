window.PROBLEM = {
 "id": "252",
 "title": "Meeting Rooms",
 "level": "Easy",
 "topic": "Intervals",
 "question": "Given meeting time intervals [start, end), can one person attend all of them? (True if no two meetings overlap; a meeting that starts exactly when another ends is fine.) Example: [[0,30],[5,10],[15,20]] → False.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def canAttendMeetings(self, intervals):\n        for i in range(len(intervals)):\n            for j in range(i + 1, len(intervals)):\n                if intervals[i][0] < intervals[j][1] and intervals[j][0] < intervals[i][1]: return False\n        return True",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Two meetings overlap if each starts before the other ends.",
   "frames": [],
   "alt": true
  }
 ]
};
