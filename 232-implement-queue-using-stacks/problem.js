window.PROBLEM = {
 "id": "232",
 "title": "Implement Queue using Stacks",
 "level": "Easy",
 "topic": "Design",
 "question": "",
 "why": "Build a first-in-first-out queue using only stacks (last-in-first-out piles).",
 "idea": "Push onto an 'in' stack. When you need the front, pour the 'in' stack into an 'out' stack — reversing it — and pop from there. Only pour when 'out' is empty.",
 "input": "push 1, push 2, peek, pop, empty",
 "output": "1, 1, False",
 "notes": [],
 "best": "Push onto an 'in' stack. When you need the front, pour the 'in' stack into an 'out' stack — reversing it — and pop from there. Only pour when 'out' is empty.",
 "variants": [
  {
   "name": "Two stacks, move lazily",
   "code": "class MyQueue:\n    def __init__(self):\n        self.inp, self.out = [], []\n    def push(self, x):\n        self.inp.append(x)\n    def pop(self):\n        self.peek()\n        return self.out.pop()\n    def peek(self):\n        if not self.out:\n            while self.inp: self.out.append(self.inp.pop())\n        return self.out[-1]\n    def empty(self):\n        return not self.inp and not self.out",
   "time": "O(1) amortised",
   "space": "O(n)",
   "explain": "Push onto an 'in' stack. When you need the front, pour the 'in' stack into an 'out' stack — reversing it — and pop from there. Only pour when 'out' is empty.",
   "frames": []
  }
 ]
};
