window.PROBLEM = {
 "id": "1564",
 "title": "Put Boxes Into the Warehouse I",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "boxes [4,3,4,1], rooms [5,3,3,4,1] → capacities 5,3,3,3,1 → 3 boxes fit.",
 "idea": "Boxes enter from the left only, so room i can hold a box no taller than the lowest room up to i (a prefix minimum). Sort the boxes and the capacities and match the smallest boxes to the smallest rooms that fit.",
 "input": "boxes = [4,3,4,1], warehouse = [5,3,3,4,1]",
 "output": "3",
 "notes": [],
 "best": "Boxes enter from the left only, so room i can hold a box no taller than the lowest room up to i (a prefix minimum). Sort the boxes and the capacities and match the smallest boxes to the smallest rooms that fit.",
 "variants": [
  {
   "name": "Capacity of each room from the left",
   "code": "class Solution:\n    def maxBoxesInWarehouse(self, boxes, warehouse):\n        caps = sorted(accumulate(warehouse, min))\n        boxes.sort()\n        j = 0\n        for cap in caps:\n            if j < len(boxes) and boxes[j] <= cap:\n                j += 1\n        return j",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Boxes enter from the left only, so room i can hold a box no taller than the lowest room up to i (a prefix minimum). Sort the boxes and the capacities and match the smallest boxes to the smallest rooms that fit.",
   "frames": []
  }
 ]
};
