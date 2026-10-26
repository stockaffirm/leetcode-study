window.PROBLEM = {
 "id": "729",
 "title": "My Calendar I",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Accept a booking [start, end) only if it does not overlap any earlier booking.",
 "idea": "Keep the bookings sorted. A new booking only has to be compared with its two neighbours: the one before must end by start, the one after must start at or after end.",
 "input": "book 10-20, 15-25, 20-30",
 "output": "True, False, True",
 "notes": [],
 "best": "Keep the bookings sorted. A new booking only has to be compared with its two neighbours: the one before must end by start, the one after must start at or after end.",
 "variants": [
  {
   "name": "Sorted list + bisect",
   "code": "class MyCalendar:\n    def __init__(self):\n        self.b = []\n    def book(self, startTime, endTime):\n        i = bisect_left(self.b, (startTime, endTime))\n        if i > 0 and self.b[i - 1][1] > startTime: return False\n        if i < len(self.b) and self.b[i][0] < endTime: return False\n        self.b.insert(i, (startTime, endTime))\n        return True",
   "time": "O(n) per booking",
   "space": "O(n)",
   "explain": "Keep the bookings sorted. A new booking only has to be compared with its two neighbours: the one before must end by start, the one after must start at or after end.",
   "frames": []
  }
 ]
};
