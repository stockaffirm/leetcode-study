window.PROBLEM = {
 "id": "1603",
 "title": "Design Parking System",
 "level": "Easy",
 "topic": "Design",
 "question": "Design a ParkingSystem(big, medium, small) with that many spots of each size. addCar(carType) (1 = big, 2 = medium, 3 = small) parks a car of that type if a spot of its OWN size is free and returns true; otherwise it returns false. Example: ParkingSystem(1,1,0): addCar(1) → true, addCar(2) → true, addCar(3) → false (no small spots), addCar(1) → false (the big spot is taken).",
 "why": "A car park with a fixed number of big, medium and small spots. addCar says whether a car of that size can park.",
 "idea": "Keep the number of free spots per size; a car parks if its size still has a free spot.",
 "input": "ParkingSystem(1,1,0); addCar(1), addCar(2), addCar(3), addCar(1)",
 "output": "True, True, False, False",
 "notes": [],
 "best": "Keep the number of free spots per size; a car parks if its size still has a free spot.",
 "variants": [
  {
   "name": "Counters per car size",
   "code": "class ParkingSystem:\n    def __init__(self, big, medium, small):\n        self.slots = [0, big, medium, small]\n    def addCar(self, carType):\n        if self.slots[carType] > 0:\n            self.slots[carType] -= 1\n            return True\n        return False",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Keep the number of free spots per size; a car parks if its size still has a free spot.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dictionary of free spots",
   "tag": "Alternative",
   "code": "class ParkingSystem:\n    def __init__(self, big, medium, small):\n        self.free = {1: big, 2: medium, 3: small}\n    def addCar(self, carType):\n        if self.free[carType] == 0: return False\n        self.free[carType] -= 1\n        return True",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Same idea with a dictionary keyed by size.",
   "frames": [],
   "alt": true
  }
 ]
};
