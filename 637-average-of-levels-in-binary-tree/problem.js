window.PROBLEM = {
 "id": "637",
 "title": "Average of Levels in Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree - BFS",
 "question": "Given the root of a binary tree, return the average of the node values on each level (the top level first). Example: [3,9,20,null,null,15,7] → level 0 is 3, level 1 is (9+20)/2 = 14.5, level 2 is (15+7)/2 = 11 → [3.0, 14.5, 11.0]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "[3,9,20,null,null,15,7]: level averages 3, (9+20)/2 = 14.5, (15+7)/2 = 11.",
 "idea": "BFS level by level; average = sum ÷ count.",
 "input": "[3,9,20,null,null,15,7]",
 "output": "[3.0, 14.5, 11.0]",
 "notes": [],
 "best": "BFS level by level; average = sum ÷ count.",
 "variants": [
  {
   "name": "BFS by level",
   "code": "class Solution:\n    def averageOfLevels(self, root):\n        res, q = [], deque([root])\n        while q:\n            n = len(q); total = 0\n            for _ in range(n):\n                node = q.popleft(); total += node.val\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            res.append(total / n)\n        return res",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "BFS level by level; average = sum ÷ count.",
   "frames": [
    {
     "title": "Tree",
     "description": "Average each level.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "9",
        "20"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "15",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 0",
     "description": "3 / 1 = 3.0",
     "codeLines": [
      10
     ],
     "facts": {
      "res": "[3.0]"
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "9",
        "20"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "15",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 1",
     "description": "(9 + 20) / 2 = 14.5",
     "codeLines": [
      10
     ],
     "facts": {
      "res": "[3.0, 14.5]"
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "9",
        "20"
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
        "·",
        "·",
        "15",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 2",
     "description": "(15 + 7) / 2 = 11.0",
     "codeLines": [
      10
     ],
     "facts": {
      "res": "[3.0, 14.5, 11.0]"
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "9",
        "20"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "15",
        "7"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "DFS with sums and counts",
   "tag": "Alternative",
   "code": "class Solution:\n    def averageOfLevels(self, root):\n        sums, cnts = [], []\n        def go(n, d):\n            if not n: return\n            if d == len(sums): sums.append(0); cnts.append(0)\n            sums[d] += n.val; cnts[d] += 1\n            go(n.left, d + 1); go(n.right, d + 1)\n        go(root, 0)\n        return [s / c for s, c in zip(sums, cnts)]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Accumulate a sum and a count for every depth.",
   "frames": [],
   "alt": true
  }
 ]
};
