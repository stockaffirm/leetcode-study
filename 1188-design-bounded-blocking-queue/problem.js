window.PROBLEM = {
 "id": "1188",
 "title": "Design Bounded Blocking Queue",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A thread-safe queue with a maximum size: enqueue waits while it is full, dequeue waits while it is empty.",
 "idea": "One lock with a condition variable. Wait in a loop until there is room (or an item), do the operation, then wake everyone up.",
 "input": "capacity 2: enqueue 1, 2, dequeue",
 "output": "1",
 "notes": [],
 "best": "One lock with a condition variable. Wait in a loop until there is room (or an item), do the operation, then wake everyone up.",
 "variants": [
  {
   "name": "Condition variable",
   "code": "import threading\n\nclass BoundedBlockingQueue:\n    def __init__(self, capacity):\n        self.q = deque()\n        self.cap = capacity\n        self.cv = threading.Condition()\n    def enqueue(self, element):\n        with self.cv:\n            while len(self.q) >= self.cap: self.cv.wait()\n            self.q.append(element)\n            self.cv.notify_all()\n    def dequeue(self):\n        with self.cv:\n            while not self.q: self.cv.wait()\n            v = self.q.popleft()\n            self.cv.notify_all()\n            return v\n    def size(self):\n        with self.cv:\n            return len(self.q)",
   "time": "O(1) per call",
   "space": "O(capacity)",
   "explain": "One lock with a condition variable. Wait in a loop until there is room (or an item), do the operation, then wake everyone up.",
   "frames": []
  }
 ]
};
