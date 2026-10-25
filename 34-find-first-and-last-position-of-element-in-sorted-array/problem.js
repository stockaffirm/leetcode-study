window.PROBLEM = {
 "id": "34",
 "title": "Find First and Last Position of Element in Sorted Array",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "Given a list of numbers sorted from smallest to largest and a target, return the first and last position where the target occurs, as [first, last], or [−1, −1] if it doesn't occur. Aim for O(log n) (very fast: the work is halved at every step) time. Example: [5,7,7,8,8,10], target=8 → [3,4].",
 "why": "[5,7,7,8,8,10], target 8 → first at 3, last at 4.",
 "idea": "Binary search for the left edge (bisect_left) and the right edge (bisect_right − 1).",
 "input": "[5,7,7,8,8,10], target=8",
 "output": "[3, 4]",
 "notes": [],
 "best": "Binary search for the left edge (bisect_left) and the right edge (bisect_right − 1).",
 "variants": [
  {
   "name": "Two bisects",
   "code": "class Solution:\n    def searchRange(self, nums, target):\n        lo = bisect_left(nums, target)\n        if lo == len(nums) or nums[lo] != target: return [-1, -1]\n        return [lo, bisect_right(nums, target) - 1]",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Binary search for the left edge (bisect_left) and the right edge (bisect_right − 1).",
   "frames": [
    {
     "title": "Sorted list",
     "description": "Looking for 8.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "7",
        "7",
        "8",
        "8",
        "10"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "bisect_left",
     "description": "First position that is ≥ 8 → index 3.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "7",
        "7",
        "8",
        "8",
        "10"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "first"
       }
      }
     ]
    },
    {
     "title": "bisect_right",
     "description": "First position that is > 8 → index 5, so the last 8 is at 5 − 1 = 4.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "5",
        "7",
        "7",
        "8",
        "8",
        "10"
       ],
       "hot": [
        4
       ],
       "marks": {
        "4": "last"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "[3, 4]",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "3",
        "4"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def searchRange(self, nums, target):\n        first = last = -1\n        for i, x in enumerate(nums):\n            if x == target:\n                if first == -1: first = i\n                last = i\n        return [first, last]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan for the first and last occurrence.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Two hand-written binary searches",
   "tag": "Alternative",
   "code": "class Solution:\n    def searchRange(self, nums, target):\n        def left():\n            lo, hi = 0, len(nums)\n            while lo < hi:\n                mid = (lo + hi) // 2\n                if nums[mid] < target: lo = mid + 1\n                else: hi = mid\n            return lo\n        def right():\n            lo, hi = 0, len(nums)\n            while lo < hi:\n                mid = (lo + hi) // 2\n                if nums[mid] <= target: lo = mid + 1\n                else: hi = mid\n            return lo\n        l = left()\n        if l == len(nums) or nums[l] != target: return [-1, -1]\n        return [l, right() - 1]",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "One search for the left edge, one for the right edge.",
   "frames": [],
   "alt": true
  }
 ]
};
