window.PROBLEM = {
 "id": "146",
 "title": "LRU Cache",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Design a cache (a small fast memory) with a fixed capacity. get(key) returns the stored value or -1 if absent; put(key, value) stores a value. When the cache is full and a new key is added, remove the LEAST RECENTLY USED key (the one not touched for the longest time) — both get and put count as using a key. Both actions should take constant time. Example: capacity 2: put(1), put(2), get(1) → value, put(3) removes key 2, get(2) → -1.",
 "why": "Capacity 2: put 1, put 2, get 1, put 3 → evicts 2 (1 was used more recently), get 2 → −1.",
 "idea": "Keep items in usage order (an ordered dictionary): move to the end when used, drop from the front when full.",
 "input": "cap=2: put(1), put(2), get(1), put(3), get(2)",
 "output": "1, -1",
 "notes": [],
 "best": "Keep items in usage order (an ordered dictionary): move to the end when used, drop from the front when full.",
 "variants": [
  {
   "name": "OrderedDict",
   "code": "class LRUCache:\n    def __init__(self, capacity):\n        self.cap, self.d = capacity, OrderedDict()\n    def get(self, k):\n        if k not in self.d: return -1\n        self.d.move_to_end(k); return self.d[k]\n    def put(self, k, v):\n        self.d[k] = v; self.d.move_to_end(k)\n        if len(self.d) > self.cap: self.d.popitem(last=False)",
   "time": "O(1) per op",
   "space": "O(capacity)",
   "explain": "Keep items in usage order (an ordered dictionary): move to the end when used, drop from the front when full.",
   "frames": [
    {
     "title": "put(1), put(2)",
     "description": "Oldest on the left, newest on the right.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "order (old → new)",
       "cells": [
        "1",
        "2"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "get(1)",
     "description": "1 is used → moves to the newest end.",
     "codeLines": [
      6
     ],
     "facts": {
      "returns": 1
     },
     "rows": [
      {
       "name": "order (old → new)",
       "cells": [
        "2",
        "1"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "put(3)",
     "description": "Cache would hold 3 items → evict the oldest (2).",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "order (old → new)",
       "cells": [
        "1",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "get(2)",
     "description": "2 was evicted → −1.",
     "codeLines": [
      5
     ],
     "facts": {
      "returns": -1
     },
     "rows": [
      {
       "name": "order (old → new)",
       "cells": [
        "1",
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Doubly linked list + dict",
   "tag": "Classic",
   "code": "class LRUCache:\n    class Node:\n        def __init__(self, k=0, v=0): self.k = k; self.v = v; self.prev = None; self.next = None\n    def __init__(self, capacity):\n        self.cap = capacity; self.map = {}\n        self.head = self.Node(); self.tail = self.Node()\n        self.head.next = self.tail; self.tail.prev = self.head\n    def _remove(self, n): n.prev.next = n.next; n.next.prev = n.prev\n    def _add(self, n):\n        n.prev = self.tail.prev; n.next = self.tail; self.tail.prev.next = n; self.tail.prev = n\n    def get(self, k):\n        if k not in self.map: return -1\n        n = self.map[k]; self._remove(n); self._add(n); return n.v\n    def put(self, k, v):\n        if k in self.map: self._remove(self.map[k])\n        n = self.Node(k, v); self.map[k] = n; self._add(n)\n        if len(self.map) > self.cap:\n            lru = self.head.next; self._remove(lru); del self.map[lru.k]",
   "time": "O(1) per op",
   "space": "O(capacity)",
   "explain": "The dict finds nodes in O(1); the linked list moves them to the front in O(1).",
   "frames": [],
   "alt": true
  },
  {
   "name": "List of pairs",
   "tag": "Brute force",
   "code": "class LRUCache:\n    def __init__(self, capacity): self.cap = capacity; self.items = []\n    def get(self, k):\n        for i, (key, v) in enumerate(self.items):\n            if key == k:\n                self.items.append(self.items.pop(i)); return v\n        return -1\n    def put(self, k, v):\n        for i, (key, _) in enumerate(self.items):\n            if key == k: self.items.pop(i); break\n        self.items.append((k, v))\n        if len(self.items) > self.cap: self.items.pop(0)",
   "time": "O(n) per op",
   "space": "O(capacity)",
   "explain": "Keep (key, value) pairs in usage order and search linearly.",
   "frames": [],
   "alt": true
  }
 ]
};
