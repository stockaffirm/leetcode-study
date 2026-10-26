window.PROBLEM = {
 "id": "2446",
 "title": "Determine if Two Events Have Conflict",
 "level": "Easy",
 "topic": "Intervals",
 "question": "Two events are given as [start, end] clock times 'HH:MM' (inclusive). Return true if they overlap at any moment. Example: ['01:15','02:00'] and ['02:00','03:00'] → true.",
 "why": "['01:15','02:00'] and ['02:00','03:00'] share the instant 02:00 → conflict.",
 "idea": "Convert each 'HH:MM' to minutes. Two closed intervals overlap when each starts no later than the other ends.",
 "input": "event1 = [\"01:15\",\"02:00\"], event2 = [\"02:00\",\"03:00\"]",
 "output": "true",
 "notes": [],
 "best": "Convert each 'HH:MM' to minutes. Two closed intervals overlap when each starts no later than the other ends.",
 "variants": [
  {
   "name": "Convert times to minutes, test overlap",
   "code": "class Solution:\n    def haveConflict(self, event1, event2):\n        def m(t):\n            h, mi = t.split(':')\n            return int(h) * 60 + int(mi)\n        return m(event1[0]) <= m(event2[1]) and m(event2[0]) <= m(event1[1])",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Convert each 'HH:MM' to minutes. Two closed intervals overlap when each starts no later than the other ends.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare strings",
   "tag": "Alternative",
   "code": "class Solution:\n    def haveConflict(self, event1, event2):\n        return event1[0] <= event2[1] and event2[0] <= event1[1]",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "'HH:MM' strings of the same format compare correctly as text.",
   "frames": [],
   "alt": true
  }
 ]
};
