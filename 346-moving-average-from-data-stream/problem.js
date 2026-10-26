window.PROBLEM = {
 "id": "346",
 "title": "Moving Average from Data Stream",
 "level": "Easy",
 "topic": "Design",
 "question": "Design a class MovingAverage(size). Each call next(val) adds a number to a stream and returns the average of the last `size` numbers (or of all numbers if fewer have arrived). Example: size 3, calls 1, 10, 3, 5 → 1.0, 5.5, 4.666…, 6.0.",
 "why": "Window size 3: [1] → 1.0, [1,10] → 5.5, [1,10,3] → 4.67, then 1 drops out: [10,3,5] → 6.0.",
 "idea": "Keep the last `size` numbers in a queue and their running total. A new number adds to the total; if the queue is too long the oldest number leaves and is subtracted.",
 "input": "MovingAverage(3); next(1), next(10), next(3), next(5)",
 "output": "[1.0, 5.5, 4.667, 6.0]",
 "notes": [],
 "best": "Keep the last `size` numbers in a queue and their running total. A new number adds to the total; if the queue is too long the oldest number leaves and is subtracted.",
 "variants": [
  {
   "name": "Queue with a running sum",
   "code": "class MovingAverage:\n    def __init__(self, size):\n        self.size = size\n        self.q = deque()\n        self.total = 0\n    def next(self, val):\n        self.q.append(val)\n        self.total += val\n        if len(self.q) > self.size:\n            self.total -= self.q.popleft()\n        return self.total / len(self.q)",
   "time": "O(1) per call",
   "space": "O(size)",
   "explain": "Keep the last `size` numbers in a queue and their running total. A new number adds to the total; if the queue is too long the oldest number leaves and is subtracted.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Slice the last size numbers",
   "tag": "Brute force",
   "code": "class MovingAverage:\n    def __init__(self, size):\n        self.size = size\n        self.a = []\n    def next(self, val):\n        self.a.append(val)\n        w = self.a[-self.size:]\n        return sum(w) / len(w)",
   "time": "O(size) per call",
   "space": "O(n)",
   "explain": "Store every number and average the last `size` of them each time.",
   "frames": [],
   "alt": true
  }
 ]
};
