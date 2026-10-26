window.PROBLEM = {
 "id": "201",
 "title": "Bitwise AND of Numbers Range",
 "level": "Medium",
 "topic": "Bit Manipulation",
 "question": "Given two whole numbers left and right, return the bitwise AND of ALL numbers in the range [left, right] (bitwise AND keeps a binary digit as 1 only if it is 1 in both numbers). Example: left=5 (101), right=7 (111) → 5 & 6 & 7 = 4 (100).",
 "why": "5 AND 6 AND 7 = 4.",
 "idea": "The result is the common binary prefix of left and right. Shift both right until they match.",
 "input": "left=5 (101), right=7 (111)",
 "output": "4",
 "notes": [],
 "best": "The result is the common binary prefix of left and right. Shift both right until they match.",
 "variants": [
  {
   "name": "Common binary prefix",
   "code": "class Solution:\n    def rangeBitwiseAnd(self, left, right):\n        shift = 0\n        while left != right:\n            left >>= 1; right >>= 1; shift += 1\n        return left << shift",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "The result is the common binary prefix of left and right. Shift both right until they match.",
   "frames": [
    {
     "title": "Start",
     "description": "left = 101, right = 111.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "left",
       "cells": [
        "1",
        "0",
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "right",
       "cells": [
        "1",
        "1",
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Shift 1",
     "description": "10 vs 11 — still different.",
     "codeLines": [
      5
     ],
     "facts": {
      "shift": 1
     },
     "rows": [
      {
       "name": "left",
       "cells": [
        "1",
        "0"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "right",
       "cells": [
        "1",
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Shift 2",
     "description": "1 vs 1 — equal! Common prefix = 1.",
     "codeLines": [
      4
     ],
     "facts": {
      "shift": 2
     },
     "rows": [
      {
       "name": "left",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "right",
       "cells": [
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
     "title": "Return",
     "description": "1 << 2 = 100 = 4.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "1",
        "0",
        "0"
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
   "name": "Clear the lowest bit of right",
   "tag": "Alternative",
   "code": "class Solution:\n    def rangeBitwiseAnd(self, left, right):\n        while right > left: right &= right - 1\n        return right",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Remove right's lowest set bit until it no longer exceeds left.",
   "frames": [],
   "alt": true
  },
  {
   "name": "AND every number",
   "tag": "Brute force",
   "code": "class Solution:\n    def rangeBitwiseAnd(self, left, right):\n        res = left\n        for x in range(left + 1, right + 1): res &= x\n        return res",
   "time": "O(right − left)",
   "space": "O(1)",
   "explain": "Literally AND all the numbers in the range.",
   "frames": [],
   "alt": true
  }
 ]
};
