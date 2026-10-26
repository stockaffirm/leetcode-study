window.PROBLEM = {
 "id": "124",
 "title": "Binary Tree Maximum Path Sum",
 "level": "Hard",
 "topic": "Binary Tree - General",
 "question": "A path in a binary tree is a chain of connected nodes where each node is used at most once; it may start and end anywhere and may go up then down through a top node. Its sum is the total of the values on it. Given the root, return the LARGEST path sum. Values can be negative. Example: [-10,9,20,null,null,15,7] → the path 15 → 20 → 7 gives 42. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "[-10,9,20,null,null,15,7]: the path 15 → 20 → 7 sums to 42.",
 "idea": "For each node, find the best downward 'arm' from each child (ignore negatives). The best path through the node = value + left arm + right arm.",
 "input": "[-10,9,20,null,null,15,7]",
 "output": "42",
 "notes": [],
 "best": "For each node, find the best downward 'arm' from each child (ignore negatives). The best path through the node = value + left arm + right arm.",
 "variants": [
  {
   "name": "DFS with best downward arm",
   "code": "class Solution:\n    def maxPathSum(self, root):\n        best = float('-inf')\n        def gain(n):\n            nonlocal best\n            if not n: return 0\n            l, r = max(gain(n.left), 0), max(gain(n.right), 0)\n            best = max(best, n.val + l + r)\n            return n.val + max(l, r)\n        gain(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For each node, find the best downward 'arm' from each child (ignore negatives). The best path through the node = value + left arm + right arm.",
   "frames": [
    {
     "title": "Tree",
     "description": "Compute each node's best downward arm.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "-10"
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
     "title": "Leaves 15, 7",
     "description": "Arms 15 and 7.",
     "codeLines": [
      9
     ],
     "facts": {
      "best": 15
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "-10"
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
    },
    {
     "title": "Node 20",
     "description": "Path through 20: 15 + 20 + 7 = 42 → best. Arm up = 20 + 15 = 35.",
     "codeLines": [
      8
     ],
     "facts": {
      "best": 42,
      "arm up": 35
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "-10"
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
       "hot": [
        2,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Node 9",
     "description": "Arm 9; path 9 alone = 9.",
     "codeLines": [
      8
     ],
     "facts": {
      "best": 42
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "-10"
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
        0
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
     "title": "Root −10",
     "description": "−10 + 9 + 35 = 34 < 42 → best stays 42.",
     "codeLines": [
      8
     ],
     "facts": {
      "best": 42
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "-10"
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
     "title": "Return",
     "description": "42",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "42"
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
   "name": "Brute force (best path through every node)",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxPathSum(self, root):\n        best = float('-inf')\n        def down(n):\n            if not n: return 0\n            return n.val + max(0, down(n.left), down(n.right))\n        def visit(n):\n            nonlocal best\n            if not n: return\n            best = max(best, n.val + max(0, down(n.left)) + max(0, down(n.right)))\n            visit(n.left); visit(n.right)\n        visit(root)\n        return best",
   "time": "O(n²)",
   "space": "O(h)",
   "explain": "For each node compute the best downward arm on each side separately.",
   "frames": [],
   "alt": true
  }
 ]
};
