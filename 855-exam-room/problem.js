window.PROBLEM = {
 "id": "855",
 "title": "Exam Room",
 "level": "Medium",
 "topic": "Design",
 "question": "An exam room has n seats in a row, numbered 0…n−1. When a student enters, they sit in the seat that makes the distance to the closest other student as large as possible (the lowest seat if tied; seat 0 if the room is empty). Implement seat() (returns the chosen seat) and leave(p). Example with n=10: seat() → 0, 9, 4, 2; leave(4); seat() → 5.",
 "why": "Students enter one at a time and sit at the seat that maximises the distance to the closest person (the lowest seat on ties); students may also leave. Implement seat() and leave(p).",
 "idea": "Keep the occupied seats sorted. The candidate seats are: the first seat 0, the last seat n−1, and the middle of every gap between two people. Compare their distances.",
 "input": "n=10: seat, seat, seat, seat, leave(4), seat",
 "output": "0, 9, 4, 2, –, 5",
 "notes": [],
 "best": "Keep the occupied seats sorted. The candidate seats are: the first seat 0, the last seat n−1, and the middle of every gap between two people. Compare their distances.",
 "variants": [
  {
   "name": "Sorted seats, look at the gaps",
   "code": "class ExamRoom:\n    def __init__(self, n):\n        self.n = n\n        self.s = []\n    def seat(self):\n        if not self.s: p = 0\n        else:\n            best, p = self.s[0], 0\n            for a, b in zip(self.s, self.s[1:]):\n                d = (b - a) // 2\n                if d > best: best, p = d, a + d\n            if self.n - 1 - self.s[-1] > best: p = self.n - 1\n        insort(self.s, p)\n        return p\n    def leave(self, p):\n        self.s.remove(p)",
   "time": "seat O(n), leave O(n)",
   "space": "O(n)",
   "explain": "Keep the occupied seats sorted. The candidate seats are: the first seat 0, the last seat n−1, and the middle of every gap between two people. Compare their distances.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Test every seat",
   "tag": "Brute force",
   "code": "class ExamRoom:\n    def __init__(self, n):\n        self.n = n\n        self.s = set()\n    def seat(self):\n        if not self.s:\n            self.s.add(0)\n            return 0\n        best, p = -1, 0\n        for x in range(self.n):\n            if x in self.s: continue\n            d = min(abs(x - y) for y in self.s)\n            if d > best: best, p = d, x\n        self.s.add(p)\n        return p\n    def leave(self, p):\n        self.s.remove(p)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each empty seat compute the distance to the closest person and take the best.",
   "frames": [],
   "alt": true
  }
 ]
};
