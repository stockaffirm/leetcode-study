window.PROBLEM = {
 "id": "362",
 "title": "Design Hit Counter",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a HitCounter that counts website hits in the last 5 minutes (300 seconds). hit(timestamp) records one hit at that time (in seconds); getHits(timestamp) returns how many hits happened during the 300 seconds up to and including that time (a hit that is exactly 300 seconds old no longer counts). Calls come in non-decreasing time order. Example: hits at times 1, 2, 3 → getHits(4) = 3; add a hit at 300 → getHits(300) = 4; getHits(301) = 3, because the hit at time 1 is now exactly 300 seconds old and has dropped out.",
 "why": "Count how many hits happened in the last 5 minutes (300 seconds). Old hits must stop counting.",
 "idea": "Keep hit times in a queue. When asked, drop everything older than 300 seconds from the front, then the queue length is the answer.",
 "input": "hit(1), hit(2), hit(3), getHits(4), hit(300), getHits(300), getHits(301)",
 "output": "3, 4, 3",
 "notes": [],
 "best": "Keep hit times in a queue. When asked, drop everything older than 300 seconds from the front, then the queue length is the answer.",
 "variants": [
  {
   "name": "Queue of timestamps",
   "code": "class HitCounter:\n    def __init__(self):\n        self.q = deque()\n    def hit(self, timestamp):\n        self.q.append(timestamp)\n    def getHits(self, timestamp):\n        while self.q and self.q[0] <= timestamp - 300:\n            self.q.popleft()\n        return len(self.q)",
   "time": "O(1) amortised",
   "space": "O(hits in window)",
   "explain": "Keep hit times in a queue. When asked, drop everything older than 300 seconds from the front, then the queue length is the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "300 time buckets",
   "tag": "Alternative",
   "code": "class HitCounter:\n    def __init__(self):\n        self.times = [0] * 300\n        self.hits = [0] * 300\n    def hit(self, timestamp):\n        i = timestamp % 300\n        if self.times[i] != timestamp:\n            self.times[i] = timestamp\n            self.hits[i] = 0\n        self.hits[i] += 1\n    def getHits(self, timestamp):\n        total = 0\n        for i in range(300):\n            if timestamp - self.times[i] < 300: total += self.hits[i]\n        return total",
   "time": "O(300) per query",
   "space": "O(300)",
   "explain": "A ring of 300 slots, one per second: remember which second each slot belongs to and how many hits.",
   "frames": [],
   "alt": true
  }
 ]
};
