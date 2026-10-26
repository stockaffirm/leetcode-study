window.PROBLEM = {
 "id": "359",
 "title": "Logger Rate Limiter",
 "level": "Easy",
 "topic": "Design",
 "question": "Design a Logger that receives a stream of messages with timestamps (in seconds, never going back in time). shouldPrintMessage(timestamp, message) returns true if the message should be printed — i.e. the same message was not printed during the last 10 seconds — and false otherwise. Example: foo@1 → true; bar@2 → true; foo@3 → false; bar@8 → false; foo@10 → false (foo was printed at 1, only 9 seconds ago); foo@11 → true.",
 "why": "A message may be printed only if the same message was not printed in the last 10 seconds.",
 "idea": "Keep a dictionary message → time it was last printed. Print (and update) only when there is no entry or at least 10 seconds have passed.",
 "input": "foo@1, bar@2, foo@3, bar@8, foo@10, foo@11",
 "output": "T, T, F, F, F, T",
 "notes": [],
 "best": "Keep a dictionary message → time it was last printed. Print (and update) only when there is no entry or at least 10 seconds have passed.",
 "variants": [
  {
   "name": "Remember the last print time",
   "code": "class Logger:\n    def __init__(self):\n        self.last = {}\n    def shouldPrintMessage(self, timestamp, message):\n        if message in self.last and timestamp - self.last[message] < 10: return False\n        self.last[message] = timestamp\n        return True",
   "time": "O(1)",
   "space": "O(messages)",
   "explain": "Keep a dictionary message → time it was last printed. Print (and update) only when there is no entry or at least 10 seconds have passed.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sliding window of the last 10 seconds",
   "tag": "Alternative",
   "code": "class Logger:\n    def __init__(self):\n        self.q = deque()\n        self.inside = set()\n    def shouldPrintMessage(self, timestamp, message):\n        while self.q and self.q[0][0] <= timestamp - 10:\n            self.inside.discard(self.q.popleft()[1])\n        if message in self.inside: return False\n        self.q.append((timestamp, message))\n        self.inside.add(message)\n        return True",
   "time": "O(1) amortised",
   "space": "O(messages in window)",
   "explain": "A queue of recent messages plus a set; drop messages older than 10 seconds first.",
   "frames": [],
   "alt": true
  }
 ]
};
