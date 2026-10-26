window.PROBLEM = {
 "id": "497",
 "title": "Random Point in Non-overlapping Rectangles",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Pick a uniformly random integer point from the union of non-overlapping rectangles (borders included).",
 "idea": "A rectangle with more integer points must be chosen more often: build prefix sums of point counts, pick a random number in [0, total) and locate its rectangle with bisect; then pick x and y uniformly inside it.",
 "input": "[[-2,-2,1,1],[2,2,4,6]]",
 "output": "a point inside one of the rectangles",
 "notes": [],
 "best": "A rectangle with more integer points must be chosen more often: build prefix sums of point counts, pick a random number in [0, total) and locate its rectangle with bisect; then pick x and y uniformly inside it.",
 "variants": [
  {
   "name": "Weighted rectangle choice",
   "code": "class Solution:\n    def __init__(self, rects):\n        self.rects = rects\n        self.pre = list(accumulate((x2 - x1 + 1) * (y2 - y1 + 1) for x1, y1, x2, y2 in rects))\n    def pick(self):\n        r = random.randrange(self.pre[-1])\n        i = bisect_right(self.pre, r)\n        x1, y1, x2, y2 = self.rects[i]\n        return [random.randint(x1, x2), random.randint(y1, y2)]",
   "time": "pick O(log n)",
   "space": "O(n)",
   "explain": "A rectangle with more integer points must be chosen more often: build prefix sums of point counts, pick a random number in [0, total) and locate its rectangle with bisect; then pick x and y uniformly inside it.",
   "frames": []
  }
 ]
};
