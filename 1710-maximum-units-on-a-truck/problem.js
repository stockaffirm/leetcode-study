window.PROBLEM = {
 "id": "1710",
 "title": "Maximum Units on a Truck",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "[[1,3],[2,2],[3,1]], truck holds 4 boxes: take 1 box of 3 units, 2 of 2 units, 1 of 1 unit = 8.",
 "idea": "Every box takes one slot, so use the slots for boxes with the most units. Sort box types by units per box, descending, and take as many as fit.",
 "input": "boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4",
 "output": "8",
 "notes": [],
 "best": "Every box takes one slot, so use the slots for boxes with the most units. Sort box types by units per box, descending, and take as many as fit.",
 "variants": [
  {
   "name": "Load the densest boxes first",
   "code": "class Solution:\n    def maximumUnits(self, boxTypes, truckSize):\n        total = 0\n        for count, units in sorted(boxTypes, key=lambda b: -b[1]):\n            take = min(count, truckSize)\n            total += take * units\n            truckSize -= take\n            if truckSize == 0:\n                break\n        return total",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Every box takes one slot, so use the slots for boxes with the most units. Sort box types by units per box, descending, and take as many as fit.",
   "frames": []
  }
 ]
};
