window.PROBLEM = {
 "id": "981",
 "title": "Time Based Key-Value Store",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A key can hold different values at different times. get(key, t) returns the value stored at the latest time that is ≤ t.",
 "idea": "Per key, timestamps arrive in increasing order, so store them in a sorted list and binary-search for the last one ≤ t.",
 "input": "set(foo,bar,1), get(foo,1), get(foo,3), set(foo,bar2,4), get(foo,4), get(foo,5)",
 "output": "bar, bar, bar2, bar2",
 "notes": [],
 "best": "Per key, timestamps arrive in increasing order, so store them in a sorted list and binary-search for the last one ≤ t.",
 "variants": [
  {
   "name": "Per-key sorted timestamps + binary search",
   "code": "class TimeMap:\n    def __init__(self):\n        self.times = defaultdict(list)\n        self.vals = defaultdict(list)\n    def set(self, key, value, timestamp):\n        self.times[key].append(timestamp)\n        self.vals[key].append(value)\n    def get(self, key, timestamp):\n        i = bisect_right(self.times[key], timestamp)\n        return self.vals[key][i - 1] if i else ''",
   "time": "O(log n) get",
   "space": "O(n)",
   "explain": "Per key, timestamps arrive in increasing order, so store them in a sorted list and binary-search for the last one ≤ t.",
   "frames": []
  }
 ]
};
