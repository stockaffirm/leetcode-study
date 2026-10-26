window.PROBLEM = {
 "id": "1564",
 "title": "Put Boxes Into the Warehouse I",
 "level": "Medium",
 "topic": "Greedy",
 "question": "boxes[i] is the height of a box; warehouse[j] is the height of room j in a row. Boxes are pushed in from the left only, in any order, and cannot pass a room lower than the box. Return the maximum number of boxes that fit. Example: boxes [4,3,4,1], warehouse [5,3,3,4,1] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk the rooms from the deep end",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxBoxesInWarehouse(self, boxes, warehouse):\n        caps = list(accumulate(warehouse, min))\n        boxes.sort()\n        j = 0\n        for cap in reversed(caps):\n            if j < len(boxes) and boxes[j] <= cap:\n                j += 1\n        return j",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Prefix minima are non-increasing, so reading them from the back gives rooms from the smallest capacity to the largest; match the smallest boxes first without sorting the capacities.",
   "frames": [],
   "alt": true
  }
 ]
};
