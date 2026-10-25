window.PROBLEM = {
 "id": "460",
 "title": "LFU Cache",
 "level": "Hard",
 "topic": "Design",
 "question": "Design a cache (a small fast memory) with a fixed capacity that evicts the Least Frequently Used key when it is full; if several keys are tied for least frequently used, evict the one that was used longest ago. get(key) returns the value or -1; put(key, value) stores a value. Both calls count as 'using' the key. Aim for constant time per call. Example (capacity 2): put(1,1), put(2,2), get(1) → 1, put(3,3) evicts key 2, get(2) → -1, get(3) → 3, put(4,4) evicts key 1, get(1) → -1, get(3) → 3, get(4) → 4.",
 "why": "A cache with a fixed size. When full, throw out the Least Frequently Used key; if tied, the one used longest ago.",
 "idea": "Keep each key's use-count, group keys into buckets by count (each bucket remembers order), and track the smallest count. Evict from the front of the smallest bucket; a use moves a key to the next bucket.",
 "input": "capacity 2: put 1, put 2, get 1, put 3, get 2, get 3, put 4, get 1, get 3, get 4",
 "output": "1, -1, 3, -1, 3, 4",
 "notes": [],
 "best": "Keep each key's use-count, group keys into buckets by count (each bucket remembers order), and track the smallest count. Evict from the front of the smallest bucket; a use moves a key to the next bucket.",
 "variants": [
  {
   "name": "Frequency buckets of ordered keys",
   "code": "class LFUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.val = {}\n        self.freq = {}\n        self.buckets = defaultdict(OrderedDict)\n        self.minf = 0\n    def _touch(self, key):\n        f = self.freq[key]\n        del self.buckets[f][key]\n        if not self.buckets[f] and self.minf == f: self.minf += 1\n        self.freq[key] = f + 1\n        self.buckets[f + 1][key] = None\n    def get(self, key):\n        if key not in self.val: return -1\n        self._touch(key)\n        return self.val[key]\n    def put(self, key, value):\n        if self.cap == 0: return\n        if key in self.val:\n            self.val[key] = value\n            self._touch(key)\n            return\n        if len(self.val) >= self.cap:\n            old, _ = self.buckets[self.minf].popitem(last=False)\n            del self.val[old]\n            del self.freq[old]\n        self.val[key] = value\n        self.freq[key] = 1\n        self.buckets[1][key] = None\n        self.minf = 1",
   "time": "O(1) per op",
   "space": "O(capacity)",
   "explain": "Keep each key's use-count, group keys into buckets by count (each bucket remembers order), and track the smallest count. Evict from the front of the smallest bucket; a use moves a key to the next bucket.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Frequency + clock, linear eviction",
   "tag": "Brute force",
   "code": "class LFUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.data = {}\n        self.clock = 0\n    def get(self, key):\n        if key not in self.data: return -1\n        self.clock += 1\n        e = self.data[key]\n        e[1] += 1\n        e[2] = self.clock\n        return e[0]\n    def put(self, key, value):\n        if self.cap == 0: return\n        self.clock += 1\n        if key in self.data:\n            e = self.data[key]\n            e[0], e[1], e[2] = value, e[1] + 1, self.clock\n            return\n        if len(self.data) >= self.cap:\n            victim = min(self.data, key=lambda k: (self.data[k][1], self.data[k][2]))\n            del self.data[victim]\n        self.data[key] = [value, 1, self.clock]",
   "time": "O(n) per eviction",
   "space": "O(capacity)",
   "explain": "Store (value, count, last-used time) per key; when full, scan for the smallest (count, time).",
   "frames": [],
   "alt": true
  }
 ]
};
