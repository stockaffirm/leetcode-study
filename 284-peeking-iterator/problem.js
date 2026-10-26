window.PROBLEM = {
 "id": "284",
 "title": "Peeking Iterator",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Wrap an iterator (next, hasNext) so it also supports peek(): look at the next value without consuming it.",
 "idea": "Always keep the upcoming value in a variable. peek returns it; next returns it and loads the following one.",
 "input": "iterator over [1,2,3]: next, peek, next, next, hasNext",
 "output": "1, 2, 2, 3, False",
 "notes": [],
 "best": "Always keep the upcoming value in a variable. peek returns it; next returns it and loads the following one.",
 "variants": [
  {
   "name": "Cache the next value",
   "code": "class PeekingIterator:\n    def __init__(self, iterator):\n        self.it = iterator\n        self.has = iterator.hasNext()\n        self.nxt = iterator.next() if self.has else None\n    def peek(self):\n        return self.nxt\n    def next(self):\n        v = self.nxt\n        self.has = self.it.hasNext()\n        self.nxt = self.it.next() if self.has else None\n        return v\n    def hasNext(self):\n        return self.has",
   "time": "O(1) per call",
   "space": "O(1)",
   "explain": "Always keep the upcoming value in a variable. peek returns it; next returns it and loads the following one.",
   "frames": []
  }
 ]
};
