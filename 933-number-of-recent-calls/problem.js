window.PROBLEM = {
 "id": "933",
 "title": "Number of Recent Calls",
 "level": "Easy",
 "topic": "Queue",
 "question": "Design a class RecentCounter. Its method ping(t) records a new request at time t (in milliseconds; each call has a larger t than the previous one) and returns how many requests happened in the time window [t − 3000, t], counting this one. Example: pings at 1, 100, 3001, 3002 return 1, 2, 3, 3 — at 3002 the window is [2, 3002], which no longer includes time 1.",
 "input": "ping(1), ping(100), ping(3001), ping(3002)",
 "output": "1, 2, 3, 3",
 "notes": [
  "Each timestamp is pushed and popped once.",
  "Window is [t-3000, t], inclusive."
 ],
 "best": "A queue: times arrive in order, so old ones expire from the front.",
 "variants": [
  {
   "name": "Queue",
   "code": "class RecentCounter:\n    def __init__(self):\n        self.q = deque()\n    def ping(self, t):\n        self.q.append(t)\n        while self.q[0] < t - 3000:\n            self.q.popleft()\n        return len(self.q)",
   "time": "O(1) amortised",
   "space": "O(window)",
   "explain": "Queue of timestamps; drop the expired ones from the front.",
   "frames": [
    {
     "title": "Empty queue",
     "description": "Timestamps arrive in increasing order.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "queue",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "ping(1)",
     "description": "Nothing expired (cut-off -2999).",
     "codeLines": [
      5,
      6,
      8
     ],
     "facts": {
      "cut-off": -2999,
      "count": 1
     },
     "rows": [
      {
       "name": "queue",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "ping(100)",
     "description": "Nothing expired (cut-off -2900).",
     "codeLines": [
      5,
      6,
      8
     ],
     "facts": {
      "cut-off": -2900,
      "count": 2
     },
     "rows": [
      {
       "name": "queue",
       "cells": [
        "1",
        "100"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "ping(3001)",
     "description": "Nothing expired (cut-off 1).",
     "codeLines": [
      5,
      6,
      8
     ],
     "facts": {
      "cut-off": 1,
      "count": 3
     },
     "rows": [
      {
       "name": "queue",
       "cells": [
        "1",
        "100",
        "3001"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "ping(3002)",
     "description": "Window starts at 2: drop 1.",
     "codeLines": [
      5,
      6,
      8
     ],
     "facts": {
      "cut-off": 2,
      "count": 3
     },
     "rows": [
      {
       "name": "queue",
       "cells": [
        "100",
        "3001",
        "3002"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Binary search on a list",
   "tag": "Alternative",
   "code": "class RecentCounter:\n    def __init__(self): self.t = []\n    def ping(self, t):\n        self.t.append(t)\n        return len(self.t) - bisect_left(self.t, t - 3000)",
   "time": "O(log n)",
   "space": "O(n)",
   "explain": "Keep every ping; bisect finds the first ping inside the window.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Count every ping",
   "tag": "Brute force",
   "code": "class RecentCounter:\n    def __init__(self): self.t = []\n    def ping(self, t):\n        self.t.append(t)\n        return sum(1 for x in self.t if x >= t - 3000)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Store all pings and count the recent ones each time.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Pings at 1 and 100 → 2. At 3001 the window is 1…3001, so 3. At 3002 the window is 2…3002, which drops the ping at 1 → still 3.",
 "idea": "Keep a queue of times. Remove old ones from the front."
};
