window.PROBLEM = {
 "id": "1580",
 "title": "Put Boxes Into the Warehouse II",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "boxes [1,2,2,3,4], rooms [3,4,1,2]: room capacities 3, 3, 1, 2 → 4 boxes fit.",
 "idea": "Boxes are pushed in from either end and a box stops at a room only if all rooms before it are tall enough. So room i can hold a box up to max(min of rooms from the left up to i, min of rooms from the right up to i). Sort capacities and boxes, then match greedily from the smallest.",
 "input": "boxes = [1,2,2,3,4], warehouse = [3,4,1,2]",
 "output": "4",
 "notes": [],
 "best": "Boxes are pushed in from either end and a box stops at a room only if all rooms before it are tall enough. So room i can hold a box up to max(min of rooms from the left up to i, min of rooms from the right up to i). Sort capacities and boxes, then match greedily from the smallest.",
 "variants": [
  {
   "name": "Capacity of each room from the nearer end",
   "code": "class Solution:\n    def maxBoxesInWarehouse(self, boxes, warehouse):\n        n = len(warehouse)\n        left = list(accumulate(warehouse, min))\n        right = list(accumulate(reversed(warehouse), min))[::-1]\n        caps = sorted(max(left[i], right[i]) for i in range(n))\n        boxes.sort()\n        j = 0\n        for cap in caps:\n            if j < len(boxes) and boxes[j] <= cap:\n                j += 1\n        return j",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Boxes are pushed in from either end and a box stops at a room only if all rooms before it are tall enough. So room i can hold a box up to max(min of rooms from the left up to i, min of rooms from the right up to i). Sort capacities and boxes, then match greedily from the smallest.",
   "frames": []
  }
 ]
};
