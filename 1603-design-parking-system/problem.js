window.PROBLEM = {
 "id": "1603",
 "title": "Design Parking System",
 "level": "Easy",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
