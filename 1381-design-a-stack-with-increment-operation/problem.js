window.PROBLEM = {
 "id": "1381",
 "title": "Design a Stack With Increment Operation",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a stack with a maximum size and one extra operation. CustomStack(maxSize) creates it; push(x) adds x on top unless the stack is full; pop() removes and returns the top (−1 if empty); increment(k, val) adds val to each of the bottom k elements (or to all if there are fewer than k). Example (maxSize 3): push 1, push 2, pop → 2, push 2, push 3, push 4 (ignored: full), increment(5,100), increment(2,100), then pops return 103, 202, 201, −1.",
 "why": "A stack with a size limit that also supports 'add val to the bottom k items'.",
 "idea": "Don't touch the k items; just note the increment at position k−1. When an item is popped, add its note to it and pass the note down to the item below.",
 "input": "capacity 3: push 1,2; pop; push 2,3,4; increment(5,100); increment(2,100); pop ×4",
 "output": "2, 103, 202, 201, -1",
 "notes": [],
 "best": "Don't touch the k items; just note the increment at position k−1. When an item is popped, add its note to it and pass the note down to the item below.",
 "variants": [
  {
   "name": "Lazy increments stored per position",
   "code": "class CustomStack:\n    def __init__(self, maxSize):\n        self.cap = maxSize\n        self.st = []\n        self.inc = []\n    def push(self, x):\n        if len(self.st) < self.cap:\n            self.st.append(x)\n            self.inc.append(0)\n    def pop(self):\n        if not self.st: return -1\n        add = self.inc.pop()\n        if self.inc: self.inc[-1] += add\n        return self.st.pop() + add\n    def increment(self, k, val):\n        i = min(k, len(self.st)) - 1\n        if i >= 0: self.inc[i] += val",
   "time": "O(1) per op",
   "space": "O(n)",
   "explain": "Don't touch the k items; just note the increment at position k−1. When an item is popped, add its note to it and pass the note down to the item below.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add to the bottom k items directly",
   "tag": "Brute force",
   "code": "class CustomStack:\n    def __init__(self, maxSize):\n        self.cap = maxSize\n        self.st = []\n    def push(self, x):\n        if len(self.st) < self.cap: self.st.append(x)\n    def pop(self):\n        return self.st.pop() if self.st else -1\n    def increment(self, k, val):\n        for i in range(min(k, len(self.st))): self.st[i] += val",
   "time": "O(k) increment",
   "space": "O(n)",
   "explain": "A plain list; increment loops over the bottom k entries.",
   "frames": [],
   "alt": true
  }
 ]
};
