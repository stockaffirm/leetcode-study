window.PROBLEM = {
 "id": "855",
 "title": "Exam Room",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
