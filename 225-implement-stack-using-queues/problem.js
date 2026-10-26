window.PROBLEM = {
 "id": "225",
 "title": "Implement Stack using Queues",
 "level": "Easy",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
