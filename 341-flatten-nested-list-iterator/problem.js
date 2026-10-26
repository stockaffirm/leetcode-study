window.PROBLEM = {
 "id": "341",
 "title": "Flatten Nested List Iterator",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
