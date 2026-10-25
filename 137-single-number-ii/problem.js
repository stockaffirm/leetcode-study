window.PROBLEM = {
 "id": "137",
 "title": "Single Number II",
 "level": "Medium",
 "topic": "Bit Manipulation",
 "question": "Every number in nums appears exactly THREE times except for one number that appears only once. Return that single number, using O(n) (time grows only in step with the input size) time and constant extra memory. Example: [2,2,3,2] → 3.",
 "why": "[2,2,3,2] → 3.",
 "idea": "Track which bits have been seen once ('ones') and twice ('twos'). A bit seen three times resets.",
 "input": "[2,2,3,2]",
 "output": "3",
 "notes": [],
 "best": "Track which bits have been seen once ('ones') and twice ('twos'). A bit seen three times resets.",
 "variants": [
  {
   "name": "Ones / twos bit trick",
   "code": "class Solution:\n    def singleNumber(self, nums):\n        ones = twos = 0\n        for x in nums:\n            ones = (ones ^ x) & ~twos\n            twos = (twos ^ x) & ~ones\n        return ones",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track which bits have been seen once ('ones') and twice ('twos'). A bit seen three times resets.",
   "frames": [
    {
     "title": "Start",
     "description": "ones = twos = 0",
     "codeLines": [
      3
     ],
     "facts": {
      "ones": 0,
      "twos": 0
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "3",
        "2"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 2",
     "description": "First 2 → ones = 2.",
     "codeLines": [
      5
     ],
     "facts": {
      "ones": 2,
      "twos": 0
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "3",
        "2"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 2",
     "description": "Second 2 → moves to twos.",
     "codeLines": [
      6
     ],
     "facts": {
      "ones": 0,
      "twos": 2
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "3",
        "2"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 3",
     "description": "3 appears once → ones = 1 (bit 0); twos keeps bit for 2 (1 after combining).",
     "codeLines": [
      5
     ],
     "facts": {
      "ones": 1,
      "twos": 0
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "3",
        "2"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 2",
     "description": "Third 2 → combined with 3 → ones = 3.",
     "codeLines": [
      6
     ],
     "facts": {
      "ones": 3,
      "twos": 0
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "3",
        "2"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "3",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "3"
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
   "name": "Counter",
   "tag": "Alternative",
   "code": "class Solution:\n    def singleNumber(self, nums):\n        cnt = Counter(nums)\n        return next(x for x, c in cnt.items() if c == 1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count occurrences and return the one that appears once.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Count bits per position",
   "tag": "Alternative",
   "code": "class Solution:\n    def singleNumber(self, nums):\n        res = 0\n        for i in range(32):\n            total = sum((x >> i) & 1 for x in nums)\n            if total % 3: res |= 1 << i\n        return res",
   "time": "O(32·n)",
   "space": "O(1)",
   "explain": "For each bit, the count of 1s mod 3 is the answer's bit.",
   "frames": [],
   "alt": true
  }
 ]
};
