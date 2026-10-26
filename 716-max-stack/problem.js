window.PROBLEM = {
 "id": "716",
 "title": "Max Stack",
 "level": "Hard",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
