window.PROBLEM = {
 "id": "1732",
 "title": "Find the Highest Altitude",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "A biker starts at altitude 0. The list gain has n numbers; gain[i] is the change in altitude between point i and point i+1 (positive = climbs, negative = descends). Return the highest altitude reached at any point, including the starting 0. Example: gain=[-5,1,5,0,-7] → altitudes 0, -5, -4, 1, 1, -6, so the highest is 1.",
 "input": "gain = [-5, 1, 5, 0, -7]",
 "output": "1",
 "notes": [
  "Include the starting altitude 0 in the max.",
  "Prefix sum = running total."
 ],
 "best": "A running prefix sum with a max — no array needed.",
 "variants": [
  {
   "name": "Running sum",
   "code": "class Solution:\n    def largestAltitude(self, gain):\n        alt = best = 0\n        for g in gain:\n            alt += g\n            best = max(best, alt)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Running sum of the gains; track the max.",
   "frames": [
    {
     "title": "Start",
     "description": "Altitude 0 at the start.",
     "codeLines": [
      3
     ],
     "facts": {
      "alt": 0,
      "best": 0
     },
     "rows": [
      {
       "name": "gain",
       "cells": [
        "-5",
        "1",
        "5",
        "0",
        "-7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leg 1",
     "description": "alt = -5",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "alt": -5,
      "best": 0
     },
     "rows": [
      {
       "name": "gain",
       "cells": [
        "-5",
        "1",
        "5",
        "0",
        "-7"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "altitude",
       "cells": [
        "0",
        "-5"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leg 2",
     "description": "alt = -4",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "alt": -4,
      "best": 0
     },
     "rows": [
      {
       "name": "gain",
       "cells": [
        "-5",
        "1",
        "5",
        "0",
        "-7"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "altitude",
       "cells": [
        "0",
        "-5",
        "-4"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leg 3",
     "description": "alt = 1 (new best)",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "alt": 1,
      "best": 1
     },
     "rows": [
      {
       "name": "gain",
       "cells": [
        "-5",
        "1",
        "5",
        "0",
        "-7"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "altitude",
       "cells": [
        "0",
        "-5",
        "-4",
        "1"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leg 4",
     "description": "alt = 1 (new best)",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "alt": 1,
      "best": 1
     },
     "rows": [
      {
       "name": "gain",
       "cells": [
        "-5",
        "1",
        "5",
        "0",
        "-7"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "altitude",
       "cells": [
        "0",
        "-5",
        "-4",
        "1",
        "1"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leg 5",
     "description": "alt = -6",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "alt": -6,
      "best": 1
     },
     "rows": [
      {
       "name": "gain",
       "cells": [
        "-5",
        "1",
        "5",
        "0",
        "-7"
       ],
       "hot": [
        4
       ],
       "marks": {}
      },
      {
       "name": "altitude",
       "cells": [
        "0",
        "-5",
        "-4",
        "1",
        "1",
        "-6"
       ],
       "hot": [
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Highest point reached.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "best",
       "cells": [
        "1"
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
   "name": "Prefix array",
   "tag": "Alternative",
   "code": "class Solution:\n    def largestAltitude(self, gain):\n        alt = [0]\n        for g in gain: alt.append(alt[-1] + g)\n        return max(alt)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build the list of altitudes, then take its maximum.",
   "frames": [],
   "alt": true
  },
  {
   "name": "itertools.accumulate",
   "tag": "Pythonic",
   "code": "class Solution:\n    def largestAltitude(self, gain):\n        return max(accumulate([0] + gain))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "accumulate produces the running totals in one call.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "0 → -5 → -4 → 1 → 1 → -6. The highest height is 1.",
 "idea": "Keep a running total. Remember the biggest total seen."
};
