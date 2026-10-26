window.PROBLEM = {
 "id": "251",
 "title": "Flatten 2D Vector",
 "level": "Medium",
 "topic": "Design",
 "question": "Design an iterator over a list of lists of numbers (a '2D vector'). next() returns the next number in reading order (row by row), hasNext() says whether any number is left. Some inner lists may be empty. Example: [[1,2],[3],[4]] → 1, 2, 3, 4.",
 "why": "An iterator over a list of lists that returns all numbers in order, skipping empty inner lists.",
 "idea": "Keep a row index and a column index. Before reading or checking, move forward past rows that are used up (or empty).",
 "input": "[[1,2],[3],[4]]",
 "output": "1, 2, 3, 4",
 "notes": [],
 "best": "Keep a row index and a column index. Before reading or checking, move forward past rows that are used up (or empty).",
 "variants": [
  {
   "name": "Two indexes, skip empty rows",
   "code": "class Vector2D:\n    def __init__(self, vec):\n        self.v, self.r, self.c = vec, 0, 0\n    def _advance(self):\n        while self.r < len(self.v) and self.c == len(self.v[self.r]):\n            self.r += 1\n            self.c = 0\n    def next(self):\n        self._advance()\n        val = self.v[self.r][self.c]\n        self.c += 1\n        return val\n    def hasNext(self):\n        self._advance()\n        return self.r < len(self.v)",
   "time": "O(1) amortised",
   "space": "O(1)",
   "explain": "Keep a row index and a column index. Before reading or checking, move forward past rows that are used up (or empty).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Flatten up front",
   "tag": "Alternative",
   "code": "class Vector2D:\n    def __init__(self, vec):\n        self.flat = [x for row in vec for x in row]\n        self.i = 0\n    def next(self):\n        self.i += 1\n        return self.flat[self.i - 1]\n    def hasNext(self):\n        return self.i < len(self.flat)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Copy all numbers into one list in the constructor.",
   "frames": [],
   "alt": true
  }
 ]
};
