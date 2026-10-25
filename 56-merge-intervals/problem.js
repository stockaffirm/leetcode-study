window.PROBLEM = {
 "id": "56",
 "title": "Merge Intervals",
 "level": "Medium",
 "topic": "Intervals",
 "question": "Given a list of intervals (each is [start, end]), merge all intervals that overlap and return the resulting non-overlapping intervals. Example: [[1,3],[2,6],[8,10],[15,18]] → [1,3] and [2,6] overlap and merge into [1,6] → [[1,6],[8,10],[15,18]].",
 "why": "[1,3] and [2,6] overlap → [1,6]; [8,10] and [15,18] stand alone.",
 "idea": "Sort by start. If the next one starts before the last one ends, extend the last one.",
 "input": "[[1,3],[2,6],[8,10],[15,18]]",
 "output": "[[1,6],[8,10],[15,18]]",
 "notes": [],
 "best": "Sort by start. If the next one starts before the last one ends, extend the last one.",
 "variants": [
  {
   "name": "Sort by start",
   "code": "class Solution:\n    def merge(self, intervals):\n        intervals.sort()\n        res = [intervals[0]]\n        for s, e in intervals[1:]:\n            if s <= res[-1][1]: res[-1][1] = max(res[-1][1], e)\n            else: res.append([s, e])\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort by start. If the next one starts before the last one ends, extend the last one.",
   "frames": [
    {
     "title": "Sorted",
     "description": "Already sorted by start.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "intervals",
       "cells": [
        "[1,3]",
        "[2,6]",
        "[8,10]",
        "[15,18]"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "res",
       "cells": [
        "[1,3]"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "[2,6]",
     "description": "2 ≤ 3 → overlap → [1,6].",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "intervals",
       "cells": [
        "[1,3]",
        "[2,6]",
        "[8,10]",
        "[15,18]"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "res",
       "cells": [
        "[1,6]"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "[8,10]",
     "description": "8 > 6 → new interval.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "intervals",
       "cells": [
        "[1,3]",
        "[2,6]",
        "[8,10]",
        "[15,18]"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "res",
       "cells": [
        "[1,6]",
        "[8,10]"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "[15,18]",
     "description": "15 > 10 → new interval.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "intervals",
       "cells": [
        "[1,3]",
        "[2,6]",
        "[8,10]",
        "[15,18]"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "res",
       "cells": [
        "[1,6]",
        "[8,10]",
        "[15,18]"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Merge repeatedly (brute force)",
   "tag": "Brute force",
   "code": "class Solution:\n    def merge(self, intervals):\n        intervals = [list(x) for x in intervals]; changed = True\n        while changed:\n            changed = False\n            for i in range(len(intervals)):\n                for j in range(i + 1, len(intervals)):\n                    a, b = intervals[i], intervals[j]\n                    if a[0] <= b[1] and b[0] <= a[1]:\n                        intervals[i] = [min(a[0], b[0]), max(a[1], b[1])]; intervals.pop(j); changed = True; break\n                if changed: break\n        return sorted(intervals)",
   "time": "O(n³)",
   "space": "O(n)",
   "explain": "Merge any overlapping pair and rescan until nothing overlaps.",
   "frames": [],
   "alt": true
  }
 ]
};
