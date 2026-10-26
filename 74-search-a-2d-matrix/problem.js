window.PROBLEM = {
 "id": "74",
 "title": "Search a 2D Matrix",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "You have a grid of numbers where every row is sorted from left to right and the first number of each row is larger than the last number of the previous row. Return true if target is somewhere in the grid. Aim for O(log(m·n)) (very fast: the work shrinks to a tiny fraction of the grid size) time. Example: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3 → true.",
 "why": "Target 3 is in the first row → True.",
 "idea": "Pretend the grid is one long sorted list and binary search it (index → row = i ÷ n, column = i mod n).",
 "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3",
 "output": "True",
 "notes": [],
 "best": "Pretend the grid is one long sorted list and binary search it (index → row = i ÷ n, column = i mod n).",
 "variants": [
  {
   "name": "Binary search on the flattened grid",
   "code": "class Solution:\n    def searchMatrix(self, matrix, target):\n        m, n = len(matrix), len(matrix[0])\n        lo, hi = 0, m * n - 1\n        while lo <= hi:\n            mid = (lo + hi) // 2\n            v = matrix[mid // n][mid % n]\n            if v == target: return True\n            if v < target: lo = mid + 1\n            else: hi = mid - 1\n        return False",
   "time": "O(log mn)",
   "space": "O(1)",
   "explain": "Pretend the grid is one long sorted list and binary search it (index → row = i ÷ n, column = i mod n).",
   "frames": [
    {
     "title": "Grid",
     "description": "Treat it like one list of 12 numbers.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "matrix",
       "cells": [
        [
         "1",
         "3",
         "5",
         "7"
        ],
        [
         "10",
         "11",
         "16",
         "20"
        ],
        [
         "23",
         "30",
         "34",
         "60"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "mid = 5",
     "description": "Value 11 > 3 → search the left part.",
     "codeLines": [
      7,
      10
     ],
     "facts": {
      "lo": 0,
      "hi": 11
     },
     "rows": [
      {
       "name": "matrix",
       "cells": [
        [
         "1",
         "3",
         "5",
         "7"
        ],
        [
         "10",
         "11",
         "16",
         "20"
        ],
        [
         "23",
         "30",
         "34",
         "60"
        ]
       ],
       "hot": [
        "1,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "mid = 2",
     "description": "Value 5 > 3 → left again.",
     "codeLines": [
      10
     ],
     "facts": {
      "lo": 0,
      "hi": 4
     },
     "rows": [
      {
       "name": "matrix",
       "cells": [
        [
         "1",
         "3",
         "5",
         "7"
        ],
        [
         "10",
         "11",
         "16",
         "20"
        ],
        [
         "23",
         "30",
         "34",
         "60"
        ]
       ],
       "hot": [
        "0,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "mid = 0",
     "description": "Value 1 < 3 → right.",
     "codeLines": [
      9
     ],
     "facts": {
      "lo": 0,
      "hi": 1
     },
     "rows": [
      {
       "name": "matrix",
       "cells": [
        [
         "1",
         "3",
         "5",
         "7"
        ],
        [
         "10",
         "11",
         "16",
         "20"
        ],
        [
         "23",
         "30",
         "34",
         "60"
        ]
       ],
       "hot": [
        "0,0"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "mid = 1",
     "description": "Value 3 = target → True.",
     "codeLines": [
      8
     ],
     "facts": {
      "lo": 1,
      "hi": 1
     },
     "rows": [
      {
       "name": "matrix",
       "cells": [
        [
         "1",
         "3",
         "5",
         "7"
        ],
        [
         "10",
         "11",
         "16",
         "20"
        ],
        [
         "23",
         "30",
         "34",
         "60"
        ]
       ],
       "hot": [
        "0,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Staircase from the top-right",
   "tag": "Alternative",
   "code": "class Solution:\n    def searchMatrix(self, matrix, target):\n        r, c = 0, len(matrix[0]) - 1\n        while r < len(matrix) and c >= 0:\n            if matrix[r][c] == target: return True\n            if matrix[r][c] > target: c -= 1\n            else: r += 1\n        return False",
   "time": "O(m+n)",
   "space": "O(1)",
   "explain": "Go left if too big, down if too small.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Find the row, then the column",
   "tag": "Alternative",
   "code": "class Solution:\n    def searchMatrix(self, matrix, target):\n        rows = [row[0] for row in matrix]; i = bisect_right(rows, target) - 1\n        if i < 0: return False\n        j = bisect_left(matrix[i], target)\n        return j < len(matrix[i]) and matrix[i][j] == target",
   "time": "O(log m + log n)",
   "space": "O(m)",
   "explain": "Binary search the first column to pick a row, then binary search that row.",
   "frames": [],
   "alt": true
  }
 ]
};
