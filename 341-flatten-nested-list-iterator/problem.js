window.PROBLEM = {
 "id": "341",
 "title": "Flatten Nested List Iterator",
 "level": "Medium",
 "topic": "Design",
 "question": "You are given a nested list: each element is either a whole number or another nested list (to any depth); you use it through an interface with isInteger(), getInteger() and getList(). Design an iterator NestedIterator over it whose next() returns the integers one by one in reading order and hasNext() says whether any are left. Example: [[1,1],2,[1,1]] → 1, 1, 2, 1, 1.",
 "why": "A list can contain integers and further lists to any depth. Build an iterator that returns the integers one by one in order.",
 "idea": "Keep a stack with the items still to visit (in reverse). hasNext() keeps unpacking the top item while it is a list; when the top is an integer it is ready for next().",
 "input": "[[1,1], 2, [1,1]]",
 "output": "[1, 1, 2, 1, 1]",
 "notes": [],
 "best": "Keep a stack with the items still to visit (in reverse). hasNext() keeps unpacking the top item while it is a list; when the top is an integer it is ready for next().",
 "variants": [
  {
   "name": "Stack, unpack lists lazily",
   "code": "class NestedIterator:\n    def __init__(self, nestedList):\n        self.st = list(reversed(nestedList))\n    def next(self):\n        self.hasNext()\n        return self.st.pop().getInteger()\n    def hasNext(self):\n        while self.st and not self.st[-1].isInteger():\n            self.st.extend(reversed(self.st.pop().getList()))\n        return bool(self.st)",
   "time": "O(1) amortised",
   "space": "O(depth)",
   "explain": "Keep a stack with the items still to visit (in reverse). hasNext() keeps unpacking the top item while it is a list; when the top is an integer it is ready for next().",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Flatten everything up front",
   "tag": "Alternative",
   "code": "class NestedIterator:\n    def __init__(self, nestedList):\n        self.flat = []\n        def go(items):\n            for it in items:\n                if it.isInteger(): self.flat.append(it.getInteger())\n                else: go(it.getList())\n        go(nestedList)\n        self.i = 0\n    def next(self):\n        self.i += 1\n        return self.flat[self.i - 1]\n    def hasNext(self):\n        return self.i < len(self.flat)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Recursively collect all integers into a list in the constructor.",
   "frames": [],
   "alt": true
  }
 ]
};
