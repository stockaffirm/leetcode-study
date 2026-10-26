window.PROBLEM = {
 "id": "460",
 "title": "LFU Cache",
 "level": "Hard",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
