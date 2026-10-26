window.PROBLEM = {
 "id": "1739",
 "title": "Building Boxes",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=10 boxes: a 3-level stair pyramid uses 1 + 3 + 6 = 10 boxes and touches the floor with 6 → 6.",
 "idea": "The best shape is a staircase pyramid in a corner. Complete layers need 1, 1+3, 1+3+6 … boxes and touch the floor with 1, 3, 6 … boxes. Add the largest complete pyramid that fits, then add floor boxes one by one: the j-th extra floor box allows j more boxes on top.",
 "input": "n = 10",
 "output": "6",
 "notes": [],
 "best": "The best shape is a staircase pyramid in a corner. Complete layers need 1, 1+3, 1+3+6 … boxes and touch the floor with 1, 3, 6 … boxes. Add the largest complete pyramid that fits, then add floor boxes one by one: the j-th extra floor box allows j more boxes on top.",
 "variants": [
  {
   "name": "Fill a triangular pyramid, then add floor boxes",
   "code": "class Solution:\n    def minimumBoxes(self, n):\n        total = k = 0\n        while total + (k + 1) * (k + 2) // 2 <= n:\n            k += 1\n            total += k * (k + 1) // 2\n        floor = k * (k + 1) // 2\n        extra = 1\n        while total < n:\n            total += extra\n            floor += 1\n            extra += 1\n        return floor",
   "time": "O(n^(1/3))",
   "space": "O(1)",
   "explain": "The best shape is a staircase pyramid in a corner. Complete layers need 1, 1+3, 1+3+6 … boxes and touch the floor with 1, 3, 6 … boxes. Add the largest complete pyramid that fits, then add floor boxes one by one: the j-th extra floor box allows j more boxes on top.",
   "frames": []
  }
 ]
};
