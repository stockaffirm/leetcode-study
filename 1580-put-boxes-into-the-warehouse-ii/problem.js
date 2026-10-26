window.PROBLEM = {
 "id": "1580",
 "title": "Put Boxes Into the Warehouse II",
 "level": "Medium",
 "topic": "Greedy",
 "question": "boxes[i] is the height of a box; warehouse[j] is the height of room j in a row. Boxes can be pushed in from the left or the right end, in any order, and cannot pass a room lower than the box. Return the maximum number of boxes that fit. Example: boxes [1,2,2,3,4], warehouse [3,4,1,2] → 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every subset size",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxBoxesInWarehouse(self, boxes, warehouse):\n        n = len(warehouse)\n        left = list(accumulate(warehouse, min))\n        right = list(accumulate(reversed(warehouse), min))[::-1]\n        caps = sorted((max(left[i], right[i]) for i in range(n)), reverse=True)\n        boxes.sort()\n        best = 0\n        for c in range(1, min(len(boxes), n) + 1):\n            use = boxes[:c]\n            if all(use[c - 1 - t] <= caps[t] for t in range(c)):\n                best = c\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For a candidate count c use the c smallest boxes and check they fit in the c roomiest rooms by sorted comparison.",
   "frames": [],
   "alt": true
  }
 ]
};
