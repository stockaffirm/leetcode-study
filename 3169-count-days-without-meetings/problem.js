window.PROBLEM = {
 "id": "3169",
 "title": "Count Days Without Meetings",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "days 10, meetings [5,7],[1,3],[9,10] → busy days 1–3, 5–7, 9–10 → 2 free days.",
 "idea": "Sort the meetings by start, merge overlapping ones while counting the busy days, and subtract from the total number of days.",
 "input": "days = 10, meetings = [[5,7],[1,3],[9,10]]",
 "output": "2",
 "notes": [],
 "best": "Sort the meetings by start, merge overlapping ones while counting the busy days, and subtract from the total number of days.",
 "variants": [
  {
   "name": "Merge the meeting intervals, count the gaps",
   "code": "class Solution:\n    def countDays(self, days, meetings):\n        meetings.sort()\n        busy = 0\n        end = 0\n        for s, e in meetings:\n            if s > end:\n                busy += e - s + 1\n                end = e\n            elif e > end:\n                busy += e - end\n                end = e\n        return days - busy",
   "time": "O(m log m)",
   "space": "O(1)",
   "explain": "Sort the meetings by start, merge overlapping ones while counting the busy days, and subtract from the total number of days.",
   "frames": []
  }
 ]
};
