window.PROBLEM = {
 "id": "42",
 "title": "Trapping Rain Water",
 "level": "Hard",
 "topic": "Array / String",
 "question": "height[i] is the height of a bar of width 1 in a row of bars. After it rains, water collects between bars. Return how many units of water are trapped in total. Water above a bar is limited by the shorter of the tallest bar on its left and the tallest bar on its right. Example: [0,1,0,2,1,0,1,3,2,1,2,1] → 6 units.",
 "why": "[0,1,0,2,1,0,1,3,2,1,2,1] traps 6 units.",
 "idea": "Water above a bar = (shorter of the tallest bar on each side) − its height. Use two pointers moving inward.",
 "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
 "output": "6",
 "notes": [],
 "best": "Water above a bar = (shorter of the tallest bar on each side) − its height. Use two pointers moving inward.",
 "variants": [
  {
   "name": "Two pointers",
   "code": "class Solution:\n    def trap(self, height):\n        l, r = 0, len(height) - 1\n        lmax = rmax = water = 0\n        while l < r:\n            if height[l] < height[r]:\n                lmax = max(lmax, height[l]); water += lmax - height[l]; l += 1\n            else:\n                rmax = max(rmax, height[r]); water += rmax - height[r]; r -= 1\n        return water",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Water above a bar = (shorter of the tallest bar on each side) − its height. Use two pointers moving inward.",
   "frames": [
    {
     "title": "Start",
     "description": "Two pointers at both ends.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [],
       "marks": {
        "0": "l",
        "11": "r"
       }
      }
     ]
    },
    {
     "title": "l=0, r=11",
     "description": "Left is lower: left max 0, water +0",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "water": 0
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "l",
        "11": "r"
       }
      }
     ]
    },
    {
     "title": "l=1, r=11",
     "description": "Right is lower: right max 1, water +0",
     "codeLines": [
      6,
      9
     ],
     "facts": {
      "water": 0
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        11
       ],
       "marks": {
        "1": "l",
        "11": "r"
       }
      }
     ]
    },
    {
     "title": "l=1, r=10",
     "description": "Left is lower: left max 1, water +0",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "water": 0
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        1
       ],
       "marks": {
        "1": "l",
        "10": "r"
       }
      }
     ]
    },
    {
     "title": "l=2, r=10",
     "description": "Left is lower: left max 1, water +1",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "water": 1
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        2
       ],
       "marks": {
        "2": "l",
        "10": "r"
       }
      }
     ]
    },
    {
     "title": "l=3, r=10",
     "description": "Right is lower: right max 2, water +0",
     "codeLines": [
      6,
      9
     ],
     "facts": {
      "water": 1
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        10
       ],
       "marks": {
        "3": "l",
        "10": "r"
       }
      }
     ]
    },
    {
     "title": "l=3, r=9",
     "description": "Right is lower: right max 2, water +1",
     "codeLines": [
      6,
      9
     ],
     "facts": {
      "water": 2
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        9
       ],
       "marks": {
        "3": "l",
        "9": "r"
       }
      }
     ]
    },
    {
     "title": "l=3, r=8",
     "description": "Right is lower: right max 2, water +0",
     "codeLines": [
      6,
      9
     ],
     "facts": {
      "water": 2
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        8
       ],
       "marks": {
        "3": "l",
        "8": "r"
       }
      }
     ]
    },
    {
     "title": "l=3, r=7",
     "description": "Left is lower: left max 2, water +0",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "water": 2
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "l",
        "7": "r"
       }
      }
     ]
    },
    {
     "title": "l=4, r=7",
     "description": "Left is lower: left max 2, water +1",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "water": 3
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        4
       ],
       "marks": {
        "4": "l",
        "7": "r"
       }
      }
     ]
    },
    {
     "title": "l=5, r=7",
     "description": "Left is lower: left max 2, water +2",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "water": 5
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        5
       ],
       "marks": {
        "5": "l",
        "7": "r"
       }
      }
     ]
    },
    {
     "title": "l=6, r=7",
     "description": "Left is lower: left max 2, water +1",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "water": 6
     },
     "rows": [
      {
       "name": "height",
       "cells": [
        "0",
        "1",
        "0",
        "2",
        "1",
        "0",
        "1",
        "3",
        "2",
        "1",
        "2",
        "1"
       ],
       "hot": [
        6
       ],
       "marks": {
        "6": "l",
        "7": "r"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "6 units trapped.",
     "codeLines": [
      10
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "6"
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
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def trap(self, height):\n        water = 0\n        for i in range(len(height)):\n            water += max(0, min(max(height[:i + 1]), max(height[i:])) - height[i])\n        return water",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each bar, find the tallest bar on each side.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Prefix / suffix max arrays",
   "tag": "Alternative",
   "code": "class Solution:\n    def trap(self, height):\n        n = len(height); left = [0] * n; right = [0] * n\n        left[0] = height[0]\n        for i in range(1, n): left[i] = max(left[i-1], height[i])\n        right[-1] = height[-1]\n        for i in range(n - 2, -1, -1): right[i] = max(right[i+1], height[i])\n        return sum(min(left[i], right[i]) - height[i] for i in range(n))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Precompute the tallest bar to the left and right of every position.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Monotonic stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def trap(self, height):\n        st, water = [], 0\n        for i, h in enumerate(height):\n            while st and height[st[-1]] < h:\n                mid = st.pop()\n                if not st: break\n                w = i - st[-1] - 1\n                water += w * (min(height[st[-1]], h) - height[mid])\n            st.append(i)\n        return water",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A taller bar closes a basin over the shorter bars on the stack.",
   "frames": [],
   "alt": true
  }
 ]
};
