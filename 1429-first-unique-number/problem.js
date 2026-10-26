window.PROBLEM = {
 "id": "1429",
 "title": "First Unique Number",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Design a class over a stream of numbers: add(value), and showFirstUnique() returns the first number that appears exactly once (or −1).",
 "idea": "Keep every number's count and a queue in arrival order. When asked, pop from the front while the front number is no longer unique.",
 "input": "[2,3,5]: show, add 5, show, add 2, show, add 3, show",
 "output": "2, 2, 3, −1",
 "notes": [],
 "best": "Keep every number's count and a queue in arrival order. When asked, pop from the front while the front number is no longer unique.",
 "variants": [
  {
   "name": "Queue + counts with lazy removal",
   "code": "class FirstUnique:\n    def __init__(self, nums):\n        self.cnt = Counter(nums)\n        self.q = deque(nums)\n    def showFirstUnique(self):\n        while self.q and self.cnt[self.q[0]] > 1: self.q.popleft()\n        return self.q[0] if self.q else -1\n    def add(self, value):\n        self.cnt[value] += 1\n        self.q.append(value)",
   "time": "amortised O(1)",
   "space": "O(n)",
   "explain": "Keep every number's count and a queue in arrival order. When asked, pop from the front while the front number is no longer unique.",
   "frames": []
  }
 ]
};
