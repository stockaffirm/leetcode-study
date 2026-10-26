window.PROBLEM = {
 "id": "705",
 "title": "Design HashSet",
 "level": "Easy",
 "topic": "Design",
 "question": "",
 "why": "add(1), add(2), contains(1) → true, contains(3) → false, remove(2), contains(2) → false.",
 "idea": "Use a fixed number of buckets (lists); an element goes to the bucket of key % size. add checks for presence first, remove deletes it, contains scans the bucket.",
 "input": "MyHashSet(); add(1); add(2); contains(1); contains(3); add(2); contains(2); remove(2); contains(2)",
 "output": "[None, None, True, False, None, True, None, False]",
 "notes": [],
 "best": "Use a fixed number of buckets (lists); an element goes to the bucket of key % size. add checks for presence first, remove deletes it, contains scans the bucket.",
 "variants": [
  {
   "name": "Array of buckets",
   "code": "class MyHashSet:\n    def __init__(self):\n        self.size = 1009\n        self.buckets = [[] for _ in range(self.size)]\n\n    def add(self, key):\n        b = self.buckets[key % self.size]\n        if key not in b:\n            b.append(key)\n\n    def remove(self, key):\n        b = self.buckets[key % self.size]\n        if key in b:\n            b.remove(key)\n\n    def contains(self, key):\n        return key in self.buckets[key % self.size]",
   "time": "O(1) average",
   "space": "O(n)",
   "explain": "Use a fixed number of buckets (lists); an element goes to the bucket of key % size. add checks for presence first, remove deletes it, contains scans the bucket.",
   "frames": []
  }
 ]
};
