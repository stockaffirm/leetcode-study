window.PROBLEM = {
 "id": "900",
 "title": "RLE Iterator",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A long list is stored compressed as pairs: [3,8] means three 8s. next(n) skips n items and returns the last one skipped, or −1 if there aren't enough.",
 "idea": "Never expand the list. Keep a pointer to the current pair and spend the requested n against that pair's remaining count, moving on when a pair is used up.",
 "input": "RLEIterator([3,8,0,9,2,5]); next(2), next(1), next(1), next(2)",
 "output": "8, 8, 5, -1",
 "notes": [],
 "best": "Never expand the list. Keep a pointer to the current pair and spend the requested n against that pair's remaining count, moving on when a pair is used up.",
 "variants": [
  {
   "name": "Pointer over (count, value) pairs",
   "code": "class RLEIterator:\n    def __init__(self, encoding):\n        self.e = encoding\n        self.i = 0\n    def next(self, n):\n        while self.i < len(self.e):\n            if self.e[self.i] >= n:\n                self.e[self.i] -= n\n                return self.e[self.i + 1]\n            n -= self.e[self.i]\n            self.i += 2\n        return -1",
   "time": "O(pairs) per call",
   "space": "O(1)",
   "explain": "Never expand the list. Keep a pointer to the current pair and spend the requested n against that pair's remaining count, moving on when a pair is used up.",
   "frames": []
  }
 ]
};
