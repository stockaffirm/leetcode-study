window.PROBLEM = {
 "id": "103",
 "title": "Binary Tree Zigzag Level Order Traversal",
 "level": "Medium",
 "topic": "Binary Tree - BFS",
 "question": "Given the root of a binary tree, list the values level by level, but alternate the direction: the first level left to right, the next right to left, then left to right again, and so on. Example: [3,9,20,null,null,15,7] → [[3],[20,9],[15,7]].",
 "why": "[3,9,20,null,null,15,7] → [[3],[20,9],[15,7]].",
 "idea": "Do normal BFS, and reverse every other level.",
 "input": "[3,9,20,null,null,15,7]",
 "output": "[[3],[20,9],[15,7]]",
 "notes": [],
 "best": "Do normal BFS, and reverse every other level.",
 "variants": [
  {
   "name": "BFS + reverse every other level",
   "code": "class Solution:\n    def zigzagLevelOrder(self, root):\n        res, q, ltr = [], deque([root] if root else []), True\n        while q:\n            level = []\n            for _ in range(len(q)):\n                node = q.popleft(); level.append(node.val)\n                if node.left: q.append(node.left)\n                if node.right: q.append(node.right)\n            res.append(level if ltr else level[::-1]); ltr = not ltr\n        return res",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Do normal BFS, and reverse every other level.",
   "frames": [
    {
     "title": "Tree",
     "description": "Alternate direction each level.",
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
     "title": "Level 0 →",
     "description": "[3]",
     "codeLines": [
      10
     ],
     "facts": {
      "res": "[[3]]"
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
     "title": "Level 1 ←",
     "description": "Read [9,20] but reversed → [20, 9].",
     "codeLines": [
      10
     ],
     "facts": {
      "res": "[[3],[20,9]]"
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
     "title": "Level 2 →",
     "description": "[15, 7]",
     "codeLines": [
      10
     ],
     "facts": {
      "res": "[[3],[20,9],[15,7]]"
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
   "name": "Level lists, reverse alternate levels",
   "tag": "Alternative",
   "code": "class Solution:\n    def zigzagLevelOrder(self, root):\n        if not root: return []\n        res = []; cur = [root]; ltr = True\n        while cur:\n            res.append([n.val for n in cur] if ltr else [n.val for n in reversed(cur)])\n            nxt = []\n            for n in cur:\n                if n.left: nxt.append(n.left)\n                if n.right: nxt.append(n.right)\n            cur = nxt; ltr = not ltr\n        return res",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Build each level as a list and reverse every second one.",
   "frames": [],
   "alt": true
  },
  {
   "name": "DFS with a deque per level",
   "tag": "Alternative",
   "code": "class Solution:\n    def zigzagLevelOrder(self, root):\n        res = []\n        def go(n, d):\n            if not n: return\n            if d == len(res): res.append(deque())\n            if d % 2 == 0: res[d].append(n.val)\n            else: res[d].appendleft(n.val)\n            go(n.left, d + 1); go(n.right, d + 1)\n        go(root, 0)\n        return [list(x) for x in res]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Append on even depths, appendleft on odd depths.",
   "frames": [],
   "alt": true
  }
 ]
};
