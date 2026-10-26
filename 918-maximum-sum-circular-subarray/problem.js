window.PROBLEM = {
 "id": "918",
 "title": "Maximum Sum Circular Subarray",
 "level": "Medium",
 "topic": "Kadane's Algorithm",
 "question": "The list nums is circular: after the last number comes the first one again. Find the stretch of numbers sitting next to each other (it may wrap around the end) with the LARGEST sum, and return that sum. Each number can be used at most once. Example: [5,-3,5] → wrap around: 5 + 5 = 10.",
 "why": "[5,-3,5]: wrapping around, 5 + 5 = 10.",
 "idea": "The best run either doesn't wrap (normal Kadane) or wraps — then it equals total − (smallest run in the middle).",
 "input": "[5,-3,5]",
 "output": "10",
 "notes": [],
 "best": "The best run either doesn't wrap (normal Kadane) or wraps — then it equals total − (smallest run in the middle).",
 "variants": [
  {
   "name": "Kadane + total − min",
   "code": "class Solution:\n    def maxSubarraySumCircular(self, nums):\n        total, cur_max, cur_min = 0, 0, 0\n        best_max, best_min = nums[0], nums[0]\n        for x in nums:\n            cur_max = max(x, cur_max + x); best_max = max(best_max, cur_max)\n            cur_min = min(x, cur_min + x); best_min = min(best_min, cur_min)\n            total += x\n        return best_max if best_max < 0 else max(best_max, total - best_min)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The best run either doesn't wrap (normal Kadane) or wraps — then it equals total − (smallest run in the middle).",
   "frames": [
    {
     "title": "Start",
     "description": "Track the biggest and smallest runs, and the total.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "-3",
        "5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 5",
     "description": "biggest run 5, smallest run 5, total 5",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "bestMax": 5,
      "bestMin": 5,
      "total": 5
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "-3",
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = -3",
     "description": "biggest run 5, smallest run -3, total 2",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "bestMax": 5,
      "bestMin": -3,
      "total": 2
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "-3",
        "5"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 5",
     "description": "biggest run 7, smallest run -3, total 7",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "bestMax": 7,
      "bestMin": -3,
      "total": 7
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "-3",
        "5"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "max(7, total 7 − smallest (−3)) = max(7, 10) = 10 (wrap-around).",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "-3",
        "5"
       ],
       "hot": [
        2,
        0
       ],
       "marks": {}
      },
      {
       "name": "answer",
       "cells": [
        "10"
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
   "name": "Brute force over rotations",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxSubarraySumCircular(self, nums):\n        n = len(nums); best = float('-inf')\n        for i in range(n):\n            s = 0\n            for k in range(n): s += nums[(i + k) % n]; best = max(best, s)\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "From every start walk around the circle, tracking the best sum.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Two Kadane passes",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxSubarraySumCircular(self, nums):\n        def kadane(arr, f):\n            cur = best = arr[0]\n            for x in arr[1:]: cur = f(x, cur + x); best = f(best, cur)\n            return best\n        mx = kadane(nums, max); mn = kadane(nums, min); total = sum(nums)\n        return mx if mx < 0 else max(mx, total - mn)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Run Kadane for the max and for the min, then compare with total − min.",
   "frames": [],
   "alt": true
  }
 ]
};
