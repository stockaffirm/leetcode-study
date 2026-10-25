window.PROBLEM = {
 "id": "731",
 "title": "My Calendar II",
 "level": "Medium",
 "topic": "Design",
 "question": "Implement a calendar. book(start, end) tries to add the event [start, end) (it includes start, excludes end). It succeeds (True) unless adding it would create a TRIPLE booking — three events sharing a moment; double bookings are fine. Otherwise return False and add nothing. Example: 10–20, 50–60, 10–40 → True; then 5–15 → False (moment 10–15 is booked twice already).",
 "why": "Accept a new booking [start, end) unless it would make a third booking cover some moment (double booking is allowed).",
 "idea": "Store all accepted bookings and a list of the double-booked stretches. A new booking is rejected if it hits any double-booked stretch; otherwise record its overlaps with the earlier bookings.",
 "input": "book 10-20, 50-60, 10-40, 5-15",
 "output": "True, True, True, False",
 "notes": [],
 "best": "Store all accepted bookings and a list of the double-booked stretches. A new booking is rejected if it hits any double-booked stretch; otherwise record its overlaps with the earlier bookings.",
 "variants": [
  {
   "name": "Keep bookings and their overlaps",
   "code": "class MyCalendarTwo:\n    def __init__(self):\n        self.cal = []\n        self.over = []\n    def book(self, startTime, endTime):\n        for s, e in self.over:\n            if startTime < e and s < endTime: return False\n        for s, e in self.cal:\n            if startTime < e and s < endTime:\n                self.over.append((max(s, startTime), min(e, endTime)))\n        self.cal.append((startTime, endTime))\n        return True",
   "time": "O(n) per booking",
   "space": "O(n)",
   "explain": "Store all accepted bookings and a list of the double-booked stretches. A new booking is rejected if it hits any double-booked stretch; otherwise record its overlaps with the earlier bookings.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Counting events (difference map)",
   "tag": "Alternative",
   "code": "class MyCalendarTwo:\n    def __init__(self):\n        self.delta = defaultdict(int)\n    def book(self, startTime, endTime):\n        self.delta[startTime] += 1\n        self.delta[endTime] -= 1\n        cur = 0\n        for k in sorted(self.delta):\n            cur += self.delta[k]\n            if cur > 2:\n                self.delta[startTime] -= 1\n                self.delta[endTime] += 1\n                return False\n        return True",
   "time": "O(n log n) per booking",
   "space": "O(n)",
   "explain": "Keep +1/−1 events in a map; after tentatively adding a booking, sweep the sorted keys and reject (undo) if the running count ever exceeds 2.",
   "frames": [],
   "alt": true
  }
 ]
};
