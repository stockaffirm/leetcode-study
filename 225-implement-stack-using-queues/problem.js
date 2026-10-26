window.PROBLEM = {
 "id": "225",
 "title": "Implement Stack using Queues",
 "level": "Easy",
 "topic": "Design",
 "question": "Implement a last-in-first-out stack using only queues (first-in-first-out). Support push(x), pop(), top() and empty(). Example: push 1, push 2, top → 2, pop → 2, empty → False.",
 "why": "Build a last-in-first-out stack using only queue operations.",
 "idea": "After pushing a new element at the back, rotate all older elements behind it, so the newest is at the front.",
 "input": "push 1, push 2, top, pop, empty",
 "output": "2, 2, False",
 "notes": [],
 "best": "After pushing a new element at the back, rotate all older elements behind it, so the newest is at the front.",
 "variants": [
  {
   "name": "One queue, rotate on push",
   "code": "class MyStack:\n    def __init__(self):\n        self.q = deque()\n    def push(self, x):\n        self.q.append(x)\n        for _ in range(len(self.q) - 1): self.q.append(self.q.popleft())\n    def pop(self):\n        return self.q.popleft()\n    def top(self):\n        return self.q[0]\n    def empty(self):\n        return not self.q",
   "time": "push O(n), others O(1)",
   "space": "O(n)",
   "explain": "After pushing a new element at the back, rotate all older elements behind it, so the newest is at the front.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two queues",
   "tag": "Alternative",
   "code": "class MyStack:\n    def __init__(self):\n        self.q1 = deque()\n        self.q2 = deque()\n    def push(self, x):\n        self.q1.append(x)\n    def pop(self):\n        while len(self.q1) > 1: self.q2.append(self.q1.popleft())\n        v = self.q1.popleft()\n        self.q1, self.q2 = self.q2, self.q1\n        return v\n    def top(self):\n        v = self.pop()\n        self.q1.append(v)\n        return v\n    def empty(self):\n        return not self.q1",
   "time": "push O(1), pop O(n)",
   "space": "O(n)",
   "explain": "Pushes go to one queue; pop moves everything except the last element to the other queue.",
   "frames": [],
   "alt": true
  }
 ]
};
