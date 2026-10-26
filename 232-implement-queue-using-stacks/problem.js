window.PROBLEM = {
 "id": "232",
 "title": "Implement Queue using Stacks",
 "level": "Easy",
 "topic": "Design",
 "question": "A queue is first-in-first-out (the item added first leaves first); a stack is last-in-first-out (the item added last leaves first). Build a queue using only standard stack operations (push to the top, pop from the top, look at the top, check if empty). Support push(x) (add to the back), pop() (remove and return the front item), peek() (look at the front item) and empty(). Example: push 1, push 2, peek() → 1, pop() → 1, empty() → false (2 is still there).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One stack, expensive push",
   "tag": "Alternative",
   "code": "class MyQueue:\n    def __init__(self):\n        self.s = []\n    def push(self, x):\n        tmp = []\n        while self.s: tmp.append(self.s.pop())\n        self.s.append(x)\n        while tmp: self.s.append(tmp.pop())\n    def pop(self):\n        return self.s.pop()\n    def peek(self):\n        return self.s[-1]\n    def empty(self):\n        return not self.s",
   "time": "O(n) push, O(1) pop",
   "space": "O(n)",
   "explain": "On every push, pour everything out, add the new item at the bottom, and pour back — the oldest item is always on top.",
   "frames": [],
   "alt": true
  }
 ]
};
