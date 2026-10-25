window.PROBLEM = {
 "id": "2300",
 "title": "Successful Pairs of Spells and Potions",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "You have spells (a list) and potions (a list) of strengths. A spell and a potion form a successful pair if spell × potion ≥ success. For every spell, return how many potions would make a successful pair with it. Example: spells=[5,1,3], potions=[1,2,3,4,5], success=7 → spell 5 works with potions 2..5 (4 of them), spell 1 with none, spell 3 with 3,4,5 → [4,0,3].",
 "input": "spells=[5,1,3], potions=[1,2,3,4,5], success=7",
 "output": "[4, 0, 3]",
 "notes": [
  "need = ceil(success / s) via (success + s - 1) // s.",
  "Everything right of the cut-off works."
 ],
 "best": "Sort potions once; bisect for the cut-off per spell.",
 "variants": [
  {
   "name": "Sort + bisect",
   "code": "class Solution:\n    def successfulPairs(self, spells, potions, success):\n        potions.sort()\n        m = len(potions)\n        return [m - bisect_left(potions, (success + s - 1) // s) for s in spells]",
   "time": "O((n+m) log m)",
   "space": "O(1)",
   "explain": "Binary search the smallest potion that is strong enough.",
   "frames": [
    {
     "title": "Sorted potions",
     "description": "For each spell, find the first potion ≥ need.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "potions",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Spell 5",
     "description": "need = ceil(7/5) = 2 → first at index 1 → 5 − 1 = 4 pairs.",
     "codeLines": [
      5
     ],
     "facts": {
      "count": 4
     },
     "rows": [
      {
       "name": "potions",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [
        1,
        2,
        3,
        4
       ],
       "marks": {
        "1": "need"
       }
      }
     ]
    },
    {
     "title": "Spell 1",
     "description": "need = 7 → none (index 5) → 0 pairs.",
     "codeLines": [
      5
     ],
     "facts": {
      "count": 0
     },
     "rows": [
      {
       "name": "potions",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Spell 3",
     "description": "need = ceil(7/3) = 3 → index 2 → 5 − 2 = 3 pairs.",
     "codeLines": [
      5
     ],
     "facts": {
      "count": 3
     },
     "rows": [
      {
       "name": "potions",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [
        2,
        3,
        4
       ],
       "marks": {
        "2": "need"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "[4, 0, 3]",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "4",
        "0",
        "3"
       ],
       "hot": [
        0,
        1,
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
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def successfulPairs(self, spells, potions, success):\n        return [sum(1 for p in potions if s * p >= success) for s in spells]",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "Test every spell against every potion.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Hand-written binary search",
   "tag": "Alternative",
   "code": "class Solution:\n    def successfulPairs(self, spells, potions, success):\n        potions.sort(); m = len(potions); res = []\n        for s in spells:\n            lo, hi = 0, m\n            while lo < hi:\n                mid = (lo + hi) // 2\n                if s * potions[mid] >= success: hi = mid\n                else: lo = mid + 1\n            res.append(m - lo)\n        return res",
   "time": "O((n+m) log m)",
   "space": "O(1)",
   "explain": "Sort potions and binary-search the first strong-enough one.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Spell 5 needs a potion of at least 2: potions 2, 3, 4, 5 → 4 potions.",
 "idea": "Sort the potions. Binary search for the first one that is strong enough."
};
