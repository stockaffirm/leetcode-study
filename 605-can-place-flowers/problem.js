window.PROBLEM = {
 "id": "605",
 "title": "Can Place Flowers",
 "level": "Easy",
 "topic": "Greedy",
 "question": "flowerbed is a list where 0 means an empty plot and 1 means a plot with a flower. Flowers can't be planted in adjacent plots (two 1s may never sit side by side). Given an integer n, return true if you can plant n NEW flowers without breaking that rule, otherwise false. Existing flowers never move. Example: [1,0,0,0,1] with n=1 → only the middle plot is free of neighbours, so true.",
 "input": "flowerbed=[1,0,0,0,1], n=1",
 "output": "True",
 "notes": [
  "Greedy means take the earliest locally valid planting decision, without backtracking.",
  "OR short circuits: i==0 prevents accidentally looking up flowerbed[-1].",
  "AND ensures both neighbors are empty (or outside the boundaries).",
  "Early return improves practical speed but worst-case time remains O(m).",
  "Check n == 0 first to avoid unnecessary mutation of flowerbed."
 ],
 "best": "Choose the earliest legal position and stop once enough flowers are planted.",
 "variants": [
  {
   "name": "Greedy + early return",
   "code": "class Solution:\n    def canPlaceFlowers(self, flowerbed, n):\n        if n == 0: return True\n        count = 0\n        for i in range(len(flowerbed)):\n            if flowerbed[i] == 0:\n                left = i == 0 or flowerbed[i-1] == 0\n                right = i == len(flowerbed)-1 or flowerbed[i+1] == 0\n                if left and right:\n                    flowerbed[i] = 1\n                    count += 1\n                    if count >= n: return True\n        return False",
   "time": "O(m)",
   "space": "O(1) auxiliary",
   "explain": "Choose the earliest legal position and stop once enough flowers are planted.",
   "frames": [
    {
     "title": "Input",
     "description": "Need to plant one flower without adjacent flowers.",
     "codeLines": [
      2,
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "plots",
       "cells": [
        "1",
        "0",
        "0",
        "0",
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "i=0: skip",
     "description": "The first plot is already occupied.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "plots",
       "cells": [
        "1",
        "0",
        "0",
        "0",
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "i=1: blocked",
     "description": "Index 1 is empty but left neighbor index 0 contains 1.",
     "codeLines": [
      7,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "plots",
       "cells": [
        "1",
        "0",
        "0",
        "0",
        "1"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "i=2: can plant",
     "description": "Index 2 and both neighbors are 0.",
     "codeLines": [
      7,
      8,
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "plots",
       "cells": [
        "1",
        "0",
        "0",
        "0",
        "1"
       ],
       "hot": [
        1,
        2,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Plant and return",
     "description": "Change index 2 to 1. count = 1, so return True.",
     "codeLines": [
      10,
      11,
      12
     ],
     "facts": {},
     "rows": [
      {
       "name": "plots",
       "cells": [
        "1",
        "0",
        "1",
        "0",
        "1"
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
   "name": "Pad with zeros",
   "tag": "Alternative",
   "code": "class Solution:\n    def canPlaceFlowers(self, flowerbed, n):\n        bed = [0] + flowerbed + [0]\n        count, i = 0, 1\n        while i < len(bed) - 1:\n            if bed[i-1] == 0 and bed[i] == 0 and bed[i+1] == 0:\n                bed[i] = 1; count += 1; i += 2\n            else: i += 1\n        return count >= n",
   "time": "O(m)",
   "space": "O(m)",
   "explain": "Add an empty plot at each end so the edges need no special case.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Count empty runs",
   "tag": "Alternative",
   "code": "class Solution:\n    def canPlaceFlowers(self, flowerbed, n):\n        count, run = 0, 1\n        for x in flowerbed + [0, 1]:\n            if x == 0: run += 1\n            else:\n                count += (run - 1) // 2; run = 0\n        return count >= n",
   "time": "O(m)",
   "space": "O(1)",
   "explain": "A run of z empty plots between flowers fits (z − 1) // 2 flowers.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "[1,0,0,0,1]: only the middle plot has empty plots on both sides. Plant there → one flower fits → True.",
 "idea": "Go left to right. Plant whenever a plot and both its neighbours are empty."
};
