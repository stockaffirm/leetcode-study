window.PROBLEM = {
 "id": "502",
 "title": "IPO",
 "level": "Hard",
 "topic": "Heap",
 "question": "You can do at most k projects. You start with w capital. Project i needs at least capital[i] to start and then adds profits[i] to your capital when finished. Pick up to k projects to END with the maximum capital. Example: k=2, w=0, profits=[1,2,3], capital=[0,1,1] → do project 0 (capital becomes 1), then project 2 (profit 3) → 4.",
 "why": "k=2, w=0, profits [1,2,3], capital [0,1,1] → do project 0 (+1 → w=1), then project 2 (+3 → w=4).",
 "idea": "Each round, among projects you can afford, take the most profitable one (max-heap).",
 "input": "k=2, w=0, profits=[1,2,3], capital=[0,1,1]",
 "output": "4",
 "notes": [],
 "best": "Each round, among projects you can afford, take the most profitable one (max-heap).",
 "variants": [
  {
   "name": "Max-heap of affordable profits",
   "code": "class Solution:\n    def findMaximizedCapital(self, k, w, profits, capital):\n        projects = sorted(zip(capital, profits)); heap = []; i = 0\n        for _ in range(k):\n            while i < len(projects) and projects[i][0] <= w:\n                heappush(heap, -projects[i][1]); i += 1\n            if not heap: break\n            w -= heappop(heap)\n        return w",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Each round, among projects you can afford, take the most profitable one (max-heap).",
   "frames": [
    {
     "title": "Sort by cost",
     "description": "(capital, profit): (0,1), (1,2), (1,3).",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "projects",
       "cells": [
        "(0,1)",
        "(1,2)",
        "(1,3)"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "capital w",
       "cells": [
        "0"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Round 1",
     "description": "Only (0,1) is affordable → profit 1 → w = 1.",
     "codeLines": [
      5,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "affordable profits",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "capital w",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Round 2",
     "description": "Now (1,2) and (1,3) are affordable → take the best profit 3 → w = 4.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "affordable profits",
       "cells": [
        "3",
        "2"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "capital w",
       "cells": [
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "k = 2 rounds done → 4.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Scan for the best affordable project",
   "tag": "Brute force",
   "code": "class Solution:\n    def findMaximizedCapital(self, k, w, profits, capital):\n        used = [False] * len(profits)\n        for _ in range(k):\n            best = -1\n            for i in range(len(profits)):\n                if not used[i] and capital[i] <= w and (best == -1 or profits[i] > profits[best]): best = i\n            if best == -1: break\n            used[best] = True; w += profits[best]\n        return w",
   "time": "O(k·n)",
   "space": "O(n)",
   "explain": "Each round linearly search for the most profitable project you can afford.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Min-heap by capital + max-heap by profit",
   "tag": "Alternative",
   "code": "class Solution:\n    def findMaximizedCapital(self, k, w, profits, capital):\n        projects = list(zip(capital, profits)); heapify(projects); avail = []\n        for _ in range(k):\n            while projects and projects[0][0] <= w:\n                c, p = heappop(projects); heappush(avail, -p)\n            if not avail: break\n            w += -heappop(avail)\n        return w",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Move newly affordable projects from one heap to the other.",
   "frames": [],
   "alt": true
  }
 ]
};
