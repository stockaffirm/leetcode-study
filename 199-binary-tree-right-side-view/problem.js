window.PROBLEM = {
 "id": "199",
 "title": "Binary Tree Right Side View",
 "level": "Medium",
 "topic": "Binary Tree - BFS",
 "question": "Imagine standing on the right side of a binary tree looking at it. Return the values of the nodes you can see, ordered from top to bottom — that is, the rightmost node on each level. Example: [1,2,3,null,5,null,4] → level 0 shows 1, level 1 shows 3, level 2 shows 4 → [1,3,4]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "input": "[1, 2, 3, null, 5, null, 4]",
 "output": "[1, 3, 4]",
 "notes": [
  "size = len(q) freezes the level width.",
  "w = widest level."
 ],
 "best": "BFS by level; record the last node of each level.",
 "variants": [
  {
   "name": "BFS (last of each level)",
   "code": "class Solution:\n    def rightSideView(self, root):\n        res, q = [], deque([root])\n        while q:\n            size = len(q)\n            for i in range(size):\n                node = q.popleft()\n                if i == size - 1: res.append(node.val)\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n        return res",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Level by level; the last node of each level is visible.",
   "frames": [
    {
     "title": "Tree",
     "description": "BFS one level at a time.",
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
        "2",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "5",
        "·",
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 0",
     "description": "Only node 1 → visible.",
     "codeLines": [
      8
     ],
     "facts": {
      "queue": "[1]",
      "res": "[1]"
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
        "2",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "5",
        "·",
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 1",
     "description": "Nodes 2, 3. The last one (3) is visible.",
     "codeLines": [
      8
     ],
     "facts": {
      "queue": "[2,3]",
      "res": "[1,3]"
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
        "2",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "5",
        "·",
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 2",
     "description": "Nodes 5, 4. The last one (4) is visible.",
     "codeLines": [
      8
     ],
     "facts": {
      "queue": "[5,4]",
      "res": "[1,3,4]"
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
        "2",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "5",
        "·",
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
     "title": "Return",
     "description": "[1, 3, 4]",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "res",
       "cells": [
        "1",
        "3",
        "4"
       ],
       "hot": [
        0,
        1,
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
   "name": "DFS, right side first",
   "tag": "Alternative",
   "code": "class Solution:\n    def rightSideView(self, root):\n        res = []\n        def go(n, d):\n            if not n: return\n            if d == len(res): res.append(n.val)\n            go(n.right, d + 1); go(n.left, d + 1)\n        go(root, 0)\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Visit right before left; the first node seen at each depth is visible.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Level lists",
   "tag": "Alternative",
   "code": "class Solution:\n    def rightSideView(self, root):\n        res, level = [], [root] if root else []\n        while level:\n            res.append(level[-1].val)\n            level = [c for n in level for c in (n.left, n.right) if c]\n        return res",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Keep each level as a list and take its last element.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Row 1: 1. Row 2: 3 hides 2. Row 3: 4 hides 5. → [1, 3, 4].",
 "idea": "BFS level by level. Take the last node of each level."
};
