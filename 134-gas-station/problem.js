window.PROBLEM = {
 "id": "134",
 "title": "Gas Station",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Gas stations are placed around a circular road. gas[i] is the fuel you get at station i, and cost[i] is the fuel needed to drive from station i to the next one. You start with an empty tank at one station and drive around the circle in order. Return the index of the station where you can start and complete one full lap, or -1 if no start works (the answer is unique when it exists). Example: gas=[1,2,3,4,5], cost=[3,4,5,1,2] → start at station 3.",
 "why": "gas [1,2,3,4,5], cost [3,4,5,1,2] → start at station 3.",
 "idea": "If the tank goes negative, the start can't be anywhere before here — restart from the next station.",
 "input": "gas=[1,2,3,4,5], cost=[3,4,5,1,2]",
 "output": "3",
 "notes": [],
 "best": "If the tank goes negative, the start can't be anywhere before here — restart from the next station.",
 "variants": [
  {
   "name": "One pass with a restart",
   "code": "class Solution:\n    def canCompleteCircuit(self, gas, cost):\n        if sum(gas) < sum(cost): return -1\n        tank = start = 0\n        for i in range(len(gas)):\n            tank += gas[i] - cost[i]\n            if tank < 0:\n                start, tank = i + 1, 0\n        return start",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "If the tank goes negative, the start can't be anywhere before here — restart from the next station.",
   "frames": [
    {
     "title": "Net fuel",
     "description": "gas − cost at each station.",
     "codeLines": [
      3
     ],
     "facts": {
      "total": "≥ 0 → possible"
     },
     "rows": [
      {
       "name": "gas − cost",
       "cells": [
        "-2",
        "-2",
        "-2",
        "3",
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Station 0",
     "description": "Tank negative → restart from station 1",
     "codeLines": [
      6,
      8
     ],
     "facts": {
      "tank": 0
     },
     "rows": [
      {
       "name": "gas − cost",
       "cells": [
        "-2",
        "-2",
        "-2",
        "3",
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {
        "1": "start"
       }
      }
     ]
    },
    {
     "title": "Station 1",
     "description": "Tank negative → restart from station 2",
     "codeLines": [
      6,
      8
     ],
     "facts": {
      "tank": 0
     },
     "rows": [
      {
       "name": "gas − cost",
       "cells": [
        "-2",
        "-2",
        "-2",
        "3",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {
        "2": "start"
       }
      }
     ]
    },
    {
     "title": "Station 2",
     "description": "Tank negative → restart from station 3",
     "codeLines": [
      6,
      8
     ],
     "facts": {
      "tank": 0
     },
     "rows": [
      {
       "name": "gas − cost",
       "cells": [
        "-2",
        "-2",
        "-2",
        "3",
        "3"
       ],
       "hot": [
        2
       ],
       "marks": {
        "3": "start"
       }
      }
     ]
    },
    {
     "title": "Station 3",
     "description": "tank = 3",
     "codeLines": [
      6
     ],
     "facts": {
      "tank": 3
     },
     "rows": [
      {
       "name": "gas − cost",
       "cells": [
        "-2",
        "-2",
        "-2",
        "3",
        "3"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "start"
       }
      }
     ]
    },
    {
     "title": "Station 4",
     "description": "tank = 6",
     "codeLines": [
      6
     ],
     "facts": {
      "tank": 6
     },
     "rows": [
      {
       "name": "gas − cost",
       "cells": [
        "-2",
        "-2",
        "-2",
        "3",
        "3"
       ],
       "hot": [
        4
       ],
       "marks": {
        "3": "start"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "Start at station 3.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "gas − cost",
       "cells": [
        "-2",
        "-2",
        "-2",
        "3",
        "3"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "start"
       }
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Try every start",
   "tag": "Brute force",
   "code": "class Solution:\n    def canCompleteCircuit(self, gas, cost):\n        n = len(gas)\n        for s in range(n):\n            tank, ok = 0, True\n            for k in range(n):\n                i = (s + k) % n; tank += gas[i] - cost[i]\n                if tank < 0: ok = False; break\n            if ok: return s\n        return -1",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Simulate the full lap from each station.",
   "frames": [],
   "alt": true
  }
 ]
};
