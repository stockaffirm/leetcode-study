window.PROBLEM = {
 "id": "706",
 "title": "Design HashMap",
 "level": "Easy",
 "topic": "Design",
 "question": "",
 "why": "Build a dictionary (put, get, remove) without using a built-in hash table.",
 "idea": "Spread keys over a fixed number of buckets with key % size. Keys that land in the same bucket sit together in a small list that you scan.",
 "input": "put(1,1), put(2,2), get(1), get(3), put(2,1), get(2), remove(2), get(2)",
 "output": "1, -1, 1, -1",
 "notes": [],
 "best": "Spread keys over a fixed number of buckets with key % size. Keys that land in the same bucket sit together in a small list that you scan.",
 "variants": [
  {
   "name": "Buckets with chaining",
   "code": "class MyHashMap:\n    def __init__(self):\n        self.size = 7\n        self.buckets = [[] for _ in range(self.size)]\n    def put(self, key, value):\n        b = self.buckets[key % self.size]\n        for pair in b:\n            if pair[0] == key:\n                pair[1] = value\n                return\n        b.append([key, value])\n    def get(self, key):\n        for k, v in self.buckets[key % self.size]:\n            if k == key: return v\n        return -1\n    def remove(self, key):\n        b = self.buckets[key % self.size]\n        for i, pair in enumerate(b):\n            if pair[0] == key:\n                b.pop(i)\n                return",
   "time": "O(n / buckets)",
   "space": "O(n)",
   "explain": "Spread keys over a fixed number of buckets with key % size. Keys that land in the same bucket sit together in a small list that you scan.",
   "frames": []
  }
 ]
};
