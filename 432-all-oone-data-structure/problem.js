window.PROBLEM = {
 "id": "432",
 "title": "All O`one Data Structure",
 "level": "Hard",
 "topic": "Design",
 "question": "Design a data structure that stores counts of strings. inc(key) adds one to the count of key (creating it with 1); dec(key) subtracts one (removing the key when it reaches 0; the key exists); getMaxKey() returns any key with the highest count and getMinKey() any key with the lowest ('' if empty). Every operation must take O(1) (fixed time or memory, however big the input) time on average. Example: inc hello, inc hello → max = min = 'hello'; inc leet → max 'hello', min 'leet'.",
 "why": "Keep word counts with inc and dec, and get a most-counted and a least-counted word, all in O(1).",
 "idea": "Keep buckets (one per count) in a doubly linked list ordered by count; each bucket holds the words with that count. inc/dec move a word to the neighbouring bucket (creating or removing buckets as needed); the ends of the list give min and max.",
 "input": "inc hello ×2; max, min; inc leet; max, min",
 "output": "hello, hello, hello, leet",
 "notes": [],
 "best": "Keep buckets (one per count) in a doubly linked list ordered by count; each bucket holds the words with that count. inc/dec move a word to the neighbouring bucket (creating or removing buckets as needed); the ends of the list give min and max.",
 "variants": [
  {
   "name": "Doubly linked list of count buckets",
   "code": "class AllOne:\n    class _B:\n        def __init__(self, c):\n            self.c, self.keys, self.prev, self.next = c, set(), None, None\n    def __init__(self):\n        self.head, self.tail = self._B(0), self._B(0)\n        self.head.next, self.tail.prev = self.tail, self.head\n        self.where = {}\n    def _insert_after(self, b, c):\n        nb = self._B(c)\n        nb.prev, nb.next = b, b.next\n        b.next.prev = nb\n        b.next = nb\n        return nb\n    def _remove(self, b):\n        b.prev.next, b.next.prev = b.next, b.prev\n    def inc(self, key):\n        if key in self.where:\n            b = self.where[key]\n            nxt = b.next if b.next.c == b.c + 1 and b.next is not self.tail else self._insert_after(b, b.c + 1)\n            nxt.keys.add(key)\n            self.where[key] = nxt\n            b.keys.discard(key)\n            if not b.keys: self._remove(b)\n        else:\n            first = self.head.next\n            if first is self.tail or first.c != 1: first = self._insert_after(self.head, 1)\n            first.keys.add(key)\n            self.where[key] = first\n    def dec(self, key):\n        b = self.where[key]\n        b.keys.discard(key)\n        if b.c == 1:\n            del self.where[key]\n        else:\n            prv = b.prev if b.prev.c == b.c - 1 and b.prev is not self.head else self._insert_after(b.prev, b.c - 1)\n            prv.keys.add(key)\n            self.where[key] = prv\n        if not b.keys: self._remove(b)\n    def getMaxKey(self):\n        return next(iter(self.tail.prev.keys)) if self.tail.prev is not self.head else ''\n    def getMinKey(self):\n        return next(iter(self.head.next.keys)) if self.head.next is not self.tail else ''",
   "time": "O(1)",
   "space": "O(n)",
   "explain": "Keep buckets (one per count) in a doubly linked list ordered by count; each bucket holds the words with that count. inc/dec move a word to the neighbouring bucket (creating or removing buckets as needed); the ends of the list give min and max.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dictionary, scan for max and min",
   "tag": "Brute force",
   "code": "class AllOne:\n    def __init__(self):\n        self.c = {}\n    def inc(self, key):\n        self.c[key] = self.c.get(key, 0) + 1\n    def dec(self, key):\n        self.c[key] -= 1\n        if self.c[key] == 0: del self.c[key]\n    def getMaxKey(self):\n        return max(self.c, key=self.c.get) if self.c else ''\n    def getMinKey(self):\n        return min(self.c, key=self.c.get) if self.c else ''",
   "time": "O(n) per query",
   "space": "O(n)",
   "explain": "Just a counter; max and min scan all the words.",
   "frames": [],
   "alt": true
  }
 ]
};
