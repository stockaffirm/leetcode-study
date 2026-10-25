window.PROBLEM = {
 "id": "3829",
 "title": "Design Ride Sharing System",
 "level": "Medium",
 "topic": "Design",
 "question": "Design RideSharingSystem: addRider(id), addDriver(id), matchDriverWithRider() matches the earliest waiting rider with the earliest available driver and returns [driverId, riderId] (or [-1,-1] if nobody can be matched), and cancelRider(id) removes a rider who has not been matched yet.",
 "why": "Rider 3 and driver 2 are first in line, so the first match is [2,3]. Rider 1 then cancels, so the next match finds nobody: [-1,-1].",
 "idea": "Keep one queue of waiting riders and one of available drivers. A match takes the front of both. For a cancel, remember the id in a set and skip cancelled riders when they reach the front.",
 "input": "addRider(3), addDriver(2), addRider(1), match, cancelRider(1), match",
 "output": "[2,3], then [-1,-1]",
 "notes": [],
 "best": "Keep one queue of waiting riders and one of available drivers. A match takes the front of both. For a cancel, remember the id in a set and skip cancelled riders when they reach the front.",
 "variants": [
  {
   "name": "Two queues + lazy cancel",
   "code": "class RideSharingSystem:\n    def __init__(self):\n        self.riders = deque()\n        self.drivers = deque()\n        self.cancelled = set()\n    def addRider(self, riderId):\n        self.riders.append(riderId)\n    def addDriver(self, driverId):\n        self.drivers.append(driverId)\n    def matchDriverWithRider(self):\n        while self.riders and self.riders[0] in self.cancelled:\n            self.riders.popleft()\n        if not self.riders or not self.drivers:\n            return [-1, -1]\n        return [self.drivers.popleft(), self.riders.popleft()]\n    def cancelRider(self, riderId):\n        self.cancelled.add(riderId)",
   "time": "O(1) amortised",
   "space": "O(n)",
   "explain": "Keep one queue of waiting riders and one of available drivers. A match takes the front of both. For a cancel, remember the id in a set and skip cancelled riders when they reach the front.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Ordered dictionary of riders",
   "tag": "Alternative",
   "code": "class RideSharingSystem:\n    def __init__(self):\n        self.riders = {}\n        self.drivers = deque()\n    def addRider(self, riderId):\n        self.riders[riderId] = True\n    def addDriver(self, driverId):\n        self.drivers.append(driverId)\n    def matchDriverWithRider(self):\n        if not self.riders or not self.drivers:\n            return [-1, -1]\n        rider = next(iter(self.riders))\n        del self.riders[rider]\n        return [self.drivers.popleft(), rider]\n    def cancelRider(self, riderId):\n        self.riders.pop(riderId, None)",
   "time": "O(1)",
   "space": "O(n)",
   "explain": "A dictionary keeps insertion order, so cancelling is a direct delete and the first key is the earliest rider.",
   "frames": [],
   "alt": true
  }
 ]
};
