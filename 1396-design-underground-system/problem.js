window.PROBLEM = {
 "id": "1396",
 "title": "Design Underground System",
 "level": "Medium",
 "topic": "Design",
 "question": "Design UndergroundSystem: checkIn(id, station, t) and checkOut(id, station, t) record a customer's trip; getAverageTime(start, end) returns the average time of all completed trips from start to end. Example: customer 45 goes Leyton (t=3) → Waterloo (t=15): average Leyton→Waterloo = 12.0.",
 "why": "Customer 45 checks in at Leyton at t=3 and out at Waterloo at t=15: that trip takes 12.",
 "idea": "Store each customer's check-in (station, time). On check-out compute the trip time and add it to the total and count of the route (start, end). The average is total / count.",
 "input": "checkIn(45,'Leyton',3); checkOut(45,'Waterloo',15); getAverageTime('Leyton','Waterloo')",
 "output": "[None, None, 12.0]",
 "notes": [],
 "best": "Store each customer's check-in (station, time). On check-out compute the trip time and add it to the total and count of the route (start, end). The average is total / count.",
 "variants": [
  {
   "name": "Check-in map + running totals per route",
   "code": "class UndergroundSystem:\n    def __init__(self):\n        self.inn = {}\n        self.route = defaultdict(lambda: [0, 0])\n\n    def checkIn(self, id, stationName, t):\n        self.inn[id] = (stationName, t)\n\n    def checkOut(self, id, stationName, t):\n        s, t0 = self.inn.pop(id)\n        r = self.route[(s, stationName)]\n        r[0] += t - t0\n        r[1] += 1\n\n    def getAverageTime(self, startStation, endStation):\n        total, cnt = self.route[(startStation, endStation)]\n        return total / cnt",
   "time": "O(1) per call",
   "space": "O(n)",
   "explain": "Store each customer's check-in (station, time). On check-out compute the trip time and add it to the total and count of the route (start, end). The average is total / count.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Store every trip",
   "tag": "Brute force",
   "code": "class UndergroundSystem:\n    def __init__(self):\n        self.inn = {}\n        self.trips = defaultdict(list)\n\n    def checkIn(self, id, stationName, t):\n        self.inn[id] = (stationName, t)\n\n    def checkOut(self, id, stationName, t):\n        s, t0 = self.inn.pop(id)\n        self.trips[(s, stationName)].append(t - t0)\n\n    def getAverageTime(self, startStation, endStation):\n        lst = self.trips[(startStation, endStation)]\n        return sum(lst) / len(lst)",
   "time": "O(trips) per query",
   "space": "O(trips)",
   "explain": "Keep a list of trip times per route and average on request.",
   "frames": [],
   "alt": true
  }
 ]
};
