window.PROBLEM = {
 "id": "281",
 "title": "Zigzag Iterator",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Walk two lists alternately: one from the first, one from the second, and so on; when one runs out keep taking from the other.",
 "idea": "Keep a queue of the lists that still have items (with their position). next() takes the front list, returns its current item and puts the list back at the end if it has more.",
 "input": "v1 [1,2], v2 [3,4,5,6]",
 "output": "[1, 3, 2, 4, 5, 6]",
 "notes": [],
 "best": "Keep a queue of the lists that still have items (with their position). next() takes the front list, returns its current item and puts the list back at the end if it has more.",
 "variants": [
  {
   "name": "Queue of (list, index)",
   "code": "class ZigzagIterator:\n    def __init__(self, v1, v2):\n        self.q = deque((v, 0) for v in (v1, v2) if v)\n    def next(self):\n        v, i = self.q.popleft()\n        if i + 1 < len(v): self.q.append((v, i + 1))\n        return v[i]\n    def hasNext(self):\n        return bool(self.q)",
   "time": "O(1) per call",
   "space": "O(1)",
   "explain": "Keep a queue of the lists that still have items (with their position). next() takes the front list, returns its current item and puts the list back at the end if it has more.",
   "frames": []
  }
 ]
};
