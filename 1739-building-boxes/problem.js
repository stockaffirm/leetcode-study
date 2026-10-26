window.PROBLEM = {
 "id": "1739",
 "title": "Building Boxes",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Place n unit boxes in a cubic room. A box may stand on the floor anywhere; a box may be put on top of another one only if each of the four vertical sides of the lower box touches another box or a wall. Return the minimum number of boxes that touch the floor. Example: n=10 → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search the floor size",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumBoxes(self, n):\n        def cap(f):\n            k = 0\n            while (k + 1) * (k + 2) // 2 <= f:\n                k += 1\n            total = sum(i * (i + 1) // 2 for i in range(1, k + 1))\n            m = f - k * (k + 1) // 2\n            return total + m * (m + 1) // 2\n        lo, hi = 1, n\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if cap(mid) >= n:\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "For a given floor size f compute the most boxes it can hold (full pyramid layers plus a partial layer); binary search the smallest f that holds n.",
   "frames": [],
   "alt": true
  }
 ]
};
