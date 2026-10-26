window.PROBLEM = {
 "id": "1094",
 "title": "Car Pooling",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "Capacity 4: 2 people ride from 1 to 5 and 3 more from 3 to 7. Between 3 and 5 there are 5 people → more than 4 → false.",
 "idea": "Mark +people at every pick-up point and −people at every drop-off point. Sweep the points in order with a running total; if it ever exceeds the capacity the trip is impossible.",
 "input": "trips = [[2,1,5],[3,3,7]], capacity = 4",
 "output": "false",
 "notes": [],
 "best": "Mark +people at every pick-up point and −people at every drop-off point. Sweep the points in order with a running total; if it ever exceeds the capacity the trip is impossible.",
 "variants": [
  {
   "name": "Passenger changes on a timeline",
   "code": "class Solution:\n    def carPooling(self, trips, capacity):\n        timeline = [0] * (max(t[2] for t in trips) + 1)\n        for n, a, b in trips:\n            timeline[a] += n\n            timeline[b] -= n\n        cur = 0\n        for x in timeline:\n            cur += x\n            if cur > capacity:\n                return False\n        return True",
   "time": "O(n + max stop)",
   "space": "O(max stop)",
   "explain": "Mark +people at every pick-up point and −people at every drop-off point. Sweep the points in order with a running total; if it ever exceeds the capacity the trip is impossible.",
   "frames": []
  }
 ]
};
