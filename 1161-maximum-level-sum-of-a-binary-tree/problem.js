window.PROBLEM = {
 "id": "1161",
 "title": "Maximum Level Sum of a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree - BFS",
 "question": "The tree's levels are numbered starting from 1 at the root. Given the root of a binary tree, compute the sum of the node values on each level and return the SMALLEST level number that has the maximum sum. Example: [1,7,0,7,-8,null,null] → level sums are 1, 7, −1, so the maximum is on level 2. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "input": "[1, 7, 0, 7, -8, null, null]",
 "output": "2",
 "notes": [
  "Levels are 1-indexed.",
  "Keep the smallest level on ties (strict >)."
 ],
 "best": "BFS by level, tracking the best sum and its level.",
 "variants": [
  {
   "name": "BFS by level",
   "code": "class Solution:\n    def maxLevelSum(self, root):\n        q, level, best, ans = deque([root]), 1, -inf, 1\n        while q:\n            s = 0\n            for _ in range(len(q)):\n                n = q.popleft(); s += n.val\n                if n.left: q.append(n.left)\n                if n.right: q.append(n.right)\n            if s > best: best, ans = s, level\n            level += 1\n        return ans",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Sum each level during BFS.",
   "frames": [
    {
     "title": "Tree",
     "description": "Sum each level.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "7",
        "0"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "7",
        "-8",
        "·",
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 1",
     "description": "Sum = 1 → best so far.",
     "codeLines": [
      7,
      10
     ],
     "facts": {
      "sum": 1,
      "best": 1,
      "level": 1
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "7",
        "0"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "7",
        "-8",
        "·",
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 2",
     "description": "7 + 0 = 7 → new best.",
     "codeLines": [
      10
     ],
     "facts": {
      "sum": 7,
      "best": 7,
      "level": 2
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "7",
        "0"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "7",
        "-8",
        "·",
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 3",
     "description": "7 + (-8) = -1 → not better.",
     "codeLines": [
      10
     ],
     "facts": {
      "sum": -1,
      "best": 7,
      "level": 2
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "7",
        "0"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "7",
        "-8",
        "·",
        "·"
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
     "title": "Return",
     "description": "Level 2.",
     "codeLines": [
      12
     ],
     "facts": {},
     "rows": [
      {
       "name": "ans",
       "cells": [
        "2"
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
   "name": "DFS summing per depth",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxLevelSum(self, root):\n        sums = []\n        def go(n, d):\n            if not n: return\n            if d == len(sums): sums.append(0)\n            sums[d] += n.val\n            go(n.left, d + 1); go(n.right, d + 1)\n        go(root, 0)\n        return sums.index(max(sums)) + 1",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Add each value into the sum for its depth, then pick the biggest.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Level sums are 1, 7 and −1. The biggest is 7 → level 2.",
 "idea": "BFS level by level, keeping the best sum."
};
