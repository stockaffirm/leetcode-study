window.PROBLEM = {
 "id": "53",
 "title": "Maximum Subarray",
 "level": "Medium",
 "topic": "Kadane's Algorithm",
 "question": "Given a list of numbers (positive and negative), find the stretch of numbers sitting next to each other that has the LARGEST sum, and return that sum. The stretch must contain at least one number. Example: [-2,1,-3,4,-1,2,1,-5,4] → the stretch 4,-1,2,1 adds up to 6.",
 "why": "[-2,1,-3,4,-1,2,1,-5,4]: the run [4,-1,2,1] sums to 6.",
 "idea": "Kadane: at each number, either extend the current run or start fresh from this number.",
 "input": "[-2,1,-3,4,-1,2,1,-5,4]",
 "output": "6",
 "notes": [],
 "best": "Kadane: at each number, either extend the current run or start fresh from this number.",
 "variants": [
  {
   "name": "Kadane",
   "code": "class Solution:\n    def maxSubArray(self, nums):\n        cur = best = nums[0]\n        for x in nums[1:]:\n            cur = max(x, cur + x); best = max(best, cur)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Kadane: at each number, either extend the current run or start fresh from this number.",
   "frames": [
    {
     "title": "Start",
     "description": "cur = best = first number.",
     "codeLines": [
      3
     ],
     "facts": {
      "cur": -2,
      "best": -2
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 1",
     "description": "Start fresh at 1",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": 1,
      "best": 1
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = -3",
     "description": "Extend → -2",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": -2,
      "best": 1
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 4",
     "description": "Start fresh at 4",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": 4,
      "best": 4
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = -1",
     "description": "Extend → 3",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": 3,
      "best": 4
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 2",
     "description": "Extend → 5",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": 5,
      "best": 5
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 1",
     "description": "Extend → 6",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": 6,
      "best": 6
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        6
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = -5",
     "description": "Extend → 1",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": 1,
      "best": 6
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        7
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 4",
     "description": "Extend → 5",
     "codeLines": [
      5
     ],
     "facts": {
      "cur": 5,
      "best": 6
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        8
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Best = 6 (run 4, −1, 2, 1).",
     "codeLines": [
      6
     ],
     "facts": {
      "best": 6
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-2",
        "1",
        "-3",
        "4",
        "-1",
        "2",
        "1",
        "-5",
        "4"
       ],
       "hot": [
        3,
        4,
        5,
        6
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
   "code": "class Solution:\n    def maxSubArray(self, nums):\n        best = nums[0]\n        for i in range(len(nums)):\n            s = 0\n            for j in range(i, len(nums)): s += nums[j]; best = max(best, s)\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Try every start and extend, tracking the best sum.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Divide and conquer",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxSubArray(self, nums):\n        def go(l, r):\n            if l == r: return nums[l]\n            m = (l + r) // 2\n            left = go(l, m); right = go(m + 1, r)\n            s = 0; lm = float('-inf')\n            for i in range(m, l - 1, -1): s += nums[i]; lm = max(lm, s)\n            s = 0; rm = float('-inf')\n            for i in range(m + 1, r + 1): s += nums[i]; rm = max(rm, s)\n            return max(left, right, lm + rm)\n        return go(0, len(nums) - 1)",
   "time": "O(n log n)",
   "space": "O(log n)",
   "explain": "Best is in the left half, the right half, or crosses the middle.",
   "frames": [],
   "alt": true
  }
 ]
};
