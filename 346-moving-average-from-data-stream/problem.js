window.PROBLEM = {
 "id": "346",
 "title": "Moving Average from Data Stream",
 "level": "Easy",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
