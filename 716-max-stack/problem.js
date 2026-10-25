window.PROBLEM = {
 "id": "716",
 "title": "Max Stack",
 "level": "Hard",
 "topic": "Design",
 "question": "Design a stack that, besides push, pop and top, can tell the biggest value in it (peekMax) and remove the biggest value (popMax). If the biggest value occurs several times, popMax removes the one closest to the top. Example: push 5, 1, 5 → top is 5; popMax returns 5 (the top one) and the top becomes 1.",
 "why": "Build a stack that can also report the biggest value (peekMax) and remove the top-most biggest value (popMax).",
 "idea": "Store with every pushed value the maximum of everything below it. popMax digs down to that maximum, removes it and pushes the dug-up values back.",
 "input": "push 5, 1, 5; popMax",
 "output": "5 (the top-most 5)",
 "notes": [],
 "best": "Store with every pushed value the maximum of everything below it. popMax digs down to that maximum, removes it and pushes the dug-up values back.",
 "variants": [
  {
   "name": "Stack of (value, max so far)",
   "code": "class MaxStack:\n    def __init__(self):\n        self.st = []\n    def push(self, x):\n        self.st.append((x, max(x, self.st[-1][1]) if self.st else x))\n    def pop(self):\n        return self.st.pop()[0]\n    def top(self):\n        return self.st[-1][0]\n    def peekMax(self):\n        return self.st[-1][1]\n    def popMax(self):\n        m = self.peekMax()\n        buf = []\n        while self.top() != m: buf.append(self.pop())\n        self.pop()\n        for x in reversed(buf): self.push(x)\n        return m",
   "time": "push/pop/top/peekMax O(1), popMax O(n)",
   "space": "O(n)",
   "explain": "Store with every pushed value the maximum of everything below it. popMax digs down to that maximum, removes it and pushes the dug-up values back.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Plain list, scan for the maximum",
   "tag": "Brute force",
   "code": "class MaxStack:\n    def __init__(self):\n        self.a = []\n    def push(self, x):\n        self.a.append(x)\n    def pop(self):\n        return self.a.pop()\n    def top(self):\n        return self.a[-1]\n    def peekMax(self):\n        return max(self.a)\n    def popMax(self):\n        m = max(self.a)\n        for i in range(len(self.a) - 1, -1, -1):\n            if self.a[i] == m:\n                self.a.pop(i)\n                return m",
   "time": "peekMax/popMax O(n)",
   "space": "O(n)",
   "explain": "Store the values only; peekMax and popMax scan the whole list (popMax removes the top-most copy).",
   "frames": [],
   "alt": true
  }
 ]
};
