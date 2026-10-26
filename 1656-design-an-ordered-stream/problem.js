window.PROBLEM = {
 "id": "1656",
 "title": "Design an Ordered Stream",
 "level": "Easy",
 "topic": "Design",
 "question": "Design an ordered stream of n (id, value) pairs arriving in any order. insert(id, value) returns the largest possible chunk of values, in id order, that can now be output (continuing from where the last output stopped). Example: n=5: insert(3,'ccccc')=[], insert(1,'aaaaa')=['aaaaa'], insert(2,'bbbbb')=['bbbbb','ccccc'], insert(5,..)=[], insert(4,'ddddd')=['ddddd','eeeee'].",
 "why": "insert(3,'c') → [], insert(1,'a') → ['a'], insert(2,'b') → ['b','c'].",
 "idea": "Keep an array of n slots and a pointer to the next id expected. insert stores the value, then returns the longest run of filled slots starting at the pointer and advances the pointer.",
 "input": "OrderedStream(5); insert(3,'ccccc'); insert(1,'aaaaa'); insert(2,'bbbbb'); insert(5,'eeeee'); insert(4,'ddddd')",
 "output": "[None, [], ['aaaaa'], ['bbbbb', 'ccccc'], [], ['ddddd', 'eeeee']]",
 "notes": [],
 "best": "Keep an array of n slots and a pointer to the next id expected. insert stores the value, then returns the longest run of filled slots starting at the pointer and advances the pointer.",
 "variants": [
  {
   "name": "Array of slots and a moving pointer",
   "code": "class OrderedStream:\n    def __init__(self, n):\n        self.data = [None] * (n + 1)\n        self.ptr = 1\n\n    def insert(self, idKey, value):\n        self.data[idKey] = value\n        out = []\n        while self.ptr < len(self.data) and self.data[self.ptr] is not None:\n            out.append(self.data[self.ptr])\n            self.ptr += 1\n        return out",
   "time": "O(n) total",
   "space": "O(n)",
   "explain": "Keep an array of n slots and a pointer to the next id expected. insert stores the value, then returns the longest run of filled slots starting at the pointer and advances the pointer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pointer over a dictionary",
   "tag": "Alternative",
   "code": "class OrderedStream:\n    def __init__(self, n):\n        self.d = {}\n        self.ptr = 1\n\n    def insert(self, idKey, value):\n        self.d[idKey] = value\n        out = []\n        while self.ptr in self.d:\n            out.append(self.d[self.ptr])\n            self.ptr += 1\n        return out",
   "time": "O(n) total",
   "space": "O(n)",
   "explain": "Store values in a dict and extend the pointer while keys exist.",
   "frames": [],
   "alt": true
  }
 ]
};
