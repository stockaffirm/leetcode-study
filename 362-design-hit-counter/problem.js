window.PROBLEM = {
 "id": "362",
 "title": "Design Hit Counter",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
