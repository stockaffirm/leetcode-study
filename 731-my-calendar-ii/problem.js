window.PROBLEM = {
 "id": "731",
 "title": "My Calendar II",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
