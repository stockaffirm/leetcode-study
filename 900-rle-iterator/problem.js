window.PROBLEM = {
 "id": "900",
 "title": "RLE Iterator",
 "level": "Medium",
 "topic": "Design",
 "question": "A long list of numbers is stored in run-length form: encoding = [count1, value1, count2, value2, …] means count1 copies of value1, then count2 copies of value2, and so on. Build an iterator over it. next(n) 'uses up' the next n numbers and returns the LAST number used, or -1 if fewer than n numbers remain. Example: encoding [3,8,0,9,2,5] stands for 8,8,8,5,5. next(2) → 8, next(1) → 8, next(1) → 5, next(2) → -1 (only one 5 is left).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Queue of (count, value)",
   "tag": "Alternative",
   "code": "class RLEIterator:\n    def __init__(self, encoding):\n        self.q = deque((encoding[i], encoding[i + 1]) for i in range(0, len(encoding), 2))\n    def next(self, n):\n        while self.q:\n            c, v = self.q[0]\n            if c >= n:\n                self.q[0] = (c - n, v)\n                return v\n            n -= c\n            self.q.popleft()\n        return -1",
   "time": "O(pairs) total",
   "space": "O(pairs)",
   "explain": "Same idea with a deque: pop pairs as they are used up.",
   "frames": [],
   "alt": true
  }
 ]
};
